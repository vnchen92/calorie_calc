const breads = require("./data/bread.json");
//const {updateChart} = require("./scripts/options.js");
let {calCount} = require("./scripts/chart.js");

document.addEventListener("DOMContentLoaded", () => {
        let myChart = document.getElementById("canvas-chart");
        let ctx = myChart.getContext("2d");

        Chart.defaults.font.family = 'Lato';
        Chart.defaults.font.size = '12';
        Chart.defaults.font.color = '#777';

        // const calLabels = [ 'Protein', 'Carb', 'Fat'];
        // const calCount = {
        //     labels: calLabels,
        //     datasets: [{
        //         label: 'Calories',
        //         data: [0, 0, 0],
        //         backgroundColor: ['red', 'orange', 'beige'],
        //     }]
        // };

        let calorieCount = new Chart(ctx, {
            type: 'bar',
            data: calCount,
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Current Calorie Count',
                        font: {
                            size: 25
                        }
                    }
                }
            }
        });

        // const myChart = new Chart(
        //    document.getElementById("canvas-chart").getContext("2d"),
        //    config
        //);
        let liCollection = document.getElementsByClassName("option");
        let datasetObj = calCount.datasets[0];
    
        for (let i = 0; i < liCollection.length; i++){
            let li = liCollection[i];
            li.addEventListener("click", e => {
                let liInnerText = li.innerText;
                let nameOfBread = breads[liInnerText];
                if (li.getAttribute("clicked") === "no"){
                    li.setAttribute("clicked", "yes");
                    datasetObj.data[0] += nameOfBread.protein;
                    datasetObj.data[1] += nameOfBread.carb;
                    datasetObj.data[2] += nameOfBread.fat;
                    //need to find out how to render new chart
                } else {
                    li.setAttribute("clicked", "no");
                    datasetObj.data[0] -= nameOfBread.protein;
                    datasetObj.data[1] -= nameOfBread.carb;
                    datasetObj.data[2] -= nameOfBread.fat;
                }
            })
        }
});


//import all js files here, require
//use window.#whatver class you have to  to test things
// window.GameClass = Game