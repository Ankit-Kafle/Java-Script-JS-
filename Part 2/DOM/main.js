//DOM MANUPULATION


const view1= document.getElementById("view1");
console.log(view1);


//queryselector is a popular method
const view2= document.querySelector("#view2")
console.log(view2);

//changing CSS property
view1.style.display="flex";
view2.style.display="flex";


const views= document.getElementsByClassName("view");
console.log(views);
//Note: HTML collection is like an array but not a array.It has a elements inside it


const sameviews= document.querySelectorAll(".view");
console.log(sameviews);
//Note: A node list has node.In HTML DOM nodes are everything.Nodes are whit space that can be simply text inside of an element.There are more node than elemwnt in a webpage

//Note: instead of document here is a view1 which is a variable of js that contain all the container of view1 so we dont use (. or #) for div
const divs= view1.querySelectorAll("div")
console.log(divs);

const SameDivs= view1.getElementsByTagName("div");
console.log(SameDivs);

const evenDivs= view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for(let i=0; i<evenDivs.length;i++)
{
    evenDivs[i].style.backgroundColor="darkblue";

}

//selecting nav h1 element
const navText= document.querySelector("nav h1");
console.log(navText);
navText.textContent="Hello  World!";

//selecting nav element

const navbar= document.querySelector("nav");
navbar.innerHTML='<h1>Hare Krishna</h1> <p>Jai Shree Radhey'
console.log(navbar);

navbar.style.justifyContent="space-between";

//NAVIGATING THE DOM TREE 
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);

//children are actual element
// child nodes are element and also text nodes also any white space nodes
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);


// Removing and adding elements

view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";

while(view2.lastChild){
    view2.lastChild.remove();
}

//Adding
const createDivs = (parent,iter) => {
    const newDiv= document.createElement("div");
    newDiv.textContent= iter;  //the content itself is going to be the iterator
    newDiv.style.backgroundolor="#000";
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.margin="10px";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignitems="center";
    parent.append(newDiv);

};

// createDivs(view2,10);
for(let i=1;i<=12;i++)
{
    createDivs(view2,i);
}

