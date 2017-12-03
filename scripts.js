(function () {

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu() {
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
        toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
        toggle = true
    }
  }

})();



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

