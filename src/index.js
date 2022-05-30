const breads = require("./data/bread.json");
//const {updateChart} = require("./scripts/options.js");
const {config} = require("./scripts/chart.js");

document.addEventListener("DOMContentLoaded", () => {
    // const calLabels = ['Protein', 'Carb', 'Fat'];
    // const calCount = {
    //     labels: calLabels,
    //     datasets: [{
    //         label: 'Calories',
    //         data: [0, 0, 0],
    //         backgroundColor: ['red', 'orange', 'beige'],
    //         borderWidth: 20
    //     }]
    // };
    // const config = {
    //     type: 'bar',
    //     data: calCount,
    //     options: {
    //         plugins: {
    //             legend: {
    //                 display: false
    //             },
    //             title: {
    //                 display: true,
    //                 text: 'Current Calorie Count',
    //                 font: {
    //                     size: 25
    //                 }
    //             }
                // scales: {
                //     xAxes: [{
                //       display: false,
                //       ticks: {
                //         min: 0
                //       }
                //     }],
                //     yAxes: [{
                //       display: false
                //     }],
                // }
    //         }
    //     }
    // };
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    ctx.canvas.width  = 500;
    ctx.canvas.height = 300;
    const myChart = new Chart(ctx, config);

    // myChart.defaults.font.family = 'Arial';
    // myChart.defaults.font.size = '12';
    // myChart.defaults.font.color = '777';
    
        // let myChart = document.getElementById("canvas-chart");
        // let ctx = myChart.getContext("2d");

        // const calLabels = [ 'Protein', 'Carb', 'Fat'];
        // const calCount = {
        //     labels: calLabels,
        //     datasets: [{
        //         label: 'Calories',
        //         data: [0, 0, 0],
        //         backgroundColor: ['red', 'orange', 'beige'],
        //     }]
        // };
    
        // let calorieCount = new Chart(ctx, {
        //     config
        // });
        
        
        // const myChart = new Chart(
        //    document.getElementById("canvas-chart").getContext("2d"),
        //    config
        //);

        async function updateChart(){
            let liCollection = document.getElementsByClassName("option");
            let datasetObj = myChart.config.data.datasets[0];
        
            for (let i = 0; i < liCollection.length; i++){
                let li = liCollection[i];
                li.addEventListener("click", e => {
                    let liInnerText = li.innerText;
                    let nameOfBread = breads[liInnerText];
                    if (li.getAttribute("clicked") === "no"){
                        li.setAttribute("clicked", "yes");
                        datasetObj.data[0] += (nameOfBread.protein * 4);
                        datasetObj.data[1] += (nameOfBread.carb * 4);
                        datasetObj.data[2] += (nameOfBread.totalFat * 9);
                        //let response = datasetObj.data;
                        return myChart.update();
                    } else {
                        li.setAttribute("clicked", "no");
                        datasetObj.data[0] -= (nameOfBread.protein * 4);
                        datasetObj.data[1] -= (nameOfBread.carb * 4);
                        datasetObj.data[2] -= (nameOfBread.totalFat * 9);
                        //let response = datasetObj.data;
                        return myChart.update();
                    }
                })
            }
        }
        updateChart().then(response =>{
            // myChart.config.data = response;
            myChart.update();
        })
});


//import all js files here, require
//use window.#whatver class you have to  to test things
// window.GameClass = Game