const jwt = require('jsonwebtoken');
const KEY = "myfirstfullstackproject##truemusclescience@gmail.com";

const auth = async (req, res, next)=>{

    try {
      let token = await req.headers.authorization;
      token = token.split(" ")[1];
      let user = jwt.verify(token, KEY);
        if(user){
           
            req.userId = user.id;
            console.log("vaild user")
      
        }
        else{
         return  res.status(401).json({massage:"Not Vaild User"})
        }
        next();
      
    } catch (error) {
        console.log("error "+error)
        console.log("not vaild user")
        res.status(401).json({massage:"Not Vaild User"})
    }
}

module.exports = auth;