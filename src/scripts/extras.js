

let ulItemList = document.getElementById("selected-list");

let listItems = []
function createList(arg){
    listItems.push(arg);
    let liTag = document.createElement("li");
    for (let i = 0; i < listItems.length; i++) {
        ulItemList.appendChild(liTag);
        liTag.innerText = arg;
    }
}