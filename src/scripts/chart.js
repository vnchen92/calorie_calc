const {allItems} = require("./data.js");

const calLabels = ['Protein', 'Carb', 'Fat'];

const calCount = {
    labels: calLabels,
    datasets: [{
        data: [0, 0, 0],
        backgroundColor: ['beige', 'green', 'yellow']
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
                ticks: {
                    
                },
                max: 1500,
                beginAtZero: true
            },
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Current Calories',
                font: {
                    size: 15
                }
            },
            tooltip: {
                yAlign: 'bottom'
                //displayColors: false,
                // callbacks: {

                // }
            }
        }
    }
};

exports.updateChart = (chart) => {
    let liCollection = document.getElementsByClassName("option");
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
                return chart.update();
            } else {
                li.setAttribute("clicked", "no");
                datasetObj.data[0] -= (nameOfItem.protein * 4);
                datasetObj.data[1] -= (nameOfItem.carb * 4);
                datasetObj.data[2] -= (nameOfItem.totalFat * 9);
                return chart.update();
            }
        })
    }
}

exports.clearChart = (chart) => {
    let liClear = document.querySelector(".clear-button");
    liClear.addEventListener("click", e => {
        let datasetObj = chart.config.data.datasets[0];
        datasetObj.data[0] = 0;
        datasetObj.data[1] = 0;
        datasetObj.data[2] = 0;
        return chart.update();
    })
}

// module.exports = {config, calCount, calLabels}