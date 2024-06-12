import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) =>{
    // console.log(req.rawHeaders);

    res.send("<h1>Hello World !</h1>");
});

app.get("/contact", (req, res) =>{
    res.send("<h1>Contact me</h1><p>My ph number is: 0123456789</p>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>About me</h1><p>My name is Sayan</p>");
});





// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

// app.get("/", (req, res) => {
//     res.send("<h1>Home Page</h1>");
//   });
  
//   app.post("/register", (req, res) => {
//     //Do something with the data
//     res.sendStatus(201);
//   });
  
//   app.put("/user/angela", (req, res) => {
//     res.sendStatus(200);
//   });
  
//   app.patch("/user/angela", (req, res) => {
//     res.sendStatus(200);
//   });
  
//   app.delete("/user/angela", (req, res) => {
//     //Deleting
//     res.sendStatus(200);
//   });

app.listen(port, ()=>{
    console.log(`App is running on port ${port}.`);
});