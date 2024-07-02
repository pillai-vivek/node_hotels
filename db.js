const mongoose=require("mongoose");
require("dotenv").config();
//define the mongodb url
 //const mongoURL=process.env.MONGODB_URL_LOCAL;   "mongodb://localhost:27017/hotels";   //local host
const mongoURL= process.env.MONGODB_URL;   //online host
//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//get the default connection 
//Mongoose maintain a default connection object 
const db=mongoose.connection;

//event lister
db.on("connected",()=>{
    console.log("connected to mongodb server");
});
db.on("error",(err)=>{
    console.log("mongodb connection error ",err);
});
db.on("disconnected",()=>{
    console.log("disconnected to mongodb server");
});

//export the database connection
module.exports=db;