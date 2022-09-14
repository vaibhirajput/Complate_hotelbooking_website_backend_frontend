

var place = location.search;
const urlParams = new URLSearchParams(place);
var place1 = urlParams.get('city');
console.log(place1);
  
if(place1){




let lv = document.getElementById("listbtnview");
let lm = document.getElementById("listbtnmap");
let cont = document.getElementById("contentlist");
let mapimage = document.getElementById("map");
lv.addEventListener("click", listbtn1);
lm.addEventListener("click", listbtn2);

function listbtn1() {
  lv.style.backgroundColor = " #451e3e";
  lm.style.backgroundColor = "#e0e0e0";
  lv.style.color ="white";
  lm.style.color ="black";
  cont.style.display = "grid";
  mapimage.style.display = "none";

}

function listbtn2() {
  lm.style.backgroundColor = " #451e3e";
  lv.style.backgroundColor = "#e0e0e0";
  lm.style.color ="white";
  lv.style.color ="black";
  cont.style.display = "none";
  mapimage.style.display = "block";
}


// hotel list api data fetching start from here!!!!


  let locat = `https://travel-advisor.p.rapidapi.com/locations/search?query=${place1}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;    
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7952b7bcebmshed5ea97c717fafbp13473djsn4fa8c591ec44',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  fetch(locat , options)
    .then(response => response.json())
    .then((response)=>{
     let hotel = response.data;
     
    console.log(hotel);
      var html =" ";
       hotel.map((values)=>{
        
        let img1 = values.result_object.photo.images.medium.url;
        let hotelname = values.result_object.name;
        let hoteladress = values.result_object.address;
        let hotelrating = values.result_object.rating;
        let hotelid1 = values.result_object.location_id;
        //  console.log(hoteladress);s
         console.log(hotelid1);
        html += `
        <a id="atag" href="detail.html?location_id=${hotelid1}&city=${place1}">
        <div class="grid-item" >   
            <img src=${img1} alt=""
                class="hotel">
            <div class="rating">
                <h2>${hotelname}</h2>
                <div class="stars">
                   <span class="ratesize" >${hotelrating}</span>
                    <span class="star checked">&#9733;</span>
                    <br>
                    <p>${hoteladress}</p>
                </div>
    
            </div>
        
    
        </div>
        </a>
        `
    
       })
  
      
       
      document.getElementById("contentlist").innerHTML = html;
      console.log(response.data)
    
  
  }).catch((err) => {
    console.error(err)
  });
}
else{
  location.href="index.html";
}
  
  
  
   