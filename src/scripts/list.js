let liCollection = document.getElementsByClassName("option");
let listItems = []; //this is used everywhere
const { allItems } = require("./data.js");


class ListItems {
    constructor() {
        this.liCollection = document.getElementsByClassName("option");
        this.liSelectedList = document.getElementById("selected-list");
        this.ulItemList = document.getElementById("selected-list-text");
        this.listItems = {};
        this.structuredList = "";
    }

    updateList() {
        for (let i = 0; i < this.liCollection.length; i++) {
            let li = this.liCollection[i];
            li.addEventListener("click", e => {
                let liInnerText = li.innerText;
                if (li.getAttribute("clicked") === "no"){
                    li.setAttribute("clicked", "yes");
                    this.listItems[liInnerText] = 1;
                    createList();
                } else {
                    li.setAttribute("clicked", no);
                    this.listItems[liInnerText] -= 1;
                    createList();
                }
            })
        }
    }

    showList() {
        this.liSelectedList.addEventListener("click", e => {
            if (liSelectedList.classList.contains('active')) {
                liSelectedList.classList.remove('active');
            } else {
                liSelectedList.classList.add('active');
            }
        })
    }

    createList() {
        if (Object.values(this.listItems).length > 0) {
            for (let item in this.listItems) {
                this.structuredList += item + ": " + listItems[item] + "\n";
            }
            this.ulItemList.innerText = this.structuredList;
        } else {
            this.listItems = {}
        }
    }

    // deleteFromList(item) {
    //     if (this.listItems[item]) {
    //         this.listItems[item] -= 1;
    //     }
    // }
}

const createList = () => {
    let ulItemList = document.getElementById("selected-list-text");
    if (listItems.length > 0) {
        let structuredList = "";
        for (let i = 0; i < listItems.length; i++){
            structuredList += listItems[i] + "\n";
        }
        ulItemList.innerText = structuredList;
    } else {
        listItems = [];
    }
}

const deleteFromList = (arg) => {
    let updatedList = [];
    let ulItemList = document.getElementById("selected-list-text");
    if (listItems.indexOf(arg) > -1){ //listItems.includes(arg)
        let argIndex = listItems.indexOf(arg);
        //updatedList = listItems.slice(0, argIndex).concat(listItems.slice(argIndex+1));
        for (let i = 0; i < listItems.length; i++){
            if (i !== argIndex){
                updatedList.push(listItems[i]);
            }
        }
    }
    let structuredList = "";
    for (let i = 0; i < updatedList.length; i++){
        structuredList += updatedList[i] + "\n";
    }
    ulItemList.innerText = structuredList;
    listItems = updatedList;
}

//here
// exports.doubleIt = (chart) => {
//     let pTwelveInch = document.getElementById("twelve");
//     let datasetObj = chart.config.data.datasets[0];
//     let numElement = document.getElementById("total-cal-num");
//     pTwelveInch.addEventListener("click", e => {
//         if (pTwelveInch.getAttribute("clicked" === "no")){
//             pTwelveInch.setAttribute("clicked", "yes");
//             this.clearChart(chart);
//             for (let i = 0; i < listItems.length; i++){
//                 let itemName = listItems[i];
//                 if (listItems.length > 0) {
//                     datasetObj.data[0] += (allItems[itemName].protein * 4);
//                     datasetObj.data[1] += (allItems[itemName].carb * 4);
//                     datasetObj.data[2] += (allItems[itemName].totalFat * 9);
//                     numElement.innerText = (datasetObj.data[0] + datasetObj.data[1] + datasetObj.data[2]);
//                 } else {

//                 }
//             }
//         }
//     })
// }

const doubleIt = (chart) => {
    let pTwelveInch = document.getElementById("twelve");
    let datasetObj = chart.config.data.datasets[0];
    let numElement = document.getElementById("total-cal-num");
    pTwelveInch.addEventListener("click", e => {
        if (pTwelveInch.classList.contains('active')) {
            pTwelveInch.classList.remove('active');
        } else {
            pTwelveInch.classList.add('active');
            for (let i = 0; i < listItems.length; i++){
                let itemName = listItems[i];
                if (listItems.length > 0) {
                    datasetObj.data[0] += (allItems[itemName].protein * 4);
                    datasetObj.data[1] += (allItems[itemName].carb * 4);
                    datasetObj.data[2] += (allItems[itemName].totalFat * 9);
                    numElement.innerText = (datasetObj.data[0] + datasetObj.data[1] + datasetObj.data[2]);
            //     } else {

                }
            }
        }
    })
}

exports.updateChart = (chart) => {
    let numElement = document.getElementById("total-cal-num");
    let datasetObj = chart.config.data.datasets[0];
    for (let i = 0; i < liCollection.length; i++){
        let li = liCollection[i];
        li.addEventListener("click", e => {
            let liInnerText = li.innerText;
            let nameOfItem = allItems[liInnerText];
            if (li.getAttribute("clicked") === "no"){
                li.setAttribute("clicked", "yes");
                listItems.push(liInnerText);
                datasetObj.data[0] += (nameOfItem.protein * 4);
                datasetObj.data[1] += (nameOfItem.carb * 4);
                datasetObj.data[2] += (nameOfItem.totalFat * 9);
                numElement.innerText = datasetObj.data[0] + datasetObj.data[1] + datasetObj.data[2];
                createList();
                return chart.update();
            } else {
                li.setAttribute("clicked", "no");
                datasetObj.data[0] -= (nameOfItem.protein * 4);
                datasetObj.data[1] -= (nameOfItem.carb * 4);
                datasetObj.data[2] -= (nameOfItem.totalFat * 9);
                numElement.innerText -= ((nameOfItem.protein * 4) + (nameOfItem.carb * 4) + (nameOfItem.totalFat * 9));
                deleteFromList(liInnerText);
                return chart.update();
            }
        })
    }
}

exports.showList = () => {
    let liSelectedList = document.getElementById("selected-list");
    liSelectedList.addEventListener("click", e => {
        if (liSelectedList.classList.contains('active')) {
            liSelectedList.classList.remove('active');
        } else {
            liSelectedList.classList.add('active');
        }
    })
}


exports.clearChart = (chart) => {
    let liClear = document.querySelector(".clear-button");
    let numElement = document.getElementById("total-cal-num");
    let datasetObj = chart.config.data.datasets[0];
    liClear.addEventListener("click", e => {
        for (let i = 0; i < liCollection.length; i++){
            let li = liCollection[i];
            li.setAttribute("clicked", "no");
        }
        datasetObj.data[0] = 0;
        datasetObj.data[1] = 0;
        datasetObj.data[2] = 0;
        numElement.innerText = 0;
        for (let i = 0; i < listItems.length; i++){
            deleteFromList(listItems[i]);
        }
        return chart.update();
    })
}