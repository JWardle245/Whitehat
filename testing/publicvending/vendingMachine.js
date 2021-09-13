const products = [{name:"Water", price:90}, {name:"Coke", price:110}, {name:"Maltesers", price:140}, {name:"Galaxy", price:180}, {name:"Egg", price:500}, {name:"Easy-Cheesy-Deodorant", price:260}, {name:"Spaghetti-and-Meatballs", price:740}];
const coins = [500, 200, 100, 50, 20, 10];

//Vending machine
const vendingMachine = (products, coins, money, product) => {
    let choice = products[product - 1];

    if (money == choice.price) {
        let change = [0];
        return {product:choice.name,coins:change};
    }
    else if (money > choice.price) {
        let change = [];
        let i=0;
        let diff = money - choice.price;

        while (diff > 0) {
            while (diff - coins[i] >= 0) {
                change.push(coins[i]);
                diff -= coins[i];
            }
            i++;
        }

        return {product:choice.name,coins:change};
    }
    else {
        let change = [money];
        return {product:"not inserted enough money",coins:change}
    }
};

//Display
let menu = "";
for (let i=0;i<products.length;i++){
    n = i+1;

    let temp = products[i].price.toString();
        let output = "";

        if (temp.length > 2) {
            output = temp.substring(0, temp.length-2) + "." + temp.substring(temp.length-2, temp.length);
        }
        else {
            output = "0." + temp;
        }

    menu += n + ": " +products[i].name + ": £" + output + "\n";
}
document.getElementById("menu").innerText = menu;

//Inserting coins
const insertCoin = (amount) => {
    if (amount == 13) {
        document.getElementById("output").innerText = 0;
        document.getElementById("total").innerText = 0;
    }
    else {
        let x = parseInt(document.getElementById("total").innerText);
        let temp = (x += amount).toString();
        let output = "";

        if (temp.length > 2) {
            output = temp.substring(0, temp.length-2) + "." + temp.substring(temp.length-2, temp.length);
        }
        else {
            output = "0." + temp;
        }

        document.getElementById("output").innerText = output;
        document.getElementById("total").innerText = x;
    }
}

//Submit
const submitChoice = () => {
    let product = document.forms["choiceForm"]["product"].value;
    let money = parseInt(document.getElementById("total").innerText);

    document.forms["choiceForm"]["product"].value = "";
    document.getElementById("output").innerText = 0;
    document.getElementById("total").innerText = 0;
    let result = vendingMachine(products, coins, money, product);
    
    let change = "<img class='I" + result.coins[0].toString() + "'>";
    if (result.coins.length>1){
        for (let y=1;y<result.coins.length;y++) {
            change += "<img class='I" + result.coins[y] + "'>";
        }
    }
    //console.log("You have " + result.product + ", your change is " + change);
    document.getElementById("result").innerHTML = "<img class='" + result.product + "'><br>You have " + result.product + ", your change is:";
    document.getElementById("change").innerHTML = change;
}