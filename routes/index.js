// Call the express module and use Router to create
// route handlers between controllers and index
const router = require('express').Router();

// Call the variables from the controllers file
const controller = require('../controllers');

// Retrieve variables from the controllers file
router.get (
    '/', 
    controller.favoriteName1
);

// Send the variables from the controllers file to index
module.exports = router;