const {config} = require("./scripts/chart.js");
const {updateChart, clearChart, showList, doubleIt} = require("./scripts/list.js");
// const {allItems} = require("./scripts/data.js");
//const {getData} = require("./scripts/options.js");
//const updateChart = chart => {};

import Item from './scripts/item';
import ListItems from './scripts/list';
import ChartUtils from './scripts/chart_utils';


document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    const myChart = new Chart(ctx, config);

    // updateChart(myChart);
    // clearChart(myChart);
    // showList();
    // doubleIt(myChart);

    let listItems = new ListItems();
    let chart = new ChartUtils();

    const liCollection = document.getElementsByClassName("option");

    listItems.showList();
    
    for (let i = 0; i < liCollection.length; i++) {
        let li = new Item(liCollection[i]);
        li.addEventListener("click", e => {
            if (li.attribute) {
                li.resetAttribute();
                listItems.deleteFromList(li.liInnerText);
                listItems.resetStructuredList();
                listItems.createList();
                chart.subtractFromChart(li.liInnerText);
                return chart.update();
            } else {
                li.setAttributeYes();
                listItems.addToList(li.liInnerText);
                listItems.resetStructuredList();
                listItems.createList();
                chart.addToChart(li.liInnerText);
                return chart.update();
            }
        })
    }

    const liClear = document.querySelector(".clear-button");

    liClear.addEventListener("click", e => {
        listItems.clearList();
        listItems.resetStructuredList();
        chart.clearChart();
        for (let i = 0; i < liCollection.length; i++) {
            let li = new Item(liCollection[i]);
            li.resetAttribute();
        }
    })

});