const breads = require("../data/bread.json");

// let optionsCanvas = document.getElementbyId("canvas-options");
// let ctx = optionsCanvas.getContext("2d");

// let ul = document.createElement("ul");

//if you click this bread, you will get its protein, carb, fat
function addToChart(bread){
    let singleBread = {
        breadName: "",
        servingSize: 0,
        calories: 0,
        totalFat: 0,
        carb: 0,
        protein: 0
    };
    for (let name in breads) {
        let breadName = breads[name];
        if (bread = breadName){
            singleBread.breadName = breadName;
            singleBread.servingSize = breadName.servingSize;
            singleBread.calories = breadName.calories; 
            singleBread.totalFat = breadName.totalFat;
            singleBread.carb = breadName.carb;
            singleBread.protein = breadName.protein;
        }
    }
    return singleBread;
}



