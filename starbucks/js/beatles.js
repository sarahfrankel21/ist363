
const calculateAverage = (a,b) => {
    return (a + b) / 2;
}

console.log(calculateAverage(4,27));

const addTen = (num) => {
    return num + 10;
}
//const addTen = num => num + 10;

console.log(addTen(36));


const beatles = [
    {
        name: "Paul",
        age: 78 
    },
    {
        name: "George",
        age: 75
    },
    {
        name: "Ringo",
        age: 80
    },
    {
        name: "John",
        age: 40
    }
];

const sortedBeatlesByAge = [...beatles].sort((a,b) => {
    console.log({a,b});
    if (a.age < b.age) {
        return -1;
    }
});
console.log({sortedBeatlesByAge});


// Video outline

// 1. Learn how to write an arrow function

// old function syntax
// function calculateAverage(a,b) {
//     const result = (a + b) / 2;
//     return result;
// }
// function calculateAverage(a,b) {
//     return (a + b) / 2;
// }

// arrow function syntax
// 2. Review forEach array method
//const beatles = ['Paul', 'George', 'Ringo', 'John'];
//console.log({beatles});
// beatles.forEach((beatle) => {
//     console.log({beatle});
// });

// 3. Review sort array method
//beatles.sort();
//console.log({beatles});

// const sortedBeatles = [...beatles].sort((a,b) => {
//     console.log({a,b});

//     // -1, 0, 1
//     if (a > b) {
//         return -1;
//     }
// }); // sort method end

//console.log({sortedBeatles});
