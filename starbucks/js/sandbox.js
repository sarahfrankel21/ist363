console.log("sandbox.js is working")

const cars=[
{
name:"ford",
price:"1000",
},
{
name:"bmw",
price:"3000",

},
{
    name:"Ferrari",
    price:"4000",
},
{
    name:"chevy",
    price:"2000",
},
{
    name:"honda",
    price:"1500",
}


];

const filteredCars=cars.filter((car)=>{
const {price}=car;
return cars.price>2500



});
console.log({filteredCars});