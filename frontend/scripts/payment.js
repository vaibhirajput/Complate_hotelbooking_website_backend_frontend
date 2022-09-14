var cname = sessionStorage.getItem("clientname");
var noofadult = sessionStorage.getItem("persons");
var sdate = sessionStorage.getItem("startd");
var edate = sessionStorage.getItem("endd");
var gtotal = sessionStorage.getItem("grandtotal");
var tday = sessionStorage.getItem("totaldays");


var place = location.search;
const urlParams = new URLSearchParams(place);
var photoid11 = urlParams.get("location_id");
var place11 = urlParams.get("city");
console.log("newww");

if(cname && noofadult && sdate && edate && gtotal && photoid11 && place11 ){

document.getElementById("cname1").innerText = cname;
document.getElementsByClassName("noofadult")[0].innerText = noofadult;
document.getElementsByClassName("noofadult")[1].innerText = noofadult;
document.getElementById("sdate").innerText = sdate;
document.getElementById("edate").innerText = edate;
document.getElementById("gtotal").innerText = gtotal;
document.getElementById("ttdays").innerText = tday;


let locat1 = `https://travel-advisor.p.rapidapi.com/locations/search?query=${place11}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7952b7bcebmshed5ea97c717fafbp13473djsn4fa8c591ec44",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

async function fun() {
  await fetch(locat1, options)
    .then((response) => response.json())
    .then((response) => {
      let hotel = response.data;

      console.log(hotel);
      var html = " ";
      hotel.map((values) => {
        let img11 = values.result_object.photo.images.medium.url;
        let hotelname = values.result_object.name;
        let hoteladdress = values.result_object.address;
        let hotelrating = values.result_object.rating;
        let hotelid11 = values.result_object.location_id;

        if (photoid11 === hotelid11) {
          sessionStorage.setItem("hoteladdress", hoteladdress);
          sessionStorage.setItem("hotelname", hotelname);

          html += ` 
            <img src=${img11} alt="">
            <div id="hoteldetail">
                <h1>${hotelname}</h1>
                <p>${hotelrating} <span class="star checked">&#9733;</span></p>
                <br>
                <p>${hoteladdress}</p>`;
        }
      });
      document.getElementById("selecthoteldiv").innerHTML = html;
      console.log(response.data);
    })
    .catch((err) => console.error(err));
}

fun();

function paynow() {
  let token = localStorage.getItem("token");
  if (!token) {
    alert("Please Login First then Pay Payment");
  } else if (token) {

    if(cname && noofadult && sdate && edate && gtotal ){

    
    var myToken = localStorage.getItem("token");


    let urii = "http://localhost:7000/payment";
    let hotelname = sessionStorage.getItem("hotelname");
    let hoteladdress = sessionStorage.getItem("hoteladdress");
    let payobj = {
      clientname: cname,
      totelpersons: noofadult,
      check_in_date: sdate,
      check_out_date: edate,
      totelprice: gtotal,
      hotelname: hotelname,
      hoteladdress: hoteladdress,
   
    };
    fetch(urii, {
      method: "POST",
      body: JSON.stringify(payobj),
      headers: {
        Authorization: "Bearer " + myToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res1) => console.log(res1))
      .catch((err) => {
        console.log(err);
      });
  

  sessionStorage.removeItem("clientname");
  sessionStorage.removeItem("persons");
  sessionStorage.removeItem("startd");
  sessionStorage.removeItem("endd");
  sessionStorage.removeItem("grandtotal");
  sessionStorage.removeItem("totaldays");
  sessionStorage.removeItem("hoteladdress");
  sessionStorage.removeItem("hotelname");
  location.href="clientorders.html"
    }
    else{
      alert("Please Select Hotel!!!")
    }
    }
    
 
}

}else{
  location.href="index.html";
}