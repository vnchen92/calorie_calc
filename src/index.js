const breads = require("./data/bread.json");
const {getData} = require("./scripts/options.js");
const {config} = require("./scripts/chart.js");

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    ctx.canvas.width  = 500;
    ctx.canvas.height = 300;
    const myChart = new Chart(ctx, config);

    updataChart(myChart)
        .then(response =>{
            myChart.update();
    })
    // async function updateChart(){
    //     let liCollection = document.getElementsByClassName("option");
    //     let datasetObj = myChart.config.data.datasets[0];
    
    //     for (let i = 0; i < liCollection.length; i++){
    //         let li = liCollection[i];
    //         li.addEventListener("click", e => {
    //             let liInnerText = li.innerText;
    //             let nameOfBread = breads[liInnerText];
    //             if (li.getAttribute("clicked") === "no"){
    //                 li.setAttribute("clicked", "yes");
    //                 datasetObj.data[0] += (nameOfBread.protein * 4);
    //                 datasetObj.data[1] += (nameOfBread.carb * 4);
    //                 datasetObj.data[2] += (nameOfBread.totalFat * 9);
    //                 return myChart.update();
    //             } else {
    //                 li.setAttribute("clicked", "no");
    //                 datasetObj.data[0] -= (nameOfBread.protein * 4);
    //                 datasetObj.data[1] -= (nameOfBread.carb * 4);
    //                 datasetObj.data[2] -= (nameOfBread.totalFat * 9);
    //                 return myChart.update();
    //             }
    //         })
    //     }
    // }
    // updateChart().then(response =>{
    //     myChart.update();
    // })
});


//import all js files here, require
//use window.#whatver class you have to  to test things
// window.GameClass = Game