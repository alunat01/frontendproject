/* .................................................... 

                
                
                
                Navigation Menu from Lab 
                
                
                
......................................................*/

"use strict";

(function () {

	let menuButton = document.getElementById("menu");
	let navMenu = document.getElementById("nav-menu");

	menuButton.addEventListener("click", toggleMenu);

	let toggle = false; // hidden at first
	function toggleMenu() {
		if (toggle) { // true: it's visible
			navMenu.classList.remove("show-menu"); // hide it
			toggle = false
		} else { // false: it's hidden
			navMenu.classList.add("show-menu"); // show it
			toggle = true
		}
	}

})();


/* .................................................... 

                
                
                
                Google Maps from Lab
                
                
                
......................................................*/


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

                
                
                
          Javascript for Donation form from Lab
                
                
                
......................................................*/


(function () {

	let myName = document.getElementById("my-name");
	let userName = document.getElementById("user-name");
	let getName = document.getElementById("get-name");

	function PerformGreeting(ev) {
		myName.innerHTML = userName.value;
		ev.preventDefault();
	}

	getName.addEventListener("submit", PerformGreeting);


}());

/* Unsure why error appears for above line */

/* .................................................... 

                
                
                
Modal window for Adoption Form - Help from Dave in Lab
                
                
                
......................................................*/


let adoptAlert = document.getElementById("adopt-submit");

adoptAlert.addEventListener("click", adopt);

function adopt() {
	alert('CONGRATLATIONS! You have officially adopted a Turtle. We will be sending a package in the post with details of the turtle you have adopted and a free turtle toy!');
}

