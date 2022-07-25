// const breads = require('../data/bread.json');
// const cheeses = require('../data/cheese.json');
// const condiments = require('../data/condiments.json');
// const proteins = require('../data/proteins.json');
// const toppings = require('../data/toppings.json');

import Breads from '../data/bread';
import Cheeses from '../data/cheese';
import Condiments from '../data/condiments';
import Proteins from '../data/proteins';
import Toppings from '../data/toppings';

const allItems = {};

function addToItems(itemObj){
    for (let key in itemObj){
        allItems[key] = itemObj[key];
    }
}

addToItems(Breads);
addToItems(Cheeses);
addToItems(Condiments);
addToItems(Proteins);
addToItems(Toppings);

console.log(allItems);

export default allItems;