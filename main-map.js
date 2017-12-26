// The JSON data
var json = [
	{"id":1,"title":"Angkor Wat", "latitude":"13.412500", "longitude":"103.866667"},
	{"id":2,"title":"Taj-Mahal", "latitude":"27.175", "longitude":"78.041944"}
];

var map = [
	{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]}
];
var monument = document.getElementById('footer');


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: new google.maps.LatLng(0.785020, 0.274128)
	});
	for(var i = 1; i < json.length; i++) {
		var obj = json[i];
		var Zone1 = new google.maps.Circle({
			map: map,
            strokeWeight: 0,
            fillOpacity: 0,
			center: new google.maps.LatLng(obj.latitude,obj.longitude),
			radius: 9900000,
		});
		var Zone2 = new google.maps.Circle({
			map: map,
            strokeWeight: 0,
            fillOpacity: 0,
			center: new google.maps.LatLng(obj.latitude,obj.longitude),
			radius: 1500000,
		});
		var Zone3 = new google.maps.Circle({
			map: map,
            strokeWeight: 0,
            fillOpacity: 0,
			center: new google.maps.LatLng(obj.latitude,obj.longitude),
			radius: 300000,
		});
		Zone1.addListener('click', function() {
          alert("Tu es... sur le bon continent, mais bon...");
        });
		Zone2.addListener('click', function() {
          alert("C'est presque ça !");
        });
		Zone3.addListener('click', function() {
			alert("Bravo, c'est ça !")
		})
	}
	
}

// Load GeoJSON.
//map.data.loadGeoJson('google.json');
	
/*
Utiliser AJAX pour aller chercher mon JSon
Ou alors le faire avec les pays
Webdesign map
GeoJson countries : https://github.com/johan/world.geo.json/tree/master/countries
Data event layer : https://developers.google.com/maps/documentation/javascript/examples/layer-data-event

*/
	  
