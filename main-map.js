var map;
var monumentsName = document.querySelector("#monument").innerHTML;
var monumentsPicture = document.querySelector("#monument-picture");
var comments = document.querySelector("#comments");
var jauge = document.querySelector("#jauge");

function initMap() {
	map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 3,
		center: {lat: 48.932091, lng:  2.087123}
	});
		
	//google.maps.Marker.getVisible(false);
	map.data.loadGeoJson('https://raw.githubusercontent.com/cecilerousset/monuments-quizz/map/monuments.geo.json');
	
	map.data.setStyle(function(feature) {
    	return {visible:false};
  	});
	  
	google.maps.event.addListener(map.data,'addfeature',function(e) {
         
		var circleCenter = new google.maps.LatLng();
		circleCenter = e.feature.getGeometry().get();
		//monumentsPicture.src = e.feature.getProperty('img');
		
		//console.log(e.feature.getProperty('img'));
		
		if(monumentsName == e.feature.getProperty('title')){
			monumentsPicture.src = e.feature.getProperty('img');
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
				comments.innerHTML = "You're far far away...";
				jauge.src = "img/location-pointer1.svg";
			});
			zone2.addListener('click', function(event) {
				comments.innerHTML = "You're on the correct continent or it's the next one !";
				jauge.src = "img/location-pointer2.svg";
        	});
			zone3.addListener('click', function(event) {
				comments.innerHTML = "You're almost there !";
				jauge.src = "img/location-pointer3.svg";
        	});
			zone4.addListener('click', function(event) {
				comments.innerHTML = "Congratulations, you're right !"
				jauge.src = "img/location-pointer4.svg";
			});
		}
	})
}