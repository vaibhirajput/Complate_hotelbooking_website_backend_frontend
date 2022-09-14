const mongoose = require("mongoose");
require('dotenv').config();


const URI=process.env.DATABASE_URL;


// Database connection Start!
mongoose.connect( URI ,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("DB is connected")
}).catch((err)=>{
    console.log("DB is not connected: "+err)
})
 
module.exports = mongoose;