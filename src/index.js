const {config} = require("./scripts/chart.js");
//const {updateChart, clearChart, showList, doubleIt} = require("./scripts/list.js");
// const {allItems} = require("./scripts/data.js");
//const {getData} = require("./scripts/options.js");
//const updateChart = chart => {};
//import config from './scripts/chart';
import Item from './scripts/item';
import ListItems from './scripts/list';
import ChartUtils from './scripts/chart_utils';

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("canvas-chart").getContext("2d");

    let chart = new ChartUtils(ctx, config);
    let listItems = new ListItems();

    // const allBreads = document.getElementsByClassName("all-breads");
    // const allCheeses = document.getElementsByClassName("all-cheese");
    // const allProteins = document.getElementsByClassName("all-meat");
    // const allToppings = document.getElementsByClassName("all-toppings");
    // const allCondiments = document.getElementsByClassName("all-condiments");

    const breadName = document.getElementById("item-name-bread")
    const cheeseName = document.getElementById("item-name-cheese")
    const proteinName = document.getElementById("item-name-protein")
    const toppingName = document.getElementById("item-name-toppings");
    const condimentName = document.getElementById("item-name-condiments");

    const allNames = [breadName, cheeseName, proteinName, toppingName, condimentName];

    breadName.addEventListener("click", e => {
        const breadDiv = document.getElementById("bread-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "block";
            } else {
            breadDiv.style.display = "none";
            }
    })

    cheeseName.addEventListener("click", e => {
        const breadDiv = document.getElementById("cheese-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "block";
            } else {
            breadDiv.style.display = "none";
            }
    })

    proteinName.addEventListener("click", e => {
        const breadDiv = document.getElementById("protein-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "block";
            } else {
            breadDiv.style.display = "none";
            }
    })

    toppingName.addEventListener("click", e => {
        const breadDiv = document.getElementById("topping-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "block";
            } else {
            breadDiv.style.display = "none";
            }
    })

    condimentName.addEventListener("click", e => {
        const breadDiv = document.getElementById("condiment-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "block";
            } else {
            breadDiv.style.display = "none";
            }
    })

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