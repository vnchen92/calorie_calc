const {config} = require("./scripts/chart.js");
//const {updateChart, clearChart, showList, doubleIt} = require("./scripts/list.js");
// const {allItems} = require("./scripts/data.js");
//const {getData} = require("./scripts/options.js");
//const updateChart = chart => {};

import Item from './scripts/item';
import ListItems from './scripts/list';
import ChartUtils from './scripts/chart_utils';


document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");
    //const myChart = new Chart(ctx, config);

    // updateChart(myChart);
    // clearChart(myChart);
    // showList();
    // doubleIt(myChart);

    let listItems = new ListItems();
    let chart = new ChartUtils(ctx, config);

    const liCollection = document.getElementsByClassName("option");

    listItems.toggleList();
    
    for (let i = 0; i < liCollection.length; i++) {
        let li = liCollection[i];
        li.addEventListener("click", e => {
            let liItem = new Item(li);
            if (liItem.attribute) {
                liItem.resetAttribute();
                listItems.deleteFromList(liItem.liInnerText);
                listItems.resetStructuredList();
                listItems.createStructuredList();
                chart.subtractFromChart(liItem.liInnerText);
            } else {
                liItem.setAttributeYes();
                listItems.addToList(liItem.liInnerText);
                listItems.resetStructuredList();
                listItems.createStructuredList();
                chart.addToChart(liItem.liInnerText);
            }
        })
    }

    const liClear = document.querySelector(".clear-button");

    liClear.addEventListener("click", e => {
        listItems.clearList();
        listItems.resetStructuredList();
        listItems.createStructuredList();
        chart.clearChart();
        for (let i = 0; i < liCollection.length; i++) {
            let li = new Item(liCollection[i]);
            li.resetAttribute();
        }
    })

});