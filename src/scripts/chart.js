const {allItems} = require("./data.js");

const calLabels = ['Protein', 'Carb', 'Fat'];

const calCount = {
    labels: calLabels,
    datasets: [{
        data: [0, 0, 0],
        backgroundColor: [
            'rgb(191, 196, 134, .7)',
            'rgb(111, 214, 90, .7)',
            'rgb(217, 217, 95, .7)'
        ],
        borderColor: [
            'rgb(191, 196, 134)',
            'rgb(111, 214, 90)',
            'rgb(217, 217, 95)'
        ],
        borderWidth: 2,
        hoverBackgroundColor: 'rgb(204, 147, 73, .7)',
        hoverBorderColor: 'rgb(204, 147, 73)'
    }]
};

// const currentTotalCalLine = {
//     beforeDataSetsDraw(chart, args, options){
//         const {ctx, chartArea: {top, right, bottom, left, width, height}, scales: {x, y}} = chart;
//         ctx.save();
//         ctx.strokeStyle = 'yellow';
//         ctx.setLineDash([10,10]);
//         ctx.strokeRect(left, y.getPixelForValue(500), width, 0);
//         ctx.restore();
//     }
// }

exports.config = {
    type: 'bar',
    data: calCount,
    options: {
        animations: {
            duration: 1000
        },
        scales: {
            x: {
                grid: {
                    borderColor: 'rgb(204, 147, 73)'
                },
                ticks: {
                    
                }
            },
            y: {
                grid: {
                    borderColor: 'rgb(204, 147, 73)'
                },
                title: {
                    display: true,
                    text: 'Calories per Macro'
                    //color:
                },
                ticks: {
                    
                },
                max: 1000
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                backgroundColor: 'rgba(158, 161, 122, 0.5)',
                titleFontColor: 'white',
                titleAlign: 'center',
                titleMarginBottom: 0,
                bodyFontColor: 'white',
                borderWidth: 1,
                borderColor: 'white',
                callbacks: {
                    label: function(item, data){
                        let currentCal = item.raw;
                        if (item.label === 'Protein' || item.label === 'Carb'){
                            return `${Math.floor(currentCal/4)}g`;
                        } else {
                            return `${Math.floor(currentCal/9)}g`;
                        }
                    },
                    afterLabel: function(item, data){
                        return `${item.raw} kcal`
                    },
                    footer: function(item, data){
                        let totalCal = 0;
                        let currentCal = item[0].raw;
                        let dataArray = item[0].dataset.data;
                        for (let i = 0; i < dataArray.length; i++){
                            totalCal += dataArray[i];
                        }
                        return `${Math.round((currentCal/totalCal) * 100)}% of Total Calories`;
                    }
                }
            }
        }
    }
    //plugins: [currentTotalCalLine]
};

let liCollection = document.getElementsByClassName("option");
let listItems = []; //this is used everywhere

const createList = () => {
    let ulItemList = document.getElementById("selected-list-text");
    if (listItems.length > 0) {
        let structuredList = "";
        for (let i = 0; i < listItems.length; i++){
            structuredList += listItems[i] + "\n";
        }
        ulItemList.innerText = structuredList;
    }
}

//here
// const doubleIt = () => {
//     let pTwelveInch = document.getElementById("twelve");
//     pTwelveInch.addEventListener("click", {
        
//     })
// }


const deleteFromList = (arg) => {
    let updatedList = [];
    let ulItemList = document.getElementById("selected-list-text");
    if (listItems.indexOf(arg) > -1){ //listItems.includes(arg)
        let argIndex = listItems.indexOf(arg);
        //updatedList = listItems.slice(0, argIndex).concat(listItems.slice(argIndex+1));
        for (let i = 0; i < listItems.length; i++){
            if (i !== argIndex){
                updatedList.push(listItems[i]);
            }
        }
    }
    let structuredList = "";
    for (let i = 0; i < updatedList.length; i++){
        structuredList += updatedList[i] + "\n";
    }
    ulItemList.innerText = structuredList;
    listItems = updatedList;
}

exports.updateChart = (chart) => {
    let numElement = document.getElementById("total-cal-num");
    let datasetObj = chart.config.data.datasets[0];
    for (let i = 0; i < liCollection.length; i++){
        let li = liCollection[i];
        li.addEventListener("click", e => {
            let liInnerText = li.innerText;
            let nameOfItem = allItems[liInnerText];
            if (li.getAttribute("clicked") === "no"){
                li.setAttribute("clicked", "yes");
                listItems.push(liInnerText);
                datasetObj.data[0] += (nameOfItem.protein * 4);
                datasetObj.data[1] += (nameOfItem.carb * 4);
                datasetObj.data[2] += (nameOfItem.totalFat * 9);
                numElement.innerText = datasetObj.data[0] + datasetObj.data[1] + datasetObj.data[2];
                createList();
                return chart.update();
            } else {
                li.setAttribute("clicked", "no");
                datasetObj.data[0] -= (nameOfItem.protein * 4);
                datasetObj.data[1] -= (nameOfItem.carb * 4);
                datasetObj.data[2] -= (nameOfItem.totalFat * 9);
                numElement.innerText -= ((nameOfItem.protein * 4) + (nameOfItem.carb * 4) + (nameOfItem.totalFat * 9));
                deleteFromList(liInnerText);
                return chart.update();
            }
        })
    }
}

exports.showList = () => {
    let liSelectedList = document.getElementById("selected-list");
    liSelectedList.addEventListener("click", e => {
        if (liSelectedList.classList.contains('active')) {
            liSelectedList.classList.remove('active');
        } else {
            liSelectedList.classList.add('active');
        }
    })
}

exports.clearChart = (chart) => {
    let liClear = document.querySelector(".clear-button");
    let numElement = document.getElementById("total-cal-num");
    let datasetObj = chart.config.data.datasets[0];
    liClear.addEventListener("click", e => {
        for (let i = 0; i < liCollection.length; i++){
            let li = liCollection[i];
            li.setAttribute("clicked", "no");
        }
        datasetObj.data[0] = 0;
        datasetObj.data[1] = 0;
        datasetObj.data[2] = 0;
        numElement.innerText = 0;
        listItems = [];
        return chart.update();
    })
}