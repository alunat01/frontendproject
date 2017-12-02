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
   

