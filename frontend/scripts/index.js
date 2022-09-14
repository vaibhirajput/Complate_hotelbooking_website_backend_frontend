


function hide(){
     let hide = document.getElementById("hide1");
     let less = document.getElementById("viewbtn");
      
// city card view more and view less javascript!!!
    if(hide.style.display == "block"){
     hide.style.display = "none";
     less.innerHTML= "View More";
     return;
     
     
    }
   
    else if ( hide.style.display = "none")
     {
      hide.style.display = "block";
       less.innerHTML= "View Less";
       return;
     
    }
  
}


let citysearch = document.getElementById("searchbox");
let citys = document.getElementById("searchbox").value;
// console.log("?"+citys)
citysearch.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
     citys = document.getElementById("searchbox").value;
     console.log(citys);
     location.href= "list.html?"+citys;
    citys = document.getElementById("searchbox").value=""
    }
   
})
 