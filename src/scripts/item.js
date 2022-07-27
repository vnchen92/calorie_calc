export default class Item {
    constructor(tag) {
        this.li = tag;
        this.liInnerText = this.li.innerText;
        this.attribute = false;
    }

    setAttributeYes() {
        this.attribute = true;
        this.li.setAttribute("clicked", "yes");
    }

    resetAttribute() {
        this.attribute = false;
        this.li.setAttribute("clicked", "no")
    }
}
