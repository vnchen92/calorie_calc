let liCollection = document.getElementsByClassName("option");
let listItems = [];

//document.getElementById("lefteye").style.backgroundColor = "purple";

const createList = (arg) => {
    let liSelectedList = document.getElementById("selected-list");
    let ulItemList = document.getElementById("selected-list-text");
    liSelectedList.addEventListener("click", e => {
        ulItemList.style.visibility = "visible";
        if (ulItemList.getAttribute("clicked") === "no"){
            ulItemList.setAttribute("clicked", "yes");
            listItems.push(arg);
            if (listItems.length === 0) {
                ulItemList.innerText = listItems[i];
            } else {
                let structuredList = "";
                for (let i = 0; i < listItems.length; i++){
                    structuredList += listItems[i] + "\n";
                }
                ulItemList.innerText = structuredList;
            }
        } else {
            ulItemList.setAttribute("clicked", "no");
            ulItemList.style.visibility = "hidden";
                if (listItems.includes(arg)){
                    let argIndex = listItems.indexOf(arg);
                    updatedList = listItems.slice(0, argIndex).concat(listItems.slice(argIndex+1));
                }
                let structuredList = "";
                for (let i = 0; i < updatedList.length; i++){
                    structuredList += updatedList[i] + "\n";
                }
                ulItemList.innerText = structuredList;
        }
    })
}

//DOESNT WORK BUT ALSO DOES NOT ERROR OUT
// exports.showList = () => {
//     let liSelectedList = document.getElementById("selected-list");
//     liSelectedList.addEventListener("click", e => {
//         let ulItemList = document.getElementById("selected-list-text");
//         if (ulItemList.getAttribute("clicked" === "no")){
//             ulItemList.style.visibility = "visible";
//             ulItemList.setAttribute("clicked", "yes");
//         } else {
//             ulItemList.style.visibility = "hidden";
//             ulItemList.setAttribute("clicked", "no");
//         }
//     })
// }

// async function updateChart(){
//     let liCollection = document.getElementsByClassName("option");
//     let datasetObj = myChart.config.data.datasets[0];

//     for (let i = 0; i < liCollection.length; i++){
//         let li = liCollection[i];
//         li.addEventListener("click", e => {
//             let liInnerText = li.innerText;
//             let nameOfItem = allItems[liInnerText];
//             if (li.getAttribute("clicked") === "no"){
//                 li.setAttribute("clicked", "yes");
//                 datasetObj.data[0] += (nameOfItem.protein * 4);
//                 datasetObj.data[1] += (nameOfItem.carb * 4);
//                 datasetObj.data[2] += (nameOfItem.totalFat * 9);
//                 return myChart.update();
//             } else {
//                 li.setAttribute("clicked", "no");
//                 datasetObj.data[0] -= (nameOfItem.protein * 4);
//                 datasetObj.data[1] -= (nameOfItem.carb * 4);
//                 datasetObj.data[2] -= (nameOfItem.totalFat * 9);
//                 return myChart.update();
//             }
//         })
//     }
// }



//if you click this bread, you will get its protein, carb, fat
// function addToChart(bread){
//     let singleBread = {
//         breadName: "",
//         servingSize: 0,
//         calories: 0,
//         totalFat: 0,
//         carb: 0,
//         protein: 0
//     };
//     for (let name in breads) {
//         let breadName = breads[name];
//         if (bread = breadName){
//             singleBread.breadName = breadName;
//             singleBread.servingSize = breadName.servingSize;
//             singleBread.calories = breadName.calories; 
//             singleBread.totalFat = breadName.totalFat;
//             singleBread.carb = breadName.carb;
//             singleBread.protein = breadName.protein;
//         }
//     }
//     return singleBread;
// }



//ENTIRE OLD FILE

let liCollection = document.getElementsByClassName("option");
let listItems = []; //this is used everywhere
const { allItems } = require("./data.js");

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