const breads = require("./data/bread.json");
//const {updateChart} = require("./scripts/options.js");
//const {config, calCount, calLabels} = require("./scripts/chart.js");

document.addEventListener("DOMContentLoaded", () => {
    const calLabels = ['Protein', 'Carb', 'Fat'];
    const calCount = {
        labels: calLabels,
        datasets: [{
            label: 'Calories',
            data: [0, 0, 0],
            backgroundColor: ['red', 'orange', 'beige'],
        }]
    };
    const config = {
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
    };
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    const myChart = new Chart(ctx, config);

    console.log(myChart.data);
    console.log(myChart.data.labels);
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

        // Chart.defaults.font.family = 'Lato';
        // Chart.defaults.font.size = '12';
        // Chart.defaults.font.color = '#777';
        
        
        // const myChart = new Chart(
        //    document.getElementById("canvas-chart").getContext("2d"),
        //    config
        //);
        updateChart().then(response =>{
            myChart.config.data = response;
            myChart.update();
        })

        async function updateChart(){
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
                        datasetObj.data[2] += nameOfBread.totalFat;
                        let response = datasetObj.data;
                        return response;
                    } else {
                        li.setAttribute("clicked", "no");
                        datasetObj.data[0] -= nameOfBread.protein;
                        datasetObj.data[1] -= nameOfBread.carb;
                        datasetObj.data[2] -= nameOfBread.totalFat;
                        let response = datasetObj.data;
                        console.log(response);
                        return response;
                    }
                })
            }
        }
});


//import all js files here, require
//use window.#whatver class you have to  to test things
// window.GameClass = Game