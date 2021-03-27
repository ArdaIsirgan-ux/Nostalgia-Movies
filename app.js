const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bp = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//STARTING APP
const app = express();

//DOTENV CONFIG
dotenv.config({
    path:path.join(__dirname +"/config/dotenv/.env")
});

//THIRD PARTY MIDDLEWARES
app.use(cors()); //Disabling cors policies for calling localhost API
app.use(express.static("public"));
app.use(bp.urlencoded({extended:false})); //JSON
app.use(bp.json());

//CONNECTING TO DATABASE
mongoose.connect(`${process.env.DB_CONNECT}`,{useUnifiedTopology:true, useNewUrlParser: true})
.then(()=> console.log("Connected to database."))
.catch(err=>console.log(err));

//REQUIRING THE ROUTE MIDDLEWARE
const moviesRoute = require("./routes/movies");


//DEFINING PORT
const PORT = process.env.SRV_PORT;


app.use("/nostalgia",moviesRoute);
//ERROR HANDLING
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname+"/public/html/error.html"));
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}.`);
})