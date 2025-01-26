// Task 1: Working with Arrays - Store Inventory
let products = ["Laptop", "Phone", "Tablet", "Headphones", "Smartwatch"]; // Step 1: Declare and initialize
products.push("Camera"); // Step 2: Add a new product
products.pop(); // Step 3: Remove the last product
console.log("Updated Product List:", products); // Step 4: Log the updated list
// Commit message: "Task 1 - Store Inventory"

// Task 2: Accessing and Modifying Arrays - Student Scores
let scores = [85, 90, 78, 88, 92]; // Step 1: Declare and initialize
scores[1] = 95; // Step 2: Update the second score
const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length; // Step 3: Calculate the average
console.log("Updated Scores:", scores); // Step 4: Log updated scores
console.log("Average Score:", averageScore); // Log the average
// Commit message: "Task 2 - Student Scores"

// Task 3: Working with Objects - Employee Records
let employee = {
    name: "John Doe",
    age: 30,
    department: "Marketing",
    isActive: true
}; // Step 1: Declare the object
employee.department = "Sales"; // Step 2: Update department
employee.position = "Manager"; // Step 3: Add new property
console.log("Updated Employee Record:", employee); // Step 4: Log the updated object
// Commit message: "Task 3 - Employee Records"

// Task 4: Array of Objects - Customer Database
let customers = [
    { name: "Alice", email: "alice@example.com", purchaseAmount: 150 },
    { name: "Bob", email: "bob@example.com", purchaseAmount: 200 },
    { name: "Charlie", email: "charlie@example.com", purchaseAmount: 300 }
]; // Step 1: Declare the array
customers.push({ name: "Diana", email: "diana@example.com", purchaseAmount: 250 }); // Step 2: Add new customer
console.log("Customer List:", customers); // Step 3: Log the customer list
// Commit message: "Task 4 - Customer Database"

// Task 5: Object Methods - Order Processing System
let order = {
    orderId: 12345,
    customerName: "Emma Stone",
    amount: 500,
    calculateTax: function() {
        return this.amount * 0.1; // Calculate 10% tax
    }
}; // Step 1: Declare the object
console.log("Order Details:", order); // Step 2: Log order details
console.log("Tax Amount:", order.calculateTax()); // Step 3: Log tax amount
// Commit message: "Task 5 - Order Processing System"

