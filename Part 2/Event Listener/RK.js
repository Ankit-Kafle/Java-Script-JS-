const view = document.querySelector("#view");
const h1 = view.querySelector("h1");


// SYNTAX: addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("doing Something");
};

h1.addEventListener("click", doSomething, false);
h1.removeEventListener("click", doSomething, false);


//for anonymous function we cannot remove

h1.addEventListener("click", function (event){
    console.log(event.target);
    event.target.textContent="Hare Krishna";
})


//Ready State change Event

document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState==="complete")
console.log("readyState: complete");


    // initAPP method kick off our web app program
    initApp(); // at this point it could start loading other event listeners and interact with dom
    })




    //Note: Event bubble up(changes from inward to out) and another useCapture= false (outward to inward)
    const initApp= () =>{
        const view = document.querySelector("#view");
const h1 = view.querySelector("h1");

view.addEventListener("click", (event)=>
    {
    // view.style.backgroundColor="purple";
   // event.stopPropagation(); only this function get run but not of h1
   event.target.style.backgroundColor="purple";
    // view.classList.add("darkblue");
    // view.classList.remove("purple");
   
}
, true);

h1.addEventListener("click", (event)=> {
    //we will do toggling of this
    const myText=  event.target.textContent;
    myText==="My Page"?
    (event.target.textContent="Hare Krishna"):
      (event.target.textContent="My Page");
}, false);

    };



    
    document.addEventListener("readystatechange", (Mainevent) =>{
    if(Mainevent.target.readyState==="complete")
console.log("readyState: complete");

    inApp(); 
    })


   const inApp = () => {
    const view1 = document.querySelector("#view1");
    const divs = view1.querySelectorAll("div");

    view1.addEventListener("click",
        (Mainevent)=>{
        //Note it is not working but while making small project will make it 
        //we will change the different colors of any element 
            // divs.classList.toggle("purple");
            // divs.classList.toggle("darkblue");

     Mainevent.target.style.backgroundColor="purple";

        },false);
    
};

