"use strict";
// ======================================================================== 
const formatString = (input, toUpper = true) => {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
};
// console.log(formatString("Hello"));          
// console.log(formatString("Hello", true));   
// console.log(formatString("Hello", false));  
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
// console.log(filterByRating(books)); 
function concatenateArrays(...arrays) {
    return arrays.flat();
}
// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make:${this.make}, Year:${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model:${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();
// myCar.getModel();  
function processValue(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.length;
    }
    throw new Error("Invalid input type");
}
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    let large = products[0];
    for (let i = 0; i < products.length; i++) {
        if (large.price < products[i].price) {
            large = products[i];
        }
    }
    return large;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
// console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));
async function squareAsync(n) {
    const result = new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        }
        else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
    return result;
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
