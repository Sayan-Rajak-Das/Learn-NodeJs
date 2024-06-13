/* -------- Custom Middlewares -------- */


import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next){                 //Creating my own custom middleware function
    console.log("Request Method: ",req.method);
    console.log("Request URL: ",req.url);
    next();                                      //It is very important to call the next() function, 
}                                                //it handles all the middlewares and return to the next step


app.use(logger);                                 //Call the custom middleware function

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(port, () =>{
    console.log(`Server is ruunning on port ${port}`);
});