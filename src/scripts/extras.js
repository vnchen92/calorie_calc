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