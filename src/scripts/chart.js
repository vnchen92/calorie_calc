const subwayData = require("./data.js");

let myChart = document.getElementById("canvas-chart");
let ctx = myChart.getContext("2d");

Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = '12';
Chart.defaults.font.color = '#777';

let calorieCount = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Protein', 'Carb', 'Fat'],
        datasets: [{
            label: 'Calories',
            data: [
                40, 50, 20
            ],
            backgroundColor: [
                'red', 'orange', 'beige'
            ]
        }]
    },
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