let animal = {
    walks(legs) {
        console.log("Walks with " +legs + " legs");
    },
    shouts(shout) {
        console.log(`${this.name + " " + shout}`);
    }
};

let dog = {
    __proto__: animal,
    name: "Dog",
    color: "black",
    stomach: [],
    sleeps(hours) {
        console.log("Sleeps for " + hours + " hours");
    },
    eat(food) {
        this.stomach.push(food);
    }
}

dog.walks(4);
dog.shouts("barks");
dog.sleeps(10);
dog.eat("Meat");
console.log(dog.stomach);

let cat = {
    __proto__: animal,
    name: "Cat",
    color: "White",
    stomach: [],
    sleeps(hours) {
        console.log("Sleeps for " + hours + " hours");
    },
    eat(food) {
        this.stomach.push(food);
    }
}

cat.walks(4);
cat.shouts("Meows");
cat.sleeps(16);
cat.eat("Fish");
console.log(cat.stomach);