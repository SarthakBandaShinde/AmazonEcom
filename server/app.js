require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./db/conn");

// const path = require("path");

const cookieParser = require('cookie-parser');

const Products =  require("./models/productsSchema") ;

const DefaultData = require("./defaultdata");

const cors = require("cors");

const router = require("./routes/router");



app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);


const PORT=  8005;

// //for deployment
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"))
// }

// app.get("/",(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,"client","build")));
//     res.sendFile(path.resolve(__dirname,"client","build","index.html"));
// });


app.listen(PORT,()=>{
    console.log(`server is runing on port number 
        ${PORT}`);
});

DefaultData();