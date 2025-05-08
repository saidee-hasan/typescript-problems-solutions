"use strict";
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLocaleLowerCase();
}
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
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year); // Calling the parent class constructor
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// Example usage:
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()); // Output: "Model: Corolla"
