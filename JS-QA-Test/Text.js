// # ⚡ 20 JavaScript Theory Questions

// ### Fundamentals

// 1. **What is JavaScript? What are its main features?**
answer- javascript is a high-level, interpreted programming language mainly used to make web pages interactive and dynamic.
        it is dynamically typed, it supports object-oriented programming,it supports functional programming,it is single-threaded,it supports asynchronous programming,it runs in browsers and also on servers using Node.js,it supports events and DOM manipulation.


// 2. **What is the difference between `var`, `let`, and `const`?**

answer-var, let, and const are used to declare variables in JavaScript.

var - Function scoped	Block scoped
    Can be redeclared		
    Can be reassigned		
    Hoisted with undefined

let - Block scoped
     Cannot be redeclared in same scope

const - Block scoped
        Cannot be redeclared


// 3. **What are primitive and non-primitive data types in JavaScript?**

answer - javascript data types are mainly divided into primitive and non-primitive data types.
         primitive data type - String, Boolean,undefined,null,BigInt,Symbol

         non-primitive - object,array,function

//4. **What is the difference between `==` and `===`?**

answer - == is called the loose equality operator. It compares values after performing type conversion if required.

        === is called the strict equality operator. It compares both value and data type without type conversion.

        eg. 5 == "5"     // true
            5 === "5"    // false

// 5. **What is type coercion in JavaScript?**

answer - type coercion is the process of automatically or manually converting one data type into another.
eg. let result = "10" + 5;
    console.log(result);


// 6. **What is the difference between `null` and `undefined`?**

answer - undefined means a variable has been declared but has not been assigned a value.
         null means an empty or intentionally absent value.

// 7. **What is the difference between `undefined` and `not defined`?**
     undefined - means a variable exists but does not have a value assigned to it.
     eg.let a;
    console.log(a);
 
    not defined - means the variable has not been declared at all.
    eg.console.log(b);

// 8. **What are truthy and falsy values in JavaScript?**

answer - a truthy value is a value that is treated as true when used in a Boolean context.
a falsy value is a value that is treated as false.

### Functions & Scope

// 9. **What is the difference between a function declaration and function expression?**
answer - a function declaration is a function defined using the function keyword with a function name.
eg.
function add(a, b) {
  return a + b;
}

a function expression is a function stored inside a variable.
eg.const add = function(a, b) {
  return a + b;
};

// 10. **What are arrow functions? How are they different from normal functions?**
answer - Arrow functions are a shorter way of writing functions introduced in ES6.
eg.
const add = (a, b) => {
  return a + b;
};
they can also be written as:
const add = (a, b) => a + b;

// 11. **What is scope in JavaScript? Explain global, function, and block scope.**
answer - Scope determines where a variable can be accessed in a JavaScript program.

1. global scope:
A variable declared outside all functions or blocks has global scope.
let name = "John";
function display() {
  console.log(name);
}
2.function scope: variable declared inside a function can only be accessed inside that function.
function test() {
  let x = 10;
  console.log(x);
}

3. block scope:

Variables declared using let and const inside {} are block scoped.

if (true) {
  let x = 10;
  const y = 20;
}

// 12. **What is a closure in JavaScript? Give a real-world example.**
answer - a closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

eg.function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const increment = counter();
console.log(increment());
console.log(increment());

// 13. **What is hoisting in JavaScript?**
answer - hoisting is a JavaScript behavior where declarations are processed before the code is executed.
eg.greet();
function greet() {
  console.log("Hello");
}

// 14. **What is the `this` keyword in JavaScript?**
answer - this refers to the object associated with the current execution context. Its value depends on how a function is called.
const person = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};
person.greet();

### Advanced JavaScript

// 15. **What is a callback function?**
answer-
a callback function is a function that is passed as an argument to another function and is executed later.

// 16. **What are Promises in JavaScript? Explain `pending`, `fulfilled`, and `rejected`.**
answer-
a Promise is an object used to handle the result of an asynchronous operation.
a Promise has three states:
1. pending: The operation is still in progress.
2. fulfilled: The operation completed successfully.
3. rejected: The operation failed.

// 17. **What is `async/await` and how does it work with Promises?**

answer-
async/await is a simpler way to work with Promises and asynchronous operations.
an async function always returns a Promise.
await pauses the execution of the async function until the Promise is settled.

// 18. **What is the JavaScript Event Loop? Explain the Call Stack, Web APIs, Callback Queue, and Microtask Queue.**
 answer - The Event Loop allows JavaScript to handle asynchronous operations even though JavaScript is single-threaded.
1. Call Stack:
It keeps track of the functions currently being executed.
2. Web APIs:
The browser provides APIs such as setTimeout, DOM events, and network requests to handle asynchronous operations.
3. Callback Queue:
Callbacks from operations such as setTimeout are placed in the callback queue when they are ready.
4. Microtask Queue:
Promise callbacks such as .then(), .catch(), and .finally() are placed in the microtask queue.
The Event Loop checks whether the Call Stack is empty and then moves tasks from the queues to the Call Stack.

// 19. **What is the difference between shallow copy and deep copy?**
answer - a shallow copy copies the top-level properties of an object. Nested objects are still referenced by the original object.
            a deep copy creates a completely independent copy, including nested objects.


// 20. **What are `map()`, `filter()`, `reduce()`, `forEach()`, and `find()`? When would you use each?**

answer - map()- used to create a new array by transforming every element.
        filter() - used to create a new array containing elements that satisfy a condition.
        reduce()-used to reduce an array to a single value, such as a sum or total.
        forEach()-used to execute a function for each element. It does not create a new array.
        find()- used to find the first element that satisfies a condition.













