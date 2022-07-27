export default class ListItems {
    constructor() {
        this.liSelectedList = document.getElementById("selected-list");
        this.ulItemList = document.getElementById("selected-list-text");
        this.clickedListItems = {};
        this.structuredList = "";
    }

    isItemInList(item) {
        if (this.clickedListItems[item] > 0) {
            return true;
        }
        return false;
    }

    addToList(item) {
        if (this.clickedListItems[item]) {
            this.clickedListItems[item] += 1
        } else {
            this.clickedListItems[item] = 1
        }
    }

    deleteFromList(item) {
        if (this.isItemInList(item)) {
            this.clickedListItems[item] -= 1;
        }
    }

    resetStructuredList() {
        this.structuredList = "";
    }

    createStructuredList() {
        if (Object.values(this.clickedListItems).length > 0) {
            for (let item in this.clickedListItems) {
                if (this.isItemInList(item)) {
                    this.structuredList += item + ": " + this.clickedListItems[item] + "\n";
                }
            }
            this.ulItemList.innerText = this.structuredList;
        }
    }

    clearList() {
        for (let item in this.clickedListItems) {
            this.clickedListItems[item] = 0;
        }
    }

    toggleList() {
        this.liSelectedList.addEventListener("click", e => {
            if (this.liSelectedList.classList.contains('active')) {
                this.liSelectedList.classList.remove('active');
            } else {
                this.liSelectedList.classList.add('active');
            }
        })
    }
}