
var token = localStorage.getItem("token");


if(token){

function orderlist(){

console.log("token is " +token);

let uri = "http://localhost:7000/clientorders";
if(token){

fetch(uri, {
    method: "GET",
    headers: {
      Authorization: "Bearer "+ token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      var clientdivhtml="";
    data.map((data)=>{
    
         clientdivhtml += `<div id="clientorders">
        <div class="clients">
          <p><b>Client Name :</b> <span> ${data.clientname} </span> </p> 
        </div>
    
        <div class="clients">
          <p><b>Total Persons :</b> <span> ${data.totelpersons} </span></p>
        </div>
    
        <div class="clients">
          <p><b>Check in Date :</b> <span>  ${data.check_in_date}</span></p>
        </div>
    
        <div class="clients">
          <p><b>Check out Date :</b> <span>  ${data.check_out_date}</span></p>
        </div>
    
        <div class="clients">
          <p><b>Hotel :</b> <span> ${data.hotelname} </span></p>
        </div>
    
        <div class="clients">
          <p><b>Hotel Address :</b> <span>  ${data.hoteladdress}</span></p>
        </div>
    
        <div class="clients">
          <p><b>Total Booking Price :</b> <span>  ${data.totelprice}</span></p>
        </div>
    
      </div>`
   
   document.getElementById("clientordersdiv").innerHTML= clientdivhtml;
    })
    
    })
    .catch((err) => {
      console.log(err);
  
    });
}
else{
    alert("Please Login First then Check Your Bookings!")
}

}

}else{
  location.href="index.html";
}