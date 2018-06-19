// console.log("utils.js is running")
// 
// export const square = (x) => x * x;
// 
// export const add = (a, b) => a + b;

// export { square, add };

// exports - default export -named exports
// can only export named variables

const isAdult = (age) => age >= 18; 
const canDrink = (age) => age >= 21;

export { isAdult, canDrink };
