const {config} = require("./scripts/chart.js");
const {updateChart, clearChart, showList, doubleIt} = require("./scripts/list.js");
// const {allItems} = require("./scripts/data.js");
//const {getData} = require("./scripts/options.js");
//const updateChart = chart => {};

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    const myChart = new Chart(ctx, config);

    updateChart(myChart);
    clearChart(myChart);
    showList();
    doubleIt(myChart);
});