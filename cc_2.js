// Task 1: Working with Arrays - Store Inventory
let products = ["Laptop", "Phone", "Tablet", "Headphones", "Smartwatch"]; // 
products.push("Camera"); 
products.pop(); 
console.log("Updated Product List:", products); 


let scores = [85, 90, 78, 88, 92]; 
scores[1] = 95; 
const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length; 
console.log("Updated Scores:", scores); 
console.log("Average Score:", averageScore); 

let employee = {
    name: "Alex Chaffee",
    age: 30,
    department: "Marketing",
    isActive: true
}; 
employee.department = "Sales"; 
employee.position = "Manager"; 
console.log("Updated Employee Record:", employee); 

let customers = [
    { name: "Alice", email: "alice@hotmail.com", purchaseAmount: 150 },
    { name: "Bob", email: "bob@hotmail.com", purchaseAmount: 200 },
    { name: "Charlie", email: "charlie@hotmail.com", purchaseAmount: 300 }
]; 
customers.push({ name: "Diana", email: "diana@hotmail.com", purchaseAmount: 250 }); 
console.log("Customer List:", customers); 

let order = {
    orderId: 12345,
    customerName: "Emma Stone",
    amount: 500,
    calculateTax: function() {
        return this.amount * 0.1; 
    }
}; 
console.log("Order Details:", order); 
console.log("Tax Amount:", order.calculateTax()); 

