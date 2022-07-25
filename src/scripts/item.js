export default class Item {
    constructor(tag) {
        this.li = tag;
        this.liInnerText = this.li.innerText;
        this.attribute = false;
    }

    // updateAttribute() {
    //     if (this.li.getAttribute("clicked") === "no"){
    //         this.li.setAttribute("clicked", "yes");
    //     } else {
    //         this.li.setAttribute("clicked", no);
    //     }
    // }

    setAttributeYes() {
        this.attribute = true;
        this.li.setAttribute("clicked", "yes");
    }

    resetAttribute() {
        this.attribute = false;
        this.li.setAttribute("clicked", "no")
    }
}
