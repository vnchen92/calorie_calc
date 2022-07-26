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
    const hiddenContent = document.getElementsByClassName("content")

    const removeActive = () => {
        for (let i = 0; i < allNames.length; i++) {
            let name = allNames[i];
            name.className = name.className.replace(" active", "")
        }
        for(let i = 0; i < hiddenContent.length; i++) {
            let content = hiddenContent[i];
            content.style.display = "none"
        }
    }


    breadName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const breadDiv = document.getElementById("bread-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "grid";
            } else {
            breadDiv.style.display = "none";
            }
    })

    cheeseName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const cheeseDiv = document.getElementById("cheese-container")
        if (cheeseDiv.style.display === "none") {
            cheeseDiv.style.display = "grid";
        } else {
        cheeseDiv.style.display = "none";
        }
    })

    proteinName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const proteinDiv = document.getElementById("protein-container")
        if (proteinDiv.style.display === "none") {
            proteinDiv.style.display = "grid";
        } else {
        proteinDiv.style.display = "none";
        }
    })

    toppingName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const toppingDiv = document.getElementById("topping-container")
        if (toppingDiv.style.display === "none") {
            toppingDiv.style.display = "grid";
        } else {
        toppingDiv.style.display = "none";
        }
    })

    condimentName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const condimentDiv = document.getElementById("condiment-container")
        if (condimentDiv.style.display === "none") {
            condimentDiv.style.display = "grid";
        } else {
        condimentDiv.style.display = "none";
        }
    })

    const liCollection = document.getElementsByClassName("option");
    for (let i = 0; i < liCollection.length; i++) {
        let li = liCollection[i];
        let liDiv = document.createElement("div");
        liDiv.className = "add-sub-container";
        li.appendChild(liDiv);
        let add = document.createElement("img");
        add.className = "add-button"
        add.id = `add-button-${li.innerText}`;
        add.src = "../assets/images/add_button.png";
        let subtract = document.createElement("img");
        subtract.className = "subtract-button";
        subtract.id = `subtract-button-${li.innerText}`;
        subtract.src = "../assets/images/subtract.png";
        liDiv.appendChild(add);
        liDiv.appendChild(subtract);
    }


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