const { ModuleFilenameHelpers } = require("webpack");
const breads = require("../data/bread.json");
let {calCount} = require("./chart.js");

// function updateChart(){
//     let liCollection = document.getElementsByClassName(".option");
//     let datasetObj = calCount.datasets[0];

//     liCollection.forEach(li => {
//         li.addEventListener("click", e => {
//             let liInnerText = li.innerText;
//             let nameOfBread = breads.liInnerText;
//             if (li.getAttribute("clicked") === no){
//                 li.setAttribute("clicked", "yes");
//                 datasetObj.data[0] += nameOfBread.protein;
//                 datasetObj.data[1] += nameOfBread.carb;
//                 datasetObj.data[2] += nameOfBread.fat;
//             } else {
//                 li.setAttribute("clicked", "no");
//                 datasetObj.data[0] -= nameOfBread.protein;
//                 datasetObj.data[1] -= nameOfBread.carb;
//                 datasetObj.data[2] -= nameOfBread.fat;
//             }
//         })
//     })
// }

// module.exports = {updateChart};


    

    //optionsCanvas.addEventListener("click", functiontoupdatebarchart);
        //if clicked, have an outline around it and update chart
        //if unclicked, remove outline and update chart



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



