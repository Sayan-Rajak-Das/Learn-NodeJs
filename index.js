//< - - - - - - - - -  Basic Node and NDM  - - - - - - - - - - - - >


//1.
// console.log("Hello from Node !!");




// 2.
// ---- File system module ----

// const fs = require("fs");

// fs.writeFile("Message.text", "Hello from NodeJs!", (err) => {
//     if (err) throw err;
//     console.log("File has been saved successfully.");
// });

// fs.readFile("Message.text", "UTF8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });





// 3.
// --- learn  NPM(Node Package Manager) ---

// To create the package.json we should start with 'npm init' command in console...

//  To install the npm packages "Search 'npmjs' on your browser -> search for a npm package(eg: sillyname) -> 
//    install it by copy the code and run in console". Now we can see a package-lock.json file has been created and check 
//    '"sillyname": "^0.1.0"' is added into package.json file..

// Below is the code represents an example how can I use the npm package (the code is taken from the documentation) ..
// var generateName = require('sillyname');
                //or,
// import generateName from "sillyname";   //we also can use the 'import' keyword...But at first we need to go to the package.json file and
                                           //need to add '"type" : "module"', after the "main"...
// var sillyName = generateName();        
// console.log(`My name is ${sillyName}`);


// Another example: We have to generate a random superhero name ..
// To do this at first we have to install the "superheroes" npm package and check 
//    '"superheroes": "^4.0.0"' is added into package.json file..

// (Below code is taken form the documentation..)
// import {randomSuperhero} from 'superheroes';

// console.log(randomSuperhero());






// 4.
//--- Creating a http server ---

import { createServer } from 'node:http';
// import { stringify } from 'node:querystring';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const value = {
    "name":"sayan",
    "name2":"labani"
  };
  res.end(JSON.stringify(value));
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});





// 5.
// Install a npm package "nodemon" in console...
// Go to the package.json file ... and add "dev": "nodemon index.js" into "scripts" ...
// Now start the server by "npm run dev" command in console.
// (Now it automatically run when I update the "index.js" file and save it..)