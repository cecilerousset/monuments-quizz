// The intern JSON data
var json = [
	{"id":1,"title":"Angkor Wat", "latitude":"13.412500", "longitude":"103.866667"},
	{"id":2,"title":"Taj-Mahal", "latitude":"27.175", "longitude":"78.041944"}
];

var map;
var monumentsName = document.querySelector("#title").innerHTML;

function initMap() {
	map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 2,
		center: {lat: 0.785020, lng: 0.274128}
	});
		map.data.loadGeoJson('https://raw.githubusercontent.com/cecilerousset/monuments-quizz/map/monuments.geo.json');
	
	map.data.setStyle(function(feature) {
    	return {
			icon:feature.getProperty('icon')
		};
  });
	  
  google.maps.event.addListener(map.data,'addfeature',function(e){
          
	  	var circleCenter = new google.maps.LatLng();
          circleCenter = e.feature.getGeometry().get();
	  	  console.log(e.feature.getProperty("title"));


	  	  //if(e.feature.getProperty("title")== monumentsName){
			  var zone1 = new google.maps.Circle({
			map: map,
            strokeWeight: 0,
            fillOpacity: 0,
			center: circleCenter,
			radius: 9900000,
		});
		var zone2 = new google.maps.Circle({
			map: map,
            strokeWeight: 0,
            fillOpacity: 0,
			center: circleCenter,
			radius: 1500000,
		});
		var zone3 = new google.maps.Circle({
			map: map,
            strokeWeight: 1,
            fillOpacity: 5,
			center: circleCenter,
			radius: 300000,
		});
		zone1.addListener('click', function(event) {
          alert("Tu es... sur le bon continent, mais bon...");
        });
		zone2.addListener('click', function(event) {
          alert("C'est presque ça !");
        });
		zone3.addListener('click', function(event) {
			alert("Bravo, c'est ça !")
		})
		 //}
 
  });
   
}
      

        
	//for(var i = 1; i < json.length; i++) 
	//var obj = json[7];
	
/*
Webdesign map
GeoJson countries : https://github.com/johan/world.geo.json/tree/master/countries
Data event layer : https://developers.google.com/maps/documentation/javascript/examples/layer-data-event

*/
	  
