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
let listItems = [];
let updatedList = [];

//FULLY FUNCTIONAL
const createList = (arg) => {
    let ulItemList = document.getElementById("selected-list-text");
    listItems.push(arg);
    if (listItems.length === 0) {
        ulItemList.innerText = listItems[i];
    } else {
        let structuredList = "";
        for (let i = 0; i < listItems.length; i++){
            structuredList += listItems[i] + "\n";
        }
        ulItemList.innerText = structuredList;
    }
}

// DOES NOT WORK/ERRORS OUT
// const deleteFromList = (arg) => {
//     let spanItemList = document.getElementById("selected-list-text");
//     console.log(arg);
//     console.log(listItems);
//     debugger
//     if (listItems.includes(arg)){
//         let argIndex = listItems.indexOf(arg);
//         updatedList = listItems.slice(0, argIndex).concat(listItems.slice(argIndex+1));
//     }
//     let structuredList = "";
//     for (let i = 0; i < updatedList.length; i++){
//         structuredList += updatedList[i] + "\n";
//     }
//     spanItemList.innerText = structuredList;
// }

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
                datasetObj.data[0] += (nameOfItem.protein * 4);
                datasetObj.data[1] += (nameOfItem.carb * 4);
                datasetObj.data[2] += (nameOfItem.totalFat * 9);
                numElement.innerText = datasetObj.data[0] + datasetObj.data[1] + datasetObj.data[2];
                createList(liInnerText);
                return chart.update();
            } else {
                li.setAttribute("clicked", "no");
                datasetObj.data[0] -= (nameOfItem.protein * 4);
                datasetObj.data[1] -= (nameOfItem.carb * 4);
                datasetObj.data[2] -= (nameOfItem.totalFat * 9);
                numElement.innerText -= ((nameOfItem.protein * 4) + (nameOfItem.carb * 4) + (nameOfItem.totalFat * 9));
                //debugger
                //deleteFromList(liInnerText);
                return chart.update();
            }
        })
    }
}

//DOESNT WORK BUT ALSO DOES NOT ERROR OUT
exports.showList = () => {
    let liSelectedList = document.getElementById("selected-list");
    liSelectedList.addEventListener("click", e => {
        let ulItemList = document.getElementById("selected-list-text");
        if (ulItemList.getAttribute("clicked" === "no")){
            ulItemList.style.visibility = "visible";
            ulItemList.setAttribute("clicked", "yes");
        } else {
            ulItemList.style.visibility = "hidden";
            ulItemList.setAttribute("clicked", "no");
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
        return chart.update();
    })
}