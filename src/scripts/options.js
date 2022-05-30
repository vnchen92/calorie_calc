const allItems = require("./data.js");

async function updateChart(){
    let liCollection = document.getElementsByClassName("option");
    let datasetObj = myChart.config.data.datasets[0];

    for (let i = 0; i < liCollection.length; i++){
        let li = liCollection[i];
        li.addEventListener("click", e => {
            let liInnerText = li.innerText;
            let nameOfItem = allItems[liInnerText];
            if (li.getAttribute("clicked") === "no"){
                li.setAttribute("clicked", "yes");
                datasetObj.data[0] += (nameOfItem.protein * 4);
                datasetObj.data[1] += (nameOfItem.carb * 4);
                datasetObj.data[2] += (nameOfItem.totalFat * 9);
                return myChart.update();
            } else {
                li.setAttribute("clicked", "no");
                datasetObj.data[0] -= (nameOfItem.protein * 4);
                datasetObj.data[1] -= (nameOfItem.carb * 4);
                datasetObj.data[2] -= (nameOfItem.totalFat * 9);
                return myChart.update();
            }
        })
    }
}



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



