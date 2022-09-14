const routes = require('express').Router();
const Hotelusers = require("../Connection/DBSchema");
const clientdetails = require("../Connection/DBclientSchema");
const auth = require('../Authantication/Auth');
const  bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const KEY = "myfirstfullstackproject##truemusclescience@gmail.com";

// Server is Running - Show Route
routes.get("/", (req, res) => {
    res.send("Server Running Fine!");
  });
  

//  User Registeration Route!
routes.post('/registeration', async (req , res)=>{
      console.log(req.body);
      const {serverusername, serveremail, serverpassword} = req.body;
      const bcryptpassword = await bcryptjs.hash(serverpassword, 10);

     try {
      const userexist = await Hotelusers.findOne({serveremail});
      if(userexist){
        return res.json({error : "User is Exist"});
      }
      await Hotelusers.create({
       serverusername,
       serveremail, 
       serverpassword: bcryptpassword

      });
      res.status(200).json({massage : "User is Register"})
      
     } catch (error) {
      res.send("Errorrr" + error);
     }
        
  });

  // User login Route!!
  routes.post('/login', async (req, res)=>{
   console.log(req.body);
    const {useremail,userpassword} = req.body;
    
    try {
      const rightuser = await Hotelusers.findOne({ serveremail: useremail});
      if(!rightuser){
        return res.json({massage:"Invaild User and not have acount"})
      }
      const rightpassword = await bcryptjs.compare(userpassword,rightuser.serverpassword);

      if(!rightpassword){
        return  res.json({massge: "Invaild User password is worng"});
      } 
      
      const Token = jwt.sign({email:rightuser.serveremail , id: rightuser._id}, KEY);
      res.json({ email:rightuser.serveremail ,id: rightuser._id ,token:Token})
      
    } catch (error) {
      console.log(error);
    }
  })


 // User payment verify Route!!
 routes.post('/payment' ,auth , async(req, res)=>{

  const { check_in_date, check_out_date, clientname, hoteladdress, hotelname, totelpersons,  totelprice, } = req.body;
  console.log(req.body);
  console.log(req.userId);
  try {
    
  await clientdetails.create({
    clientname,
    totelpersons,
    check_in_date,
    check_out_date,
    totelprice,
    hotelname,
    hoteladdress,
    userId:req.userId,
           });

  

    res.json({massge:"data is store in database"});


  }
   catch (error) {
    console.log(error);
    res.json({massge:"data is not store in database"});
  }
  })


// client order list route
  routes.get('/clientorders',auth, async(req, res)=>{
    const id = req.userId;
    console.log(id);
    const orderlist = await clientdetails.find({userId:id});
    if(orderlist){
      res.json(orderlist);
    }
    else{
      res.json({massge:"No Booking Found"});
    }
    
  })

module.exports = routes;