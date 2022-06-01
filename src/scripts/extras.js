let liCollection = document.getElementsByClassName("option");
let listItems = [];

const createList = (arg) => {
    let liSelectedList = document.getElementById(selected-list);
    let ulItemList = document.getElementById("selected-list-text");
    liSelectedList.addEventListener("click", e => {
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
            ulItemList.setAttribute("clicked", "yes");
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