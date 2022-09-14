// website loader logic
var loader = document.getElementById("loader");

window.addEventListener("load" , function(){
    loader.style.display ="none";
})

// login innerHTML show dynamically

var log = ` <div id="please-login">
<h2>Please Login</h2>
<span onclick="login()" id="cross">&#9587;</span>
</div>
<hr>
<form id="frombox" action="javascript:void(0)" onsubmit="loginvalues()">
<div class="form">
    <label for=""> Username :</label> <input type="text" name="username" placeholder="Enter Username" id="username" required>
</div>
<div class="form">
    <label for=""> Password :</label> <input id="passwordd" type="password" name="password" placeholder="Enter Password" required >
</div>

<hr>
<div id="loginboxdiv">
<button type="submit"   id="loginboxbtn">Login</button>
</div>
</form>`
document.getElementById("loginbox").innerHTML= log;


// contact us innerHTML show dynamically

var contus = ` <div id="get-touch">
<h2>Get in touch</h2>
<span onclick="contactus()" id="cross">&#9587</span>
</div>
<hr>
<form id="contactfrom" action="">
<div class="email">
    <p>Thank you for reaching out!!!</p>
    <p>Please enter your email and we will back to you.</p>

</div>
<div class="email">
    <label for=""> Email: </label> <input type="email" value="" placeholder="Enter your email id">
</div>

</form>
<hr>
<div id="contactboxbtn">
<button id="contactsubmitbtn"><a href="#">Submit</a></button>
</div>`

document.getElementById("contactusbox").innerHTML= contus;

// header innerHTML show dynamically 

var head = `<div id="logodiv"> <a href="index.html">
<img id="logo" src="assests/images/logo.png" alt="logo"></a>
<h4> TRAVELLING WORLD </h4>
</div>
<div id="signout">
<button onclick="closedsignup()"  id="loginbtn"> <a href="#">SIGN UP</a> </button>
<button onclick="login()" id="loginbtn2"> <a href="#"> LOGIN</a> </button>
</div>
<div id="logoutdiv">
<button  id="logout" > <a href="clientorders.html">BOOKING</a> </button>
<button  id="logout" onclick="logoutfun()"> <a href="#">LOGOUT</a> </button>

</div>`

document.getElementById("header").innerHTML= head;

// footer innerHTML show dynamically 
 var foot = ` <div id="contentus">
 <button onclick="contactus()" id="contactbtn"><a href="#">Contact Us</a></button>
 <div id="copyright">
     <p>2020 ROOM SEARCH PVT LTD</p>

 </div>
 <div id="socialicons">
     <a href="#" class="s-icons"><img src="assests/images/facebook.png" alt="facebook.com" class="s-img"></a>
     <a href="#" class="s-icons"><img src="assests/images/instagram.png" alt="instagram.com"
             class="s-img"></a>
     <a href="#" class="s-icons"><img src="assests/images/twitter.png" alt="twitter.com" class="s-img"></a>
 </div>

</div>`

document.getElementById("footer").innerHTML= foot;

// Sign up innerHTMl show dynamically
var sig = `<div id="signheading">
<h3>  Registration Form</h3> <span onclick="closedsignup()" >&#9587;</span>
</div>

<div id="signupInputBox">
<form  id="signupform" action="javascript:void(0)" onsubmit="registeration()" >
<div class="signupinput" > <input type="text" name="serverusername"   placeholder="Username" required id="busername"> </div>
<div class="signupinput" > <input type="email" name="serveremail" placeholder="Email" required id="bemail"> </div>
<div class="signupinput" > <input type="password"  name="serverpassword"  placeholder="Password" required id="bpassword"> </div>
<div class="signupinput" > <input type="password"  name="servercomfpassowrd"  placeholder="Comfirm Password" required id="bcpassword"> </div>
<div id="signupbtn">
 <button id="signbtn" > Register Now</button>
</div>
</form>
</div>`
document.getElementById("signup").innerHTML= sig;
  
//  Registeration detail send to back server and function

  function registeration(){

 var name = document.getElementById("busername").value;
 var email = document.getElementById("bemail").value;
 var password = document.getElementById("bpassword").value;
 var cpassword = document.getElementById("bcpassword").value;
  var myobjj = {
    "serverusername":name,
    "serveremail":email,
    "serverpassword":password
  }

  let ur = "http://localhost:7000/registeration";

 if(cpassword == password){
    if(name && email && password){

        fetch(ur,
            {
                method:"POST",
                body:JSON.stringify(myobjj),
               headers:{
                'Content-Type' : 'application/json'
               }
            })
            .then((res)=>res.json())
            .then((res1)=> console.log(res1))
            .catch((err) =>{ console.log(err) })
            
     document.getElementById("busername").value="";
     document.getElementById("bemail").value="";
     document.getElementById("bpassword").value="";
     document.getElementById("bcpassword").value="";
    
     }
 }
 else if(cpassword!=password){
  alert("Password and Comform Password is Not Match" );
 }
 
}


// sign up closed and open function

var sign1 = document.getElementById("signup");

   function closedsignup(){
     if(sign1.style.display == "flex"){
      sign1.style.display = "none";
     }
    else{
      sign1.style.display = "flex";
      }

   } 



// login function

function login() {
    let loginn = document.getElementById("loginbox");
    let logout = document.getElementById("loginbtn");
    if (loginn.style.display == "block") {
        loginn.style.display = "none";
        let username1 = document.getElementById("username").value = "";
        let password1 = document.getElementById("passwordd").value = "";


    }
    else {
        loginn.style.display = "block";
    }
}


// contact us function
let contact = document.getElementById("contactusbox");

function contactus() {
    if (contact.style.display == "block") {
        contact.style.display = "none";
    }
    else {
        contact.style.display = "block";
    }
}


//login and logout logic...!!!!

localStorage.setItem("username", "admin");
localStorage.setItem("password", "admin");
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
console.log(username);
console.log(password);


 async function loginvalues() {
    let username1 = document.getElementById("username").value;
    let password1 = document.getElementById("passwordd").value;
    let data ={
        "useremail":username1,
        "userpassword":password1
    }
    let uri = "http://localhost:7000/login";
   
   await fetch(uri, {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
         'Content-Type' : 'application/json'
        }
        
    }).then((res) => res.json())
      .then((res1)=>{
     console.log(res1)
      localStorage.setItem("email", res1.email);
      localStorage.setItem("id", res1.id);
      localStorage.setItem("token", res1.token);
      })
      .catch((err)=> console.log("Error"+err));
     
      document.getElementById("username").value="";
      document.getElementById("passwordd").value="";
   
     location.href=" ";
}


// get localstorage username and password
function load(){
    let token = localStorage.getItem("token");
    if(token){
     document.getElementById("signout").style.display="none";
     document.getElementById("logoutdiv").style.display="block";
    }
}

load();

 function logoutfun(){
    localStorage.removeItem("token");
    document.getElementById("logoutdiv").style.display="none";
    location.href=" ";
 }