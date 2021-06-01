function Write(list)
{
    console.log("-------------------------------------------");
    for (const listElement of list) {
        if(listElement.bought === true) continue;
        console.log(listElement);
    }

    for (const listElement of list) {
        if(listElement.bought === false) continue;
        console.log(listElement);
    }
    console.log("-------------------------------------------");
}

function Buy(name, list)
{
    list.find(product => product.name === name).bought = true;
}

function Add(product_toAdd, list)
{
    Object.assign(product_toAdd, {bought: false})
    let product = list.find(product => product.name === product_toAdd.name);
    if(product === undefined)
    {
        list.push(product_toAdd);
    }
    else{
        product.count += product_toAdd.count;
    }
}

let ShoppingList = [
    {name: "Apples", count: 5, bought: false},
    {name: "Potato", count: 10, bought: true},
    {name: "Carrots", count: 2, bought: false},
    {name: "Soap", count: 1, bought: false},
    {name: "Shampoo", count: 2, bought: true}
]

Buy("Carrots", ShoppingList)
Add({name: "Pen", count:3}, ShoppingList);

Write(ShoppingList);

Add({name: "Pen", count:5}, ShoppingList);
Add({name: "Soap", count:2}, ShoppingList);

Write(ShoppingList);