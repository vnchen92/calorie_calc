const breads = require('../data/bread.json');
const cheeses = require('../data/cheese.json');
const condiments = require('../data/condiments.json');
const proteins = require('../data/proteins.json');
const toppings = require('../data/toppings.json');

const allItems = {};

function addToItems(itemObj){
    for (let key in itemObj){
        allItems[key] = itemObj[key];
    }
}

addToItems(breads);
addToItems(cheeses);
addToItems(condiments);
addToItems(proteins);
addToItems(toppings);


module.exports = {allItems};