const { allItems } = require("./data.js");


export default class ListItems {
    constructor() {
        this.liSelectedList = document.getElementById("selected-list");
        this.ulItemList = document.getElementById("selected-list-text");
        //this.listItems = [];
        this.clickedListItems = {};
        this.structuredList = "";
    }

    // addAllListItems() {
    //     const liCollection = document.getElementsByClassName("option");
    //     for (let i = 0; i < this.liCollection.length; i++) {
    //         let li = this.liCollection[i];
    //         this.listItems.push(new Item(li))
    //     }
    // }

    addToList(item) {
        if (this.clickedListItems[item]) {
            this.clickedListItems[item] += 1
        } else {
            this.clickedListItems[item] = 1
        }
    }

    deleteFromList(item) {
        if (this.clickedListItems[item]) {
            this.clickedListItems[item] -= 1;
        }
    }

    // updateList() {
    //     for (let i = 0; i < this.liCollection.length; i++) {
    //         let li = this.liCollection[i];
    //         li.addEventListener("click", e => {
    //             let liInnerText = li.innerText;
    //             if (li.getAttribute("clicked") === "no"){
    //                 li.setAttribute("clicked", "yes");
    //                 this.listItems[liInnerText] = 1;
    //                 createList();
    //             } else {
    //                 li.setAttribute("clicked", no);
    //                 this.listItems[liInnerText] -= 1;
    //                 createList();
    //             }
    //         })
    //     }
    // }

    showList() {
        this.liSelectedList.addEventListener("click", e => {
            if (liSelectedList.classList.contains('active')) {
                liSelectedList.classList.remove('active');
            } else {
                liSelectedList.classList.add('active');
            }
        })
    }

    resetStructuredList() {
        this.structuredList = "";
    }

    createList() {
        if (Object.values(this.clickedListItems).length > 0) {
            for (let item in this.clickedListItems) {
                this.structuredList += item + ": " + this.clickedListItems[item] + "\n";
            }
            this.ulItemList.innerText = this.structuredList;
        } else {
            this.listItems = {}
        }
    }

    clearList() {
        Object.values(this.clickedListItems).length.forEach(item => {
            this.clickedListItems[item] = 0;
        })
    }
}