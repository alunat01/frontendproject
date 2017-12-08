 /* My own Modal image 
    
let modal = document.getElementById('mymodal');
let img = document.getElementById('myimg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
    
    
    img.addEventListener("click", modal);
    
    let image = false
    
function modal () {
  if (image) {
    img01...................................
  }
   else {
     img01........................................
     
     toggle=true

}
} */

/*

 From W3school - Modal gallery


// Get the modal
    var modal = document.getElementById('mymodal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myimg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}


*/


/* .................................................... 

                
                
                
                Navigation Menu from Lab 
                
                
                
......................................................*/

(function () {

  "use strict";

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu() {
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"); // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"); // show it
      toggle = true
    }
  }

})();


/* .................................................... 

                
                
                
                Google Maps from Lab
                
                
                
......................................................*/


"use strict";

function initMap() {
  let costarica = {
    lat: 10.540428,
    lng: -83.498196
  };
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 9,
    center: costarica
  });

  // these set different markers you want to show on your map
  let markerCR = new google.maps.Marker({
    position: costarica,
    map: map,
    title: "Release Site"
  });

}


/* .................................................... 

                
                
                
                Javascript for form from Lab
                
                
                
......................................................*/






(function () {
  /*
    An "Immediately-Invoked Function Expression" (IIFE) contains
    all the code. the final brackets () ensure that it executes.
    This is good practice because:
    - it keeps your variables out of the global namespace
    - local references to objects decrease lookup times
    - it is a foundation for further code organisation
    It is also an "anonymous" function because it has/needs no name.
  */

  /*
    declare all the variables using 'let'. These get a reference
    to the HTML elements we want by finding their ID
  */
  let myName = document.getElementById("my-name"); /* Span */
  let userName = document.getElementById("user-name"); /* id of name*/
  let getName = document.getElementById("get-name"); /* id of form */

  // changes the 'innerHTML' (text) of the element
  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    ev.preventDefault();
  }
  /*
    Without setting the variables first, the above line would be really long:
    document.getElementById("my-name").innerHTML = document.getElementById("user-name").value;
  */

  /*
    Event Listeners keep your JavaScript out of the HTML -
    professional developers avoid (e.g.) "onclick" in HTML tags.
    This 'listens' for the user to submit the form.
    You can attach multiple events to any single element.
  */
  getName.addEventListener("submit", PerformGreeting);

  /*
    Uncomment the line below - see what happens when you click
    in the grey area outside the input "submit" button. Why?
  */

  // getName.addEventListener("click", PerformGreeting);

}());




/*



let adoptAlert = document.getElementById("adopt-submit");

adoptAlert.addEventListener("click", adopt);

function adopt() {
    alert('CONGRATLATIONS! You have officially adopted a Turtle. We will be sending a package in the post with details of the turtle you adopted and a free turtle toy!');
}




/*

function checkdata(){
    firstname = document.userform1.first.value;
    if (firstname==""){
        alert("Please fill in the name box");
    }
}


*/