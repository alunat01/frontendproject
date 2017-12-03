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

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/



;(function( $, window, document, undefined )
{
	$.fn.doubleTapToGo = function( params )
	{
		if( !( 'ontouchstart' in window ) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

		this.each( function()
		{
			var curItem = false;

			$( this ).on( 'click', function( e )
			{
				var item = $( this );
				if( item[ 0 ] != curItem[ 0 ] )
				{
					e.preventDefault();
					curItem = item;
				}
			});

			$( document ).on( 'click touchstart MSPointerDown', function( e )
			{
				var resetItem = true,
					parents	  = $( e.target ).parents();

				for( var i = 0; i < parents.length; i++ )
					if( parents[ i ] == curItem[ 0 ] )
						resetItem = false;

				if( resetItem )
					curItem = false;
			});
		});
		return this;
	};
})( jQuery, window, document );

