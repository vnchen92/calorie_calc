const {allItems} = require("./data.js");

const calLabels = ['Protein', 'Carb', 'Fat'];

const calCount = {
    labels: calLabels,
    datasets: [{
        data: [0, 0, 0],
        backgroundColor: [
            'rgb(191, 196, 134)',
            'green',
            'yellow'
        ],
    }]
};

exports.config = {
    type: 'bar',
    data: calCount,
    options: {
        scales: {
            x: {
                ticks: {
                    
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Calories'
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
            // title: {
            //     display: true,
            //     text: 'Current Calories',
            //     font: {
            //         size: 15
            //     }
            // },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                backgroundColor: 'green',
                titleFontColor: 'white',
                titleAlign: 'center',
                titleMarginBottom: 0,
                bodyFontColor: 'pink',
                borderWidth: 2,
                borderColor: 'pink',
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
};

let liCollection = document.getElementsByClassName("option");

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
                return chart.update();
            } else {
                li.setAttribute("clicked", "no");
                datasetObj.data[0] -= (nameOfItem.protein * 4);
                datasetObj.data[1] -= (nameOfItem.carb * 4);
                datasetObj.data[2] -= (nameOfItem.totalFat * 9);
                numElement.innerText -= ((nameOfItem.protein * 4) + (nameOfItem.carb * 4) + (nameOfItem.totalFat * 9));
                return chart.update();
            }
        })
    }
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


// module.exports = {config, calCount, calLabels}