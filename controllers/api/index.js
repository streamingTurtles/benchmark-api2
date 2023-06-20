const router = require('express').Router();
const sortRoutes = require('./sortBenchmark');

router.use('/sort', sortRoutes);


module.exports = router;





// To summarize, this script is defining a set of routes (using both 
// built-in Express middleware and custom middleware imported from 'sortBenchmark.js') 
// and then exporting that router so it can be used elsewhere in the application.




// ************************************************************************* //
// EXPLANATION FOR: 
// const router = require('express').Router();
// This line is creating a new Router instance from the Express.js library. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app". The Router function is a factory that creates a router object when invoked.
// ************************************************************************* //




// ************************************************************************* //
// EXPLANATION FOR: 
// const sortRoutes = require('./sortBenchmark');
// This line is importing the sortBenchmark module which should be in the same directory as the current script. The sortBenchmark module is expected to export a middleware function or a router. The specifics of what is being imported will depend on the contents of the 'sortBenchmark.js' file.
// ************************************************************************* //




// ************************************************************************* //
// EXPLANATION FOR: 
// router.use('/sort', sortRoutes);
// Here, the use method is called on our router instance. The use method is a function in Express that tells our router what middleware to use. In this case, we're telling our router that whenever it receives a request where the path starts with '/sort', it should use the middleware or router we've imported as sortRoutes.
// ************************************************************************* //



// ************************************************************************* //
// EXPLANATION FOR: 
// module.exports = router;
// Finally, this script exports the router. This allows the router to be imported and used in other parts of the application. By exporting the router, other files can access the routes that we have defined within this file.
// ************************************************************************* //
