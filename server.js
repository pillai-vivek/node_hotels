const express = require('express');
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());//req.body
 
app.get('/', function (req, res) {
  res.send('Welcom to our Hotel')
})

 const personRoutes=require("./routes/personRouter");
 const menuItemRoutes = require("./routes/menuItemRouter");
  app.use("/person",personRoutes);
  app.use("/menu",menuItemRoutes);



  app.listen(3000 ,()=>{
    console.log("listining to port no. 3000")
  })












