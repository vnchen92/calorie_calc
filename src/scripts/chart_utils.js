const { allItems } = require("./data.js");

export default class ChartUtils {
    constructor(chart) {
        this.chart = chart;
        this.numElement = document.getElementById("total-cal-num");
        this.datasetObj = chart.config.data.datasets[0];
    }

    addToChart(itemName) {
        let nameOfItem = allItems[itemName];
        this.datasetObj.data[0] += (nameOfItem.protein * 4);
        this.datasetObj.data[1] += (nameOfItem.carb * 4);
        this.datasetObj.data[2] += (nameOfItem.totalFat * 9);
        this.numElement.innerText = this.datasetObj.data[0] + this.datasetObj.data[1] + this.datasetObj.data[2];
    }

    subtractFromChart(itemName) {
        let nameOfItem = allItems[itemName];
        datasetObj.data[0] -= (nameOfItem.protein * 4);
        datasetObj.data[1] -= (nameOfItem.carb * 4);
        datasetObj.data[2] -= (nameOfItem.totalFat * 9);
        this.numElement.innerText -= ((nameOfItem.protein * 4) + (nameOfItem.carb * 4) + (nameOfItem.totalFat * 9));
    }

    clearChart() {
        this.datasetObj.data[0] = 0;
        this.datasetObj.data[1] = 0;
        this.datasetObj.data[2] = 0;
        this.numElement.innerText = 0;
    }

}