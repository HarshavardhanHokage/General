const TAX = 0.23;
const BANK_BALANCE = 2000;
const PHONE_PRICE = 500;
const ACCESSORIES = [
    {
        name: "ACC-1",
        price: 20
    },
    {
        name: "ACC-2",
        price: 10
    },
    {
        name: "ACC-3",
        price: 40
    },
    {
        name: "ACC-4",
        price: 100
    },
];

let calculateTax = function(amount) {
    return amount + (amount * TAX);
}

let printStatement = function(totalPrice, cart) {
    console.log(`$Total Cost: ${totalPrice.toFixed(2)}`);
    cart.forEach((item) => {
        console.log(`Phone: ${item.item}`);
        console.log(`Accessory: ${item.accessory}`);
        console.log("#############");
    });
}

let totalExp = 0;
let cart = [];
let min = 0;
let max = ACCESSORIES.length - 1;
while(totalExp < (BANK_BALANCE - PHONE_PRICE)) {
    totalExp = totalExp + PHONE_PRICE;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(random);
    let acc = ACCESSORIES[random];
    totalExp = totalExp + acc.price;
    if(totalExp < BANK_BALANCE) {
        let cartItem = {
            item: "Phone",
            accessory: acc.name
        }
        cart.push(cartItem);
    }
    // else {
    //     totalExp = totalExp - PHONE_PRICE;
    //     totalExp = totalExp - acc.price;
    // }
}
//console.log("Before Tax: " +totalExp);
totalExp = calculateTax(totalExp);
//console.log("After Tax: " +totalExp);
if(totalExp > BANK_BALANCE) {
    console.log("Cant make purchase");
}
else {
    printStatement(totalExp, cart);
}