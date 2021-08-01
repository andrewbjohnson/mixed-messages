// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Arrays for quote parts
let quoteArr = [
    ['"Be yourself; ', 'everyone else is ', 'already taken."'],
    ['"You\'ve gotta dance like there\'s nobody watching, ', 'Love like you\'ll never be hurt, ', 'And live like it\'s heaven on earth."'],
    ['"Be the change that ', 'you wish to see ', 'in the world."']
];

function generateQuote() {
    let message = new Object();
    message.partOne = quoteArr[Math.floor(Math.random() * 3)][0];
    message.partTwo = quoteArr[Math.floor(Math.random() * 3)][1];
    message.partThree = quoteArr[Math.floor(Math.random() * 3)][2];
    return message.partOne + message.partTwo + message.partThree;
}


// Handling GET request
app.get('/', (req, res) => {
	res.send(generateQuote())
	res.end()
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
