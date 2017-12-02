"use strict";

function initMap() {
  let costarica = {lat: 10.540428, lng: -83.498196};
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
    title: 'Release Site'
  });
    
}

// get the mPopup
let mpopup = document.getElementById('mpopupBox');

// get the link that opens the mPopup
let mpLink = document.getElementById("mpopupLink");

// get the close action element
let close = document.getElementsByClassName("close")[0];

// open the mPopup once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
}

// close the mPopup once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
}

// close the mPopup when user clicks outside of the box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
}

