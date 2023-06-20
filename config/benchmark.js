const Benchmark = require('benchmark'); 
const suite = new Benchmark.Suite();


module.exports = {suite}; 




// ************************************************************************* //
// EXPLANATION FOR:     const Benchmark = require('benchmark'); 
// 
// 'benchmark' is in single quotes because it's referring 
// to a module installed via npm (node package manager). 
// If it were './benchmark'
//, it would be referring to a local file named benchmark.js 
// in the same directory as the current script.
// ************************************************************************* //


// ************************************************************************* //
// EXPLANATION FOR:     const suite = new Benchmark.Suite();
//
// Here, a new instance of 'Benchmark.Suite' is created and assigned 
// to the constant variable 'suite'.
// ************************************************************************* //


// ************************************************************************* //
// EXPLANATION FOR:     module.exports = {suite}; 
//
// is exporting the suite object so that it can be imported 
// and used in another script. 
// It's exported as an object because it allows for the 
// possibility of exporting multiple things. 
// For example, you could also have module.exports = {suite, someOtherThing}; 
// In this case, suite is the only property of the exported object.
// 
// The { suite } syntax is shorthand for { suite: suite }, 
// meaning that an object is being exported which has a 
// property 'suite' that references the 'suite' variable.
// 
// From the Colombia section 1.5.4 - We'll import this benchmark.js module into 
// our Express.js routes when the time comes.
// 
// This exported object can be imported in another file using require, 
// and the 'suite' object can then be accessed like this: 
// const { suite } = require('./file'); 
// where './file' would be the path to the file containing this code.
//
// In this context, module.exports = {suite}; { suite } is shorthand for { suite: suite } 
// in ES6 (or ECMAScript 2015) JavaScript, known as "Object Property Value Shorthand".
//
// syntax simplifies defining objects with properties that reference variables 
//of the same name. 
// It's a way to quickly create an object with properties that have the same names 
// as the variables being assigned to them.
//
// When you're exporting the suite in module.exports = { suite };
// , the suite property can be accessed in the imported module like this:
// const { suite } = require('./file');
//
// ES5 and earlier:
// var someVariable = 42;
// var myObject = { someVariable: someVariable };
//
// ES6 and later:
// let someVariable = 42;
// let myObject = { someVariable };
// 
// In both of these cases, myObject ends up being { someVariable: 42 }.
// ************************************************************************* //