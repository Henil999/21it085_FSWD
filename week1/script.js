// task: 1

// let a = 10;
// var b = "hello";
// const c = 20.45;
// console.log(a, b, c);

// task: 2

// calculation = (a, b) => {
//     return {
//         add:a + b,
//         sub:a - b,
//         mul:a * b,
//         div:a / b};
// }
// console.log(calculation(10, 5));


// task: 3

// let age=parseInt(prompt("Enter your age: "));
// if(age<18){
//     console.log("You are a minor");
// }
// else if(age>=18 && age<65){
//     console.log("You are a adult");
// }
// else{
//     console.log("You are a senior citizen");
// }

//task: 4

// function findMinMaxSalary(salaries) {

//     var minSalary = salaries[0];
//     var maxSalary = salaries[0];

//     for (var i = 1; i < salaries.length; i++) {
//         if (salaries[i] < minSalary) {
//                 minSalary = salaries[i];
//             }   
//         if (salaries[i] > maxSalary) {
//             maxSalary = salaries[i];
//         }
//     }

//     return {
//         min: minSalary,
//         max: maxSalary
//     };
// }
// const salary =["10000", "20000", "30000", "40000", "50000"];
// const result = findMinMaxSalary(salary);

// console.log("Minimum Salary:", result.min);
// console.log("Maximum Salary:", result.max);


//task: 5

// var favoriteBooks = [
//     "Its ends with us",
//     "Its start with us",
//     "Ugly",
//     "atomic habits",
//     "And Then There Were None",
// ];

// function display(books){
//     for(var i=0; i<books.length; i++){
//         console.log(books[i]);
//     }   
// }
// display(favoriteBooks);

//task: 6

// function myFunction(){
//     let a = 10;
//     var b = 20;
//     const c = 30;
// };
// console.log(myFunction());
// task: 7
// let button = document.getElementById("myButton");

//     button.addEventListener("click", function() {
//     button.textContent = "Button Clicked!";
// });

//task: 8

// function checkPositiveNumber(number) {
//     if (number < 0) {
//         throw new Error("Number must be positive.");
//     }

//     return number;
// }
// try {
//     var result = checkPositiveNumber(-5);
//     console.log("Result:", result);
// }
// catch (error) {
//     console.log("Error:", error.message);
// }

//task: 9

function simulateAsyncOperation(callback) {
    setTimeout(function () {
        var result = "Operation completed.";
        callback(result);
    }, 5000);
}

function handleResult(result) {
    console.log("Result:", result);
}

console.log("Starting asynchronous operation...");
simulateAsyncOperation(handleResult);
console.log("Asynchronous operation initiated.");