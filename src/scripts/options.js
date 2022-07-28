const breadName = document.getElementById("item-name-bread")
const cheeseName = document.getElementById("item-name-cheese")
const proteinName = document.getElementById("item-name-protein")
const toppingName = document.getElementById("item-name-toppings");
const condimentName = document.getElementById("item-name-condiments");
const infoName = document.getElementById("item-info")

const allNames = [breadName, cheeseName, proteinName, toppingName, condimentName, infoName];
const hiddenContent = document.getElementsByClassName("content")
const infoContent = document.getElementsByClassName("info-content")[0]

const removeActive = () => {
    for (let i = 0; i < allNames.length; i++) {
        let name = allNames[i];
        name.className = name.className.replace(" active", "")
    }
    for(let i = 0; i < hiddenContent.length; i++) {
        let content = hiddenContent[i];
        content.style.display = "none"
    }
    infoContent.style.display = "none"
}

export default toggleOptions = () => {

    infoName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const infoDiv = document.getElementById("info");
        if (infoDiv.style.display === "none") {
            infoDiv.style.display = "grid";
        } else {
            infoDiv.style.display = "none";
        }
    })

    breadName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const breadDiv = document.getElementById("bread-container")
        if (breadDiv.style.display === "none") {
            breadDiv.style.display = "grid";
        } else {
        breadDiv.style.display = "none";
        }
    })

    cheeseName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const cheeseDiv = document.getElementById("cheese-container")
        if (cheeseDiv.style.display === "none") {
            cheeseDiv.style.display = "grid";
        } else {
            cheeseDiv.style.display = "none";
        }
    })

    proteinName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const proteinDiv = document.getElementById("protein-container")
        if (proteinDiv.style.display === "none") {
            proteinDiv.style.display = "grid";
        } else {
            proteinDiv.style.display = "none";
        }
    })

    toppingName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const toppingDiv = document.getElementById("topping-container")
        if (toppingDiv.style.display === "none") {
            toppingDiv.style.display = "grid";
        } else {
        toppingDiv.style.display = "none";
        }
    })

    condimentName.addEventListener("click", e => {
        removeActive();
        e.currentTarget.className += " active";
        const condimentDiv = document.getElementById("condiment-container")
        if (condimentDiv.style.display === "none") {
            condimentDiv.style.display = "grid";
        } else {
        condimentDiv.style.display = "none";
        }
    })

}