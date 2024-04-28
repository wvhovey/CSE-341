// Call express module
const expressVariable = require('express');

// Create server variable using the express module
const server = expressVariable();

// Define the server number
const localhost = 3000;

// Retrieve the variables from the routes file
server.use (
    '/', 
    require('./routes')
)

// Create the server and display message if successfull
server.listen (localhost, () => {

    // Display success confirmation message to command line
    console.log(`Your server is running on port ${localhost}`)
})