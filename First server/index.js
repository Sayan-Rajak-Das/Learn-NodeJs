import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`App is running on port ${port}.`);
});


// COMMAND TO KNOW THE ACTIVE PORTS IN YOUR LOCAL SERVER: netstat -ano | findstr "LISTENING"