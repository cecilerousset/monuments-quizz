var map;
var getDataName = location.search.substring(1, location.search.length);
var dataName = getDataName.replace(/%20/gi, " ");
var monumentsName = document.querySelector("#monument");
monumentsName.innerHTML = dataName;
var monumentsPicture = document.querySelector("#monument-picture");
var comments = document.querySelector("#text-comments");
var gauge = document.querySelector("#gauge");

function initMap() {
	map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 3,
		center: {lat: 48.932091, lng:  2.087123}
	});
		
	map.data.loadGeoJson('https://raw.githubusercontent.com/cecilerousset/monuments-quizz/map/monuments.geo.json');
	
	map.data.setStyle(function(feature) {
    	return {visible:false};
  	});
	  
	google.maps.event.addListener(map.data,'addfeature',function(e) {
         
		var circleCenter = new google.maps.LatLng();
		circleCenter = e.feature.getGeometry().get();
	
		if(monumentsName.innerHTML == e.feature.getProperty('title')){
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
				gauge.src = "img/pointer/location-pointer1.svg";
			});
			zone2.addListener('click', function(event) {
				comments.innerHTML = "You're on the correct continent or it's the next one !";
				gauge.src = "img/pointer/location-pointer2.svg";
        	});
			zone3.addListener('click', function(event) {
				comments.innerHTML = "You're almost there !";
				gauge.src = "img/pointer/location-pointer3.svg";
        	});
			zone4.addListener('click', function(event) {
				comments.innerHTML = "Congratulations, you're right !"
				gauge.src = "img/pointer/location-pointer4.svg";
				map.setOptions({
					
				});
			});
		}
	})
}