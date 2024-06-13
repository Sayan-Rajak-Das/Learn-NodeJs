/* -------- Practice set : Bandname Generator -------- */


// -- Solved by me --

/*import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");   //Return the full path of the index.html file
  });

app.post("/submit", (req, res) =>{  
    console.log(req.body);   
    res.send(`<h1>Band name generator</h1><h2>${req.body['street'] + req.body['pet']}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); */




// -- Udemy solution --

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName} ✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
