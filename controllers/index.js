const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


module.exports = router;




// This script is a common pattern in Express.js applications when you want 
// to separate your routing concerns into different modules/files, and have 
// each module/file handle routing for a different part of your app.




// ************************************************************************* //
// EXPLANATION FOR:    const router = require('express').Router();
// 
// This line is importing the Express.js library and then immediately invoking the 
// Router() function from it. Express.js is a popular web application framework for 
// Node.js and Router() is a built-in middleware function in Express.js that 
// allows you to group route handlers for a particular part of your site together 
// and access them using a common route-prefix (like /api).
// The Router() function returns an instance of a router object which you can then 
// use to define routes. This instance is being assigned to the constant router.
// ************************************************************************* //





// ************************************************************************* //
// EXPLANATION FOR:    const apiRoutes = require('./api);
//
// This line is importing another JavaScript module located at './api'.
// The './api' module would typically be another JavaScript file that defines 
// some Express.js middleware (probably additional routing) that you want to use in your app.
// The middleware from './api' is being assigned to the constant apiRoutes.
//
// In Node.js, when you use a statement like 
// const apiRoutes = require('./api');
//, Node.js tries to load a module located at ./api 
// The . signifies the current directory, and api is the name of the file or 
// directory you're trying to load.
//
// If api is a file (i.e., api.js), Node.js will directly load this file.
//
// If api is a directory, Node.js will follow a resolution algorithm:
//
// It will look for a file named package.json in the api directory. 
// If it exists, Node.js will look for a "main" field in this file, 
//which specifies the entry point of the module. If the file specified in 
// the "main" field exists, it will be loaded.
//
// If there's no package.json, or there is one but it doesn't have a "main" 
// field or the file specified by "main" can't be found, 
// Node.js will look for a file named index.js in the api directory.
//
// So to answer your question, require('./api'); can either load a file 
// named api.js or an index.js file inside an api directory, 
// depending on what exactly api is (a file or a directory). 
// If api is a directory containing both api.js and index.js, 
// Node.js will load index.js if you use require('./api'), 
// as per its resolution algorithm. 
// If you want to specifically load api.js inside the api directory, 
// you should use require('./api/api').
//
// The require() function in Node.js is used to import modules. When you call require() with 
// a relative path (like ./api), Node.js follows a specific resolution algorithm to figure 
// out what exactly to import. Here's how it works in your case:
//
// ./api: This is indeed a relative path and ./ denotes the current directory. 
// When Node.js sees ./api, it doesn't automatically know whether api is a file or a directory, 
// it follows a series of steps to figure it out:
// File Modules: First, Node.js will look for a file named api.js in the current directory 
// (because .js is the default file extension for Node.js modules). If it finds it, 
// it imports the module from that file and stops looking.
//
// Directory Modules: If there's no file named api.js, Node.js then checks if there's 
// a directory named api in the current directory. If there is, it will then look for a 
// file named index.js inside the api directory (because index.js is the default file 
// Node.js looks for when importing from a directory). If it finds index.js, 
// it imports the module from that file.
//
// If Node.js doesn't find either api.js or api/index.js, it will throw a MODULE_NOT_FOUND error.
// 
// So, ./api could either refer to an api.js file in the current directory or an index.js 
// file inside an api directory in the current directory. It depends on the actual structure of your codebase.
// 
// This resolution algorithm is what allows you to organize your Node.js code into 
// separate modules (either as individual .js files or as directories of .js files) 
// and import them as needed.
// ************************************************************************* //





// ************************************************************************* //
// EXPLANATION FOR:    router.use('/api', apiRoutes);
//
// This line is telling the router to use the apiRoutes middleware for any path 
// that starts with '/api'.
// So if apiRoutes defined a route for '/foo', that route would now be accessible 
// in your app at '/api/foo'.
// ************************************************************************* //




// ************************************************************************* //
// EXPLANATION FOR:    module.exports = router;
//
// using module.exports = router;, you are exporting the value of router directly, 
// not as a property of an object. 
// When you require this module, you get just the router value.
// if our code was:  module.exports = { router }
// The usage of {} brackets in JavaScript typically denotes an object. 
// So now using module.exports = { router }; you have essentially created an 
// object with router as one of its properties, 
// and exporting that object.
// In general - You would choose which to use based on whether you want to 
// export multiple things (use {}) or just one thing (don't use {}).
//
// This line is exporting the router object.
// By exporting router, other parts of your application (or other applications altogether) 
// can import this module and gain access to the router and all the routes that have been defined on it.
// This is done via the CommonJS module system which is native to Node.js. 
// In a CommonJS module, whatever you assign to module.exports is what will be returned 
// when some other part of your app does require() on this file.
// ************************************************************************* //



