console.log("utils.js is running")

// export const square = (x) => x * x;
// export const add = (a, b) => a + b;
// 
// export default (a, b) => a - b;

// export { square, add, subtract as default };
// can use default exports as the one big function that will be used across many files

// exports - default export - named exports
// can only export named variables

export const isAdult = (age) => age >= 18;
export const canDrink = (age) => age >= 21;
export default (age) => age >= 65;

// const isSenior = (age) => age >= 65;
// export { isAdult, canDrink, isSenior as default };
