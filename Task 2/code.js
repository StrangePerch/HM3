function Print(check)
{
    let max_name = Math.max.apply(null, check.map(a => a.name.length));
    let max_cost = Math.max.apply(null, check.map(a => Math.floor(Math.log10(a.cost))));
    for (const checkElement of check) {
        let sum = checkElement.cost & checkElement.amount;
        let name_spaces = max_name + 1 - (checkElement.name.length + Math.floor(Math.log10(checkElement.amount)));
        let cost_spaces = max_cost - Math.floor(Math.log10(checkElement.cost));
        if(checkElement.cost % 1 > 0)
            cost_spaces -= 2;
        console.log(`${checkElement.amount}x${checkElement.name} ${" ".repeat(name_spaces)} & ${" ".repeat(cost_spaces)} ${checkElement.cost}  USD  ${checkElement.cost * checkElement.amount}`);
    }
}

function MostExpensive(list)
{
    let max;
    for (const listElement of list) {
        if(max === undefined || max.cost < listElement.cost)
            max = listElement;
    }
    return max;
}

function Average(list)
{
    let sum = 0;
    for (const listElement of list) {
        sum += listElement.cost;
    }
    return sum / list.length;
}

function Sum(list)
{
    let sum = 0;
    for (const listElement of list) {
        sum += listElement.cost * listElement.amount;
    }
    return sum;
}

let check =
    [
        {name: "Tv", amount: 1, cost: 1999},
        {name: "Chocolate", amount: 2, cost: 5},
        {name: "Pistol", amount: 1, cost: 400},
        {name: "Tank", amount: 30, cost: 400000},
        {name: "Orange", amount: 3, cost: 11},
        {name: "Potato", amount: 20, cost: 8},
        {name: "Ammo", amount: 300, cost: 1.5}
    ]

Print(check);
console.log("Most expensive is " + MostExpensive(check).name);
console.log("Average price per unit is " + Average(check));
console.log("Total cost is " + Sum(check));