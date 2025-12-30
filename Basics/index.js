//console.log() in JavaScript is a debugging function used to print messages or values to the browser’s console.
//console.log() shows output for developers, not for normal users.It helps you see what your code is doing internally.

console.log("jai jai shree radhey shyam");
console.log(typeof "Krishna");


//string
const myVariable="Mathematics";
// the length property
console.log(myVariable.length);
console.log("everybody wants that pure form of love".length);

//String Methods
console.log(myVariable.indexOf("ics"));
console.log(myVariable.indexOf("l"));

let text = "banana";
console.log(text.indexOf("a", 2));

let msg = "I love JavaScript";
console.log(msg.indexOf("JavaScript"));


console.log(myVariable.lastIndexOf("t"));
console.log(myVariable.indexOf("t"));

console.log(myVariable.slice(5,8));

console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

//include method: If the character or group of character we provide the method is not inside the string, the include method returns false

console.log(myVariable.includes("div"));
console.log(myVariable.includes("mat"));

//split method split the string whenever the character we provide occurs
console.log(myVariable.split("e"));
console.log(myVariable.split(""));

console.log("Radhey,Shyam".split(","));
console.log("Radhey,Shyam".split(" "));

//Numbers, Number Methods

//Numbers

const myNumber=42;
const myFloat=42.01;
const myString="42";



console.log(myNumber);
console.log(myFloat);
console.log(myString); //string have the o/p in white color

console.log(myNumber==myFloat);


console.log(myString+3); //Note we can change the string data type into number,look eg below
console.log(Number(myString)+3);

console.log(Number("Dave")); // Output will be not a number NaN
console.log(Number(undefined)); // Output will be not a number NaN
console.log(Number(false));
console.log(Number(true));



// The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));


//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it return NaN.
const luilui="4.123abc"
console.log(Number.parseFloat(luilui));

const guigui="dane"
console.log(Number.parseFloat(guigui));


// The toFixed() method formats a number according to how many decimal points we provide as the parameter
const mitho=1.14356;
console.log(Number.parseFloat(mitho).toFixed(4)); //Why NOT 1.1435? Because toFixed() ROUNDS, it does not truncate.
//but if you put the value 1.14346 it will give o/p->1.1434


//The number.parseInt() method parses a string argument and return an integer
console.log(Number.parseInt(myFloat));
console.log(typeof(Number.parseInt(luilui)));

//.toString() converts a value into a string (text form).
const num = 42;
console.log(num.toString());


//chaining: Using several Methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2));


// The Number.isNAN() method determines whether the passed value is NaN and its type is number.

// | Expression             | Result  | Why                    |
// | ---------------------- | ------- | ---------------------- |
// | `Number("Dave")`       | `NaN`   | Conversion failed      |
// | `Number.isNaN("Dave")` | `false` | It’s a string, not NaN |
// | `Number.isNaN(NaN)`    | `true`  | Real NaN               |


console.log(Number("Dave"));
console.log(Number.isNaN("Dave"));


//the global isNaN() function determines whether a value is Nan or not.
console.log(isNaN("dave"));


//JS MATH METHOD

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.6));

console.log(Math.ceil(3.4)); //ceiling function
console.log(Math.floor(3.9));

console.log(Math.pow(5,2));

console.log(Math.min(2,7,3));
console.log(Math.max(3,9));

console.log(Math.random());

//Note: Choose Math.floor() not Math.ceil() for generating a random no from 1 to 10 because Math.random() returns a range from 0 to 1 that includes 0 but not 1;
console.log(Math.ceil(Math.random()*10)); //has a chance of resulting a zero
console.log(Math.floor(Math.random()*10)+1); 

//Creating a random letter from a name
const myHero="LakhanXapan";
console.log(myHero.charAt(Math.floor(Math.random()*myHero.length)));




//if else condition in js
let testScore=79;
let collegeStudent=false;
let grade;
if(testScore>=90){
    grade="A";
}
else if(testScore>=80) {
    grade="B";
}
else if(testScore>=70) {
    grade="C";
}
else if(testScore>=60) {
    grade="D";
}
else {
    if(collegeStudent){
        grade="U";
    }
    else{
        grade="F";
    }
}
console.log(grade);



// SWITCH STATEMENT in Js


// let pop= Number(prompt("enter the value between 1-7 to know your nickname"));
// switch(pop){

//     case 1:
//         console.log("Dallay");
//         break;
//     case 2:
//         console.log("Darawani");
//         break;
//     case 3:
//         console.log("Sicksar");
//         break;
//     case 4:
//         console.log("TEtu");
//         break;
//     case 5:
//         console.log("Zeroxy");
//         break;
//     case 6:
//         console.log("Sona");
//         break;
     
//     case 7:
//         console.log("KAlI");
//         break;


// }


//Ternary operator
//Condition?ifTrue:ifFalse;

let happy = true;

let response = happy?
 "Hari Kirtan is the highest rasa"
    : "chant hari or cry dhari dhari";

console.log(response);

//Note: Non-empty strings are truthy.The true part will ALWAYS run, no matter what the text is.


let gain = "Kirtan is Best";
let isyouinnocent = false;
let isfaithful = true;

let plainpath = isyouinnocent
    ? "Very good!"
    : isfaithful
        ? `yes, hari ${gain}`
        : "You are doing unfaithful thing";

console.log(plainpath);

//USER INPUT
// alert("Hare Krishna")
// let myBoolean=confirm("OK==True\n Cancel==False");
// console.log(myBoolean);


// let name= prompt("please enter your name");
//this ?? operator is a collesking operator, if name has a value then it log to the console and then if it doesnot or of it's null or undefined then send another type of console
// console.log(name ??"you didn't enter your name");

// if(name){
//     if(name==" "){
//       console.log("you didn't enter any name");   
//     }
//     else{
//     // console.log(name);
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name.trim());
//     } 
// }
// else{
//     console.log("you didn't enter any name");
// }



//LOOPS

//for loop
let name="DaVe";
let counter=0;
let myLetter;
while(true){
    myLetter= name[counter];
    console.log(myLetter);
    if(myLetter==="v")
        break;
    counter++  
}



//ERROR and Error handling

// const name="Dave";   this is ok
//         name="Joe";      error occurs here
//         console.log(name);      there is no catch block so program get crashes here



const makeError = ()=>{    //makeError() is called
    try{                   //JS enters the try block
     const name="Dave";    //const name = "Dave"; → OK
        name="Joe";        //name = "Joe"; → ❌ Error occurs
    }                      // JavaScript stops the try block immediately.Control jumps to catch(err)
    catch(err){            //The error is caught, not crashed
        console.log(err);  //  print the error

     console.error(err); //gives error symbol 

    console.warn(err);  //gives warning symbol

    console.table(err);   // gives error in table form

    console.error(err.message); // giver error in message like form
    console.error(err.name); // giver error name
    console.error(err.stack); // giver most of the detail

    }
};
makeError();
   


//creating our own custom error essentially
const customError = ()=> {
    try{
        throw new Error("This is my custom error message");
    }
    catch(err){
        console.log(err.message);
    }
};
customError();

