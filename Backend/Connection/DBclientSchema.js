const mongoose = require("mongoose");
const conn = require('../Connection/connection');


const Clientdetails = new mongoose.Schema({
    clientname: {
        type:String,
        required:true,
       
    },
    totelpersons:{
        type:Number,
        required:true,
    },
    check_in_date:{
        type:String,
        required:true,
    },
    check_out_date: {
        type:String,
        required:true,
    },
    totelprice: {
        type:Number,
        required:true,
    },
    hotelname:{
        type:String,
        required:true,
    },
    hoteladdress: {
        type:String,
        required:true,
    },
    userId: {
        type:String,
        required:true,
    },
   
   
})

const clientdetails = mongoose.model("Clientdetails", Clientdetails);
module.exports=clientdetails;