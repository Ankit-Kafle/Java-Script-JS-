// INLINE METHOD

import playGuitar, { shredding, plucking } from "./user.js";

console.log(playGuitar());
// console.log(shredding());
// console.log(plucking());

import { shredding as shred, plucking as fingerpicking } from "./user.js";
console.log(shred());
console.log(fingerpicking());





// Rules to remember

// playGuitar → default export → name can change
// shredding, plucking → named exports → names cannot change

// import hello, { shredding, plucking } from "./user.js";

// console.log(hello());
// console.log(shredding());
// console.log(plucking());


import {person} from "./user.js";

const me = new person("name@email.com", "krishna");

console.log(me);
console.log(me.greeting());


// HIGHER ORDER FUNCTION 
//IT IS A FUNCTION TAHT DOES AT LEAsT ONE OF THE FOLLOWING: 1.) TAKE ONE OR MORE FUNCTIONS AS AN ARGUEMENT (PARAMETER) 2.) RETURNS A FUNCTION AS A RESULT
//  In JS, functions can be treated like values.
// So we can pass functions inside functions.
// That makes them Higher Order Functions.




// THESE ARE BUILT IN HIGHER ORDER FUNCTION
import {post} from "./user.js";
 post.forEach((post) =>{
    console.log(post);
 });



 const filteredPosts = post.filter((post =>
 {
    return post.userId ===1;
 }
 ))
 console.log(filteredPosts)



 const mappedPosts= filteredPosts.map((post) => {
return post.id*10;
 });
 console.log(mappedPosts)


 const reducedPostsValue = mappedPosts.reduce((sum,post)=>{
    return sum+post;
 });
 console.log(reducedPostsValue)
 

 //USER DEFINE HIGHER ORDER FUNCTION 
 // normal function
function greet(name) {
    return "Hello " + name;
}

// higher order function
function processUser(callback) {
    console.log(callback("Ankit"));
}

// passing function as argument
processUser(greet);


// | Function  | Returns      | Use                   |
// | --------- | ------------ | --------------------- |
// | forEach() | nothing      | looping / printing    |
// | filter()  | new array    | selecting elements    |
// | map()     | new array    | transforming elements |
// | reduce()  | single value | aggregation           |


// 1️⃣ forEach()
// Purpose
// used to loop through array
// takes function as argument
// does NOT return new array.
// Example
const numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
    console.log(num * 2);
});

// Explanation
// forEach is HOF
// it accepts a function
// that function runs for every element
// mainly used for side effects like printing.



// 2️⃣ filter()
// Purpose
// creates a NEW array
// returns only elements that satisfy condition
// takes function as argument.
// Example

const ages = [12, 18, 20, 15, 30];

const adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

// Explanation
// filter is HOF
// callback returns true or false
// only values with true are added to new array
// original array remains unchanged


// 3️⃣ map()

// Purpose
// transforms each element
// returns NEW array
// same length as original.
// Example


const prices = [100, 200, 300];

const newPrices = prices.map(function(p) {
    return p + 50;
});

console.log(newPrices);

// Explanation
// map is HOF
// callback modifies every element
// result stored in new array
// used when you want modified version of array.

// 4️⃣ reduce()

// Purpose
// reduces array into SINGLE value
// takes function + initial value
// powerful for sum, product, etc.
// Example – Sum of array

const arr = [1, 2, 3, 4];

const sum = arr.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);

console.log(sum);

// Explanation
// reduce is HOF
// accumulator stores previous result
// current is current element
// starts from initial value 0
// final result is one number.