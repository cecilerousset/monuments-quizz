var map;
var monumentsName = document.querySelector("#title").innerHTML;

function initMap() {
	map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 2,
		center: {lat: 0.785020, lng: 0.274128}
	});
		
	//google.maps.Marker.getVisible(false);
	map.data.loadGeoJson('https://raw.githubusercontent.com/cecilerousset/monuments-quizz/map/monuments.geo.json');
	
	map.data.setStyle(function(feature) {
    	return {visible:false};
  	});
	  
	google.maps.event.addListener(map.data,'addfeature',function(e) {
         
		var circleCenter = new google.maps.LatLng();
		circleCenter = e.feature.getGeometry().get();
		
		if(monumentsName == e.feature.getProperty('title')){
			var zone1 = new google.maps.Circle({
				map: map,
            	strokeWeight: 0,
            	fillOpacity: 0,
				center: circleCenter,
				radius: 100000000,
			});	
			
		  	var zone2 = new google.maps.Circle({
				map: map,
            	strokeWeight: 0,
            	fillOpacity: 0,
				center: circleCenter,
				radius: 3500000,
			});
			
			var zone3 = new google.maps.Circle({
				map: map,
            	strokeWeight: 0,
            	fillOpacity: 0,
				center: circleCenter,
				radius: 1000000,
			});
			
			var zone4 = new google.maps.Circle({
				map: map,
            	strokeWeight: 0,
            	fillOpacity: 0,
				center: circleCenter,
				radius: 250000,
			});
			
			zone1.addListener('click', function(event) {
				alert("Tu en es très loin... désolé...");
			});
			zone2.addListener('click', function(event) {
				alert("Tu es peut-être sur le bon continent, ou c'est celui d'à côté !");
        	});
			zone3.addListener('click', function(event) {
				alert("C'est presque ça !");
        	});
			zone4.addListener('click', function(event) {
				alert("Bravo, c'est ça !")
			});
		}
	})
}

/* 
enlever markers, opacity ou icon
ou trouver un moyen de ne pas les faire apparaitre automatiquement

Data event layer : https://developers.google.com/maps/documentation/javascript/examples/layer-data-event

*/
	  
