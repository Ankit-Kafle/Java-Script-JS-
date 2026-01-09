// FETCH API REQUIRES A DISCUSSION OF CALLBACKS,PROMISES,THENABLES AND ASYNC/AWAIT

const myPromise= new Promise((resolve,reject) =>{
    const error = false;
    if (!error) {
        resolve("yes! resolved the promise!");
    }
    else{
        reject("No! rejected the promise");
    }
});
console.log(myPromise); //this describe the state but not return the value

myPromise
.then(oldvalue => {
    return oldvalue+1;
})

.then(newValue => {
 return(newValue+2);
})

.then(Diamondvalue => {
    console.log(Diamondvalue);
})
 .catch(err =>{
    console.log(err);
 })


 // Creating a Promise object and storing it in myNextPromise
const myNextPromise = new Promise((resolve, reject) => {
    
    // setTimeout is used to delay execution by 3000 milliseconds (3 seconds)
    setTimeout(function () {
        
        // resolve() is called when the async task is successful
        // This changes the Promise state from "pending" to "fulfilled"
        resolve("myNextPromise resolved!");
        
    }, 3000); // delay of 3 seconds
});

// At this moment, the promise is still pending
// So this will NOT print the resolved value
// It will print: Promise { <pending> }
console.log(myNextPromise);

// .then() runs ONLY after the promise is resolved
// The resolved value is received in the parameter (value)
myNextPromise.then((value) => {
    
    // This will execute after 3 seconds
    // It prints the resolved message
    console.log(value);
});



//FETCH API RETURN A PROMISE ON ITS OWN WE DONT HAVE TO CREATE A PROMISE

const users= fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")

.then(response =>{
    return response.json();
})
.then(data =>{
data.forEach(user => {
    console.log(user.name);
    
})
});

//ASYNC AND AWAIT AVOID THE THENABLES
  // we can also do: async function mycoolfunction(){}


  // creating a myUsers object
  const myUsers={
userList:[]
  }

const myCoolFunction = async() => {
const response= await fetch("https://jsonplaceholder.typicode.com/users") //waiting to get these results from fetch that request that from the json placeholder API
const jsonUserData= await response.json(); // this json method also return a promise
const userId= jsonUserData.map( user=>{
    return user.username;
}) 
return userId;
}

const anotherFunc = async() =>{
    const data = await myCoolFunction();
    myUsers.userList=data;
console.log(myUsers.userList);
}
anotherFunc();
//to use await keyword it must be inside a async function


//workflow function

const getAllUserEmail = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map( user =>{
        return user.email;
    });

    //console.log(userEmailArray);
    postToWebPage(userEmailArray);

    
}


// doing something in the dom
const postToWebPage= (data)=> {
        console.log(data);
    }

getAllUserEmail();


// 2nd parameter of a fetch is a object

const getDadJoke= async() => {
    const response= await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers:{
        Accept:"text/plain"
        }
    }
    );
    const textJokeData = await response.text();
    // console.log(textJokeData);
}
getDadJoke();


const getBadJoke= async() => {
    const response= await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers:{
        Accept:"application/json"
        }
    }
    );
    const jsonJokeData = await response.json();
    // console.log(jsonJokeData);
}
getBadJoke();

//TEST API Example

// We are using https://httpbin.org/post
// This is a testing server, it doesn’t store the joke permanently.

// Creating a joke object to send to the server
const jokeObject = {
    
    id: 'MZvsrzXgyd',

    // joke text
    joke: 'What do you call a snake who builds houses? A boa constructor!'
};


// async function to POST data
const postData = async (jokeObj) => {

    // Sending POST request
    const response = await fetch("https://httpbin.org/post", {
        
        // HTTP method
        method: "POST",

        // Headers tell server we are sending JSON
        headers: {
            "Content-Type": "application/json"
        },

        // Convert JS object → JSON string
        body: JSON.stringify(jokeObj)
    });

    // Converting response to JS object
    const jsonResponse = await response.json();

    // httpbin.org returns everything it received
    // headers show what was sent
    console.log(jsonResponse.headers);

    // You can also see the sent JSON data
    console.log(jsonResponse.json);
};

// calling the function
postData(jokeObject);



//BASIC fetch by URL

// The code’s goal is:
// “Fetch a random Chuck Norris joke from the ICNDB API and replace the first and last name in the joke with your own input (e.g., Bruce Lee), then print the joke.”

// Async function to get a personalized joke
// const requestJoke = async (firstName, lastName) => {

//     // Use backticks `` for template strings
//     const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);

//     // Convert response to JS object
//     const jsonResponse = await response.json();

//     // Print only the joke
//     console.log(jsonResponse.value.joke);
// };

// // Call the function with names
// requestJoke("Bruce", "Lee");





// // Get user input (simulated form data)
// const getDataFromForm = () => {
//     return {
//         firstName: "Bruce",
//         lastName: "Lee",
//         categories: ["nerdy"]
//     };
// };

// Build the API request URL
// const buildRequestUrl = (requestData) => {
//     // Use template strings correctly
//     return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
// };

// // Fetch joke from API (async function)
// async function requestJoke(url) {
//     const response = await fetch(url);
//     const jsonResponse = await response.json();
//     const joke = jsonResponse.value.joke;
//     postJokeToPage(joke);
// }

// // Display the joke
// const postJokeToPage = (joke) => {
//     console.log(joke);
// };

// // Procedural workflow function
// const processJokeRequest = async () => {
//     const requestData = getDataFromForm();            // Step 1: Get data
//     const requestUrl = buildRequestUrl(requestData);  // Step 2: Build URL
//     await requestJoke(requestUrl);                    // Step 3: Fetch and display joke
//     console.log("finished");                          // Step 4: Indicate process completed
// };

// // Start the workflow
// processJokeRequest();
