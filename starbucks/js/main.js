// console.log("js has been loaded");

// variables, methods and functions

// 1. variables
const myName = "Sarah Frankel";
console.log(myName);

const myAge = 21;
const myCity = "Syracuse";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;

console.log(introduction);


// 2. methods
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const coffeeList= document.getElementById("coffeeList");
const ascendingBtn= document.getElementById("ascendingBtn");
const decendingBtn= document.getElementById("decendingBtn");

//console.log(menuBtn);

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); // end of closeBtn click event

//arrays and objects and variables 
//arrays can more than one variable and they are loopable
const coffeeTitle="Mocha";
const coffeeHeadline= document.createElement("h2");
coffeeHeadline.textContent=coffeeTitle;
//document.body.appendChild(coffeeHeadline);

//objects 
const coffee={
    name: "Mocha",
    price: 3.99,
    description: "This is a delicious cup of coffee"
};

console.log(coffee.description);
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent=coffee.name
//document.body.appendChild(coffeeObjHeadline);

// const coffees=[
//     {
//         name:"mocha",
//         price:3.99,
//         description:"delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width:630,
//             height:630,
//             altText: "a cuo of coffee"
//         }
//     },
//     {
//         name:"latte",
//         price:3.99,
//         description:"delicious cup of coffee", 
//         image:{
//             fileName: "coffee.jpg",
//             width:630,
//             height:630,
//             altText: "a cuo of coffee"
//         }
//     },
//     {
//         name:"espresso",
//         price: 3.99,
//         description:"delicious cup of coffee",
//         image:{
//             fileName: "coffee.jpg",
//             width:630,
//             height:630,
//             altText: "a cuo of coffee"
//         }
//     }
// ];
//console.log(coffees[0]);


function buildTextElement(element,className, content){
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent= content;
    return newElement;
}

const sortedCoffees=[...coffees].sort(function(a,b){

if (a.title<b.title){
    return -1;
}
if (a.title>b.title){
    return 1;
}
if (a.title==b.title){
    return 0;
}



});
//console.log ({sortedCoffees});


coffees.forEach(function(coffee){


const{ title, price, description, image} = coffee; 

const coffeeArticle= document.createElement("Article");
coffeeArticle.classList.add("coffee-item");

const coffeeImage= document.createElement("img");

coffeeImage.src=`images/${image.fileName}`;
coffeeImage.width=image.width;
coffeeImage.height=image.height;
coffeeImage.alt=image.altText;

// const coffeeTitle= document.createElement("h2"); 
// coffeeTitle.textContent= title; 
// coffeeTitle.classList.add("coffee-title");

const coffeeTitle= buildTextElement("h2","coffee-title",title)

//const coffeeTitle= coffee;

// const coffeePrice =document.createElement("h3");
// coffeePrice.classList.add("coffee-price");
// coffeePrice.textContent=`$${price}`;

const coffeePrice= buildTextElement("h3","coffee-price",`$${price}`);


const coffeeDescription = document.createElement("p");
coffeeDescription.classList.add("coffee-description");
coffeeDescription.textContent=description;

coffeeArticle.appendChild(coffeeImage);
coffeeArticle.appendChild(coffeeTitle);
coffeeArticle.appendChild(coffeePrice);
coffeeArticle.appendChild(coffeeDescription);


coffeeList.appendChild(coffeeArticle);
});// end of coffees for each


function sortList(sortDirection){
    console.log({sortDirection})
}
function purgeList(){
    coffeeList.innerHTML="";
}

ascendingBtn.addEventListener("click", function(){
    console.log("ascedning button");
    purgeList();
})

decendingBtn.addEventListener("click", function(){
    console.log("decedning button");
    purgeList();
})




//basic array
// const basicCoffee=["mocha", "latte", "espresso"];
// basicCoffee.forEach(function(basicCoffee){});
// console.log({basicCoffee})
