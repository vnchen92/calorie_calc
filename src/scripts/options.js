const breads = require("../data/bread.json");




 

    let ul = document.createElement("ul");
    for (let key in breads){
        let li = document.createElement("li")
        li.innerText = key;
        ul.appendChild(li);
    }

    

    //optionsCanvas.addEventListener("click", functiontoupdatebarchart);
        //if clicked, have an outline around it and update chart
        //if unclicked, remove outline and update chart



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



