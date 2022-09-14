const mongoose = require("mongoose");
const conn = require('../Connection/connection');
const  bcryptjs = require('bcryptjs');

// User Schema!
const hotelusers = new mongoose.Schema({
serverusername:{
    type:String,
    required:[true, "pls enter name"]
},
serveremail:{
    type:String,
    unique: true, 
    lowercase: true,
    required:[true, "pls enter email"]
},
serverpassword:{
    type:String,
    required:[true, "pls enter password"]
}

})



const Hotelusers = new mongoose.model("Hotelusers" , hotelusers);
module.exports = Hotelusers;