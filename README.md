1. What is the difference between var, let, and const?
   Ans:
   var-
   It visible throughout the function where it’s declared (ignores block { }).It can be reassigned. It can be re-declared in the same scope.

let-
It visible only inside the nearest { } (block, loop, if, etc.).It can be reassigned.It can not be re-declared in the same scope.

const-
It visible same as let, but value cannot be reassigned.It cannot be re-declared.

2. What is the difference between map(), forEach(), and filter()?
   Ans:
   map()-
   It returns a new array with the transformed elements.When we need to create a new array based on the old one, we use map().

forEach()-
It executes a function on each array element.It returns nothing, it’s just for looping/side effects.When we want to perform an action like logging, pushing to another array, etc, we use forEach().

filter()-
It selects elements based on a condition.It returns a new array with only elements that pass the test.When we need a subset of the array, we use filter().

3.  What are arrow functions in ES6?
    Ans:
    Arrow functions are a shorter and cleaner syntax for writing functions introduced in ES6.It cannot be used as constructors.When we need concise function syntax, callbacks in methods like (map(), filter(), forEach())
    ,preserve this from outer scope we use arrow functions.

4.  How does destructuring assignment work in ES6?
    Ans:
    In ES6 (JavaScript), destructuring assignment lets us unpack values from arrays or properties from objects into separate variables in a very clean way.

    Example:
    For array--

    const numbers = [10, 20, 30];
    // ES6 destructuring
    const [x, y, z] = numbers;
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30

For object--
const person = { name: "Alice", age: 25, city: "Paris" };
// ES6 destructuring
const { name, age, city } = person;
console.log(name); // Alice
console.log(age); // 25
console.log(city); // Paris

here, at the left we declare variables as like array or object for pulling out needed values from arrays or objects, separately to new variable.

5. Explain template literals in ES6. How are they different from string concatenation?
   Ans:
   Template literals are a new way to create strings using backticks (``) instead of quotes.They make string handling easier and more powerful than traditional concatenation.

Template literals are different from string concatenation.

Template literals:
It's readability is clean & concise. Multi-line strings of Template literals supports naturally. It directly expressed with ${}.

string concatenation:
It's readability is messy with many variables. Multi-line Strings of string concatenation needs \n or string joining.It's expression needs manual concatenation.
