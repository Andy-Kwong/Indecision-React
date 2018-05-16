// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a+b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: "Andy",
    cities: ["San Francisco", "Saratoga Springs", "Saratoga"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5, 10, 15, 20],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
