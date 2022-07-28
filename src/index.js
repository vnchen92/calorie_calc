const {config} = require("./scripts/chart.js");
import Item from './scripts/item';
import ListItems from './scripts/list';
import ChartUtils from './scripts/chart_utils';
import toggleOptions from './scripts/options';

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");

    let listItems = new ListItems();

    listItems.toggleList();
    toggleOptions();

    let chart = new ChartUtils(ctx, config, listItems.clickedListItems);

    const liCollection = document.getElementsByClassName("option");
    for (let i = 0; i < liCollection.length; i++) {
        let li = liCollection[i];
        let liDiv = document.createElement("div");
        liDiv.className = "add-sub-container";
        li.appendChild(liDiv);
        let add = document.createElement("img");
        add.className = "add-button"
        add.src = "./assets/images/add_button.png";
        let subtract = document.createElement("img");
        subtract.className = "subtract-button";
        subtract.src = "./assets/images/subtract.png";
        liDiv.appendChild(add);
        liDiv.appendChild(subtract);

        let liItem = new Item(li);

        add.addEventListener("click", e => {
            liItem.setAttributeYes();
            listItems.addToList(liItem.liInnerText);
            listItems.resetStructuredList();
            listItems.createStructuredList();
            chart.addToChart(liItem.liInnerText);
        })

        subtract.addEventListener("click", e => {
            chart.subtractFromChart(liItem.liInnerText);
            listItems.deleteFromList(liItem.liInnerText);
            listItems.resetStructuredList();
            listItems.createStructuredList();
            if (!listItems.isItemInList(liItem.liInnerText)) {
                liItem.resetAttribute();
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