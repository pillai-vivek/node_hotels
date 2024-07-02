const express = require('express');
const app = express();
const db = require("./db");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());//req.body
const PORT=process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('Welcom to our Hotel')
})

 const personRoutes=require("./routes/personRouter");
 const menuItemRoutes = require("./routes/menuItemRouter");
  app.use("/person",personRoutes);
  app.use("/menu",menuItemRoutes);



  app.listen(PORT ,()=>{
    console.log("listining to port no. 3000")
  })












