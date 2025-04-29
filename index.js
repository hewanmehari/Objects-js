

// 1. Employee Constructor, Increase Developer Salaries
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


// 2. Filter and Sort Products by inStock and Price
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

// 3. Grades Object - Calculate Averages
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
        console.log(`${student}: Average = ${average.toFixed(2)} - ${result}`);
    }
}

console.log("The students grade is:");
averages(grades);



// 4. User Constructor - Deactivate Inactive Users
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
    user.isActive = Math.random() > 0.5; // Random active/inactive
});

const activeUsers = users.filter(user => user.isActive);

console.log("Active Users:");
activeUsers.forEach(user => console.log(user.username));



// 5. Filter Destinations by Budget and Distance
const destinations = [
    { name: "Paris", distance: 5000, budgetRequired: 1500 },
    { name: "London", distance: 50, budgetRequired: 300 },
    { name: "Mekelle", distance: 200, budgetRequired: 100 },
    { name: "Nairobi", distance: 100, budgetRequired: 500 }
];

function findAffordableDestinations(maxDistance, maxBudget) {
    const available = destinations.filter(destination =>
        destination.distance <= maxDistance && destination.budgetRequired <= maxBudget
    );
    if (available.length === 0) {
        return "No destinations available under your budget and distance.";
    }
    return available;
}

console.log("Affordable Destinations:");
console.log(findAffordableDestinations(300, 400));