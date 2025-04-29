

// 1. Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees.
//  Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. (5 pts)
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

let employees = [
    new Employee("Hewan", "developer", 6000),
    new Employee("Metkel", "trainer", 10000),
    new Employee("Naima", "developer", 5500),
    new Employee("Linn", "designer", 4800),
    new Employee("Kevine", "developer", 3000)
];

employees.forEach(employee => {
    if (employee.position.toLowerCase() === "developer") {
        employee.salary *= 1.10;
    }
});

console.log("Updated Employees List:");
console.log(employees);


// 2.  Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the 
// products that are inStock: true, and sort the available products by price in ascending order. (5 pts)

function SortedProducts(products) {
    return products
        .filter(product => product.inStock)
        .sort((a, b) => a.price - b.price);
}

const products = [
    { name: "T-shirt", price: 600, inStock: true },
    { name: "Shoes", price: 2000, inStock: false },
    { name: "Trousers", price: 1200, inStock: true },
    { name: "Shorts", price: 500, inStock: true }
];

console.log("Available Products Sorted by Price are:");
console.log(SortedProducts(products));

// 3. Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints
//  each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)

const grades = {
    "Rigbe": [88, 70, 92, 78],
    "Mercylin": [66, 65, 78, 68],
    "Victoria": [78, 65, 89, 90],
    "Meron": [50, 55, 45, 54]
};

function averages(grades) {
    for (const student in grades) {
        const scores = grades[student];
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        const result = average > 70 ? "Pass" : "Fail";
        console.log(`${student}: Average = ${average} - ${result}`);
    }
}

console.log("The students grade is:");
averages(grades);


4.// Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. 
// Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a 
// random isActive: false assignment) and print out the usernames of active users. (5 pts)
function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}

const users = [
    new User("user1", "hewan@gmail.com", true),
    new User("user2", "lwam@gmail.com", true),
    new User("user3", "fiyona@gmail.com", true),
    new User("user4", "fana@gmail.com", true),
    new User("user5", "queen@gmail.com", true)
];

users.forEach(user => {
    user.isActive = Math.random() > 0.5;
});

const activeUsers = users.filter(user => user.isActive);

console.log("Active Users:");
activeUsers.forEach(user => console.log(user.username));



// 5. You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum
//  distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available
//  under your budget and distance". (5 pts)
const destinations = [
    { name: "Paris", distance: 5000, budgetRequired: 1500 },
    { name: "London", distance: 50, budgetRequired: 300 },
    { name: "Mekelle", distance: 200, budgetRequired: 100 },
    { name: "Nairobi", distance: 100, budgetRequired: 500 }
];

function affordableDestinations(maxDistance, maxBudget) {
    const available = destinations.filter(destination =>
        destination.distance <= maxDistance && destination.budgetRequired <= maxBudget
    );
    if (available.length === 0) {
        return "No destinations available under your budget and distance.";
    }
    return available;
}

console.log("Affordable Destinations:");
console.log(affordableDestinations(300, 400));