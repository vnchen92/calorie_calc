const leftSide = require("./scripts/options.js");
const {calCount} = require("./scripts/chart.js");

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
});


//import all js files here, require
//use window.#whatver class you have to  to test things
// window.GameClass = Game