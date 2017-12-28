var map;
var monumentsName = document.querySelector("#title").innerHTML;

function initMap() {
	map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 2,
		center: {lat: 0.785020, lng: 0.274128}
	});
		map.data.loadGeoJson('https://raw.githubusercontent.com/cecilerousset/monuments-quizz/map/monuments.geo.json');
	  
	
  google.maps.event.addListener(map.data,'addfeature',function(e){
         
	  
	  	var circleCenter = new google.maps.LatLng();
          circleCenter = e.feature.getGeometry().get();
	 
	  if(monumentsName == e.feature.getProperty('title')){
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
            strokeWeight: 0,
            fillOpacity: 0,
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
	  }
	  
 	/*e.feature.getGeometry().forEach(function(path){
          
             path.forEach(function(latLng){
				 console.log("Je suis là");
			 })
          
          });*/
	  
	  	  //if(e.feature.getProperty("title")== monumentsName){


   
})

}
      

        
	//for(var i = 1; i < json.length; i++) 
	//var obj = json[7];
/* 

1°) foreach marker si title == name alors on affiche tout le bordel
http://jsfiddle.net/doktormolle/qtDR6/
2°) enlever ces putains de markers, opacity ou icon

/*

Data event layer : https://developers.google.com/maps/documentation/javascript/examples/layer-data-event

*/
	  
