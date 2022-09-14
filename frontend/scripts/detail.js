// // select hotel api photo fetching!!!

var photoid = location.search;

var urlParams = new URLSearchParams(photoid);
var photoid1 = urlParams.get("location_id");
console.log(photoid1);
var city2 = urlParams.get("city");


  console.log(photoid1);
  let shardphotolink = `https://travel-advisor.p.rapidapi.com/photos/list?location_id=${photoid1}&currency=USD&limit=50&lang=en_US`;
  // console.log(photoid);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e7ae583bdfmsh41b446c1545fc40p1a2305jsn3674e5172405",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  fetch(shardphotolink, options)
    .then((response) => response.json())
    .then((response) => {
      var hotelphoto = response.data;
      console.log(hotelphoto);

      var sliderhotelimg = " ";
      hotelphoto.map((values) => {
        let sharedhotel = values.images.large.url;
        sliderhotelimg += `
    <div class="slider" >
    <img src=${sharedhotel}
        alt="" class="sliderimage">
    </div> `;
      });

      document.getElementById("containerslider").innerHTML = sliderhotelimg;
    })

    .catch((err) => console.error(err));

  // detail fetching api

  let hoteldetail = `https://travel-advisor.p.rapidapi.com/attractions/get-details${photoid}&currency=USD&lang=en_US`;

  const options1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e7ae583bdfmsh41b446c1545fc40p1a2305jsn3674e5172405",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  fetch(hoteldetail, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let hotelamenities = response.amenities;
      let hotediscription = response.description;
      let hotelname = response.name;
      let hotelprice = response.price;
      let hotelrating = response.rating;
      console.log(hotelamenities);
      console.log(hotelname);
      console.log(hotelprice);
      console.log(hotelrating);

      let swimming_pool = hotelamenities[0].name;
      let free_parking = hotelamenities[1].name;
      let fitness_center = hotelamenities[2].name;
      let room_service = hotelamenities[3].name;
      let restaurant = hotelamenities[4].name;
      let business_services = hotelamenities[5].name;
      let high_speed_net = hotelamenities[6].name;
      let suites = hotelamenities[7].name;
      let bar_lounge = hotelamenities[12].name;
      let Kids_Activities = hotelamenities[13].name;
      // whole website made by vaibhav rajput
      var hoteldetails = " ";
      hoteldetails = ` <div id="hoteldiscription">
             <h1>${hotelname}</h1>
             <h3>RATING</h3>
             <div class="stars">
                 <span>${hotelrating}</span>
                 <span class="star checked">&#9733;</span>

             </div>
             <br>
             <h2>AMENITIES</h2>
             <br>
             <ul id="dott">
                 <li>${swimming_pool}</li>
                 <li>${free_parking}</li>
                 <li>${fitness_center}</li>
                 <li>${room_service}</li>
                 <li>${restaurant}</li>
                 <li>${business_services}</li>
                 <li>${high_speed_net}</li>
                 <li>${suites}</li>
                 <li>${bar_lounge}</li>
                 <li>${Kids_Activities}</li>
             </ul>
             <br>
             <br>
             <h2>DESCRIPTION</h2>
             <p id="discrip">${hotediscription}</p>

         </div>`;

      document.getElementById("discriptionbox").innerHTML = hoteldetails;
    })
    .catch((err) => console.error(err));

  //    slider old function!!!

  var countnext = 0;

  function slidercontrolnext() {
    if (countnext <= 49) {
      var image = document.getElementsByClassName("slider");
      for (let y of image) {
        y.style.display = "none";
      }
      countnext++;
      image[countnext].style.display = "block";
      // console.log(countnext);
    }
    if (countnext >= 49) {
      countnext = -1;
    }
  }
  setInterval(slidercontrolnext, 5000);

  function slidercontrolpre() {
    if (countnext >= 1) {
      var image = document.getElementsByClassName("slider");
      for (let y of image) {
        y.style.display = "none";
      }
      countnext--;
      image[countnext].style.display = "block";
    }

    if (countnext <= 0) {
      countnext = 0;
    }
  }

  // disable past date from date picker!!!
  var dates = new Date();
  var todate = dates.getDate();
  var presentmonth = dates.getMonth() + 1;
  var presentyear = dates.getFullYear();
  if (todate < 10) {
    todate = "0" + todate;
  }
  if (presentmonth < 10) {
    presentmonth = "0" + presentmonth;
  }
  var fulldate = presentyear + "-" + presentmonth + "-" + todate;
  console.log(fulldate);

  document.getElementById("startdate").setAttribute("min", fulldate);

  // disable after the star date
  function endingdate() {
    var startd = document.getElementById("startdate").value;
    var sdate = new Date(startd);
    var sday = sdate.getDate() + 1;
    var smonth = dates.getMonth() + 1;
    var syear = dates.getFullYear();
    if (sday < 10) {
      sday = "0" + sday;
    }
    if (smonth < 10) {
      smonth = "0" + smonth;
    }
    var startstay = syear + "-" + smonth + "-" + sday;

    console.log(sday);

    document.getElementById("enddate").setAttribute("min", startstay);
  }
  // get days from start to end!!!!

  // var startd = document.getElementById("startdate").value;
  // var endd = document.getElementById("enddate").value;
  // var persons = document.getElementById("persons").value;
  // var clientname = document.getElementById("clientname").value;
  // var totalprice = document.getElementById("totalprice");
  // var sd = new Date(startd);
  // var ed = new Date(endd);
  // var time = ed.getTime() - sd.getTime();
  // var days = 1000 * 3600 * 24;
  // var totaldays = time / days;
  // var grandtotal = persons * 1000 * totaldays;

  let h = response.result_object.location_id;

  function date2() {
    var startd = document.getElementById("startdate").value;
    var endd = document.getElementById("enddate").value;
    var persons = document.getElementById("persons").value;
    var clientname = document.getElementById("clientname").value;
    var totalprice = document.getElementById("totalprice");

    if (startd && endd && persons && clientname) {
      sessionStorage.setItem("clientname", clientname);
      sessionStorage.setItem("persons", persons);
      sessionStorage.setItem("startd", startd);
      sessionStorage.setItem("endd", endd);
      var sd = new Date(startd);
      var ed = new Date(endd);
      var time = ed.getTime() - sd.getTime();
      var days = 1000 * 3600 * 24;
      var totaldays = time / days;
      var grandtotal = persons * 1000 * totaldays;
      sessionStorage.setItem("grandtotal", grandtotal);
      sessionStorage.setItem("totaldays", totaldays);
      if (grandtotal) {
        totalprice.value = grandtotal;
      }
    } else {
      alert("Please Fill the all Details First!!!");
    }
  }

  function idforpaymentpage2() {
    var startd = document.getElementById("startdate").value;
    var endd = document.getElementById("enddate").value;
    var persons = document.getElementById("persons").value;
    var clientname = document.getElementById("clientname").value;
    var totalprice = document.getElementById("totalprice").value;

    if (startd && endd && persons && clientname && totalprice) {
      window.location.href = `payment.html?location_id=${photoid1}&city=${city2}`;
    } else if (startd && endd && persons && clientname) {
      alert("Please Click on Calculate Now First then go for Payment!!!");
    } else {
      alert("Please Fill the all Details First!!!");
    }
  }

