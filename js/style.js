document.getElementById("navIcon").addEventListener("click", myFunction);
function myFunction() {
     
    var x = document.getElementById("nav2");
    if (x.style.display === "none" ) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  var el = document.getElementsByClassName('home')[0];
  var i = 0;
  var images = [];
  var slideTime = 3000; // 4 seconds
  
  images[0] = './images/img/bg-home-1.jpg';
  images[1] = './images/img/home-bg-2.jpg';
  images[2] = './images/img/home-bg-3.jpg';
 
   
  function changePicture() {
      el.style.backgroundImage = "url(" + images[i] + ")";
     
      if (i < images.length - 1) {
          i++;
          
          
      } else {
          i = 0;
      }
      
      setTimeout(changePicture, slideTime);
      
  }
  
  window.onload = changePicture;

 
 
 //-----------------------------------------------------------------------------------------------------------------



mybutton = document.getElementById("services");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var y = document.getElementById("no");
 var s = document.getElementById("navIcon");
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
     
    y.style.display = "none"; 
    s.style.display = "none"; 
   
  
    
  } else {
    y.style.display = "block";
    s.style.display = "block";
  }
}




//-----------------------------------------------------------------
 
var ele = document.getElementsByClassName('img')[0];
var eles = document.getElementsByClassName('next')[0];
var k = 0;
var imagess = [];

 
imagess[0] = './images/img/formacion-spain-foto-grid-5.jpg';
imagess[1] = './images/img/formacion-spain-foto-grid-6.jpg';
imagess[2] = './images/img/formacion-spain-foto-grid-7.jpg';
imagess[3] = './images/img/formacion-spain-foto-grid-9.jpg';


function changePictures() {
    ele.style.backgroundImage = "url(" + imagess[i] + ")";
   
    if (k < imagess.length - 1) {
        k++;
        
        
    } else {
        k = 0;
    }
    
    
    
}

document.getElementById("next").addEventListener("click",changePictures );

 