const {config, updateChart, clearChart, showList} = require("./scripts/chart.js");
// const {allItems} = require("./scripts/data.js");
//const {getData} = require("./scripts/options.js");
//const updateChart = chart => {};

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    const myChart = new Chart(ctx, config);

    updateChart(myChart);
    clearChart(myChart);
    showList();

});


//import all js files here, require
//use window.#whatver class you have to  to test things
// window.GameClass = Game