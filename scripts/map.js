var map = L.map('map').setView([45.759723, 4.842223], 13);
var markers = [];
var arrondissementPolygons = [];
var arrondValues = {
	a1: [],
	a2: [],
	a3: [],
	a4: [],
	a5: [],
	a6: [],
	a7: [],
	a8: [],
	a9: [],
	a10: [],
	a11: [],
    a12: [],
    a20: []
};


var greatUp = '<i class="text-success material-icons" title="Supérieur à la moyenne">arrow_drop_up</i>';
var badUp = '<i class="text-danger material-icons" title="Supérieur à la moyenne">arrow_drop_up</i>';
var greatDown = '<i class="text-success material-icons" title="Inférieur à la moyenne">arrow_drop_down</i>';
var badDown = '<i class="text-danger material-icons" title="Inférieur à la moyenne">arrow_drop_down</i>';

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: 'OpenData by <a href="https://developer.jcdecaux.com/#/home" target="_blank">JCDecaux</a>.Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var arrondissements = [
    {
        name: "Villeurbanne",
        geoPoints:[
			[45.7527, 4.89912],
            [45.75493, 4.87583],
            [45.76374, 4.86987],
            [45.77241, 4.85876],
            [45.787, 4.85997],
            [45.79504, 4.87901],
            [45.78343, 4.90759],
            [45.77104, 4.90605],
            [45.768763, 4.91729],
            [45.74846, 4.91772]
        ]
    },
    {
        name: "Lyon - 3 ème",
        geoPoints:[
			[45.74964, 4.85955],
            [45.75681, 4.83869],
            [45.76356, 4.83987],
            [45.76374, 4.86987],
            [45.75493, 4.87583],
            [45.7527, 4.89912],
            [45.73926, 4.89208]
        ]
    },
    {
        name: "Lyon - 6 ème",
        geoPoints:[
			[45.77308, 4.83974],
            [45.77886, 4.84299],
            [45.78251, 4.846],
            [45.78612, 4.85189],
            [45.787, 4.85997],
            [45.77241, 4.85876],
            [45.76374, 4.86987],
            [45.76356, 4.83987]
        ]
    },
    {
        name: "Lyon - 8 ème",
        geoPoints:[
			[45.72971, 4.85382],
            [45.71898, 4.85443],
            [45.71887, 4.84909],
            [45.73858, 4.84961],
            [45.74964, 4.85955],
            [45.73926, 4.89208],
            [45.7203, 4.88739],
            [45.72689, 4.86232],
            [45.73079, 4.85966]
        ]
    },
    {
        name: "Lyon - 7 ème",
        geoPoints:[
			[45.70694, 4.83991],
            [45.71186, 4.82755],
            [45.71809, 4.82077],
            [45.72779, 4.81811],
            [45.75681, 4.83869],
            [45.74964, 4.85955],
            [45.73858, 4.84961],
            [45.71887, 4.84909],
            [45.71853, 4.83755]
        ]
    },
    {
        name: "Lyon - 2 ème",
        geoPoints:[
			[45.73457, 4.81353],
            [45.74104, 4.81310],
			[45.74727, 4.815672],
            [45.75104, 4.82177],
            [45.76476, 4.83053],
            [45.76356, 4.83987],
            [45.75681, 4.83869],
            [45.72779, 4.81811]
        ]
    },
    {
        name: "Lyon - 5 ème",
        geoPoints:[
			[45.75232, 4.77087],
            [45.75447, 4.78142],
            [45.76418, 4.78683],
            [45.76052, 4.80486],
            [45.76702, 4.81790],
            [45.76773, 4.82756],
            [45.76476, 4.83053],
            [45.75104, 4.82177],
            [45.7519, 4.80211],
            [45.74429, 4.78366]
        ]
    },
	{
        name: "Lyon - 1 er",
        geoPoints:[
			[45.76773, 4.82756],
            [45.76702, 4.81790],
            [45.7709, 4.81299],
            [45.77445, 4.83311],
            [45.77308, 4.83974],
            [45.76356, 4.83987],
            [45.76476, 4.83053]
        ]
    },
    {
        name: "Lyon - 9 ème",
        geoPoints:[
            [45.76052, 4.80486],
            [45.76418, 4.78683],
            [45.77595, 4.79398],
            [45.78647, 4.79124],
            [45.78756, 4.78446],
            [45.79115, 4.80669],
            [45.80581, 4.82591],
            [45.80342, 4.84145],
            [45.79697, 4.83338],
            [45.78877, 4.81779],
            [45.77719, 4.80887],
            [45.7709, 4.81299],
            [45.76702, 4.81790]
        ]
    },
    {
        name: "Caluire-et-Cuire",
        geoPoints:[
			[45.78183, 4.83329],
            [45.78877, 4.81779],
            [45.79697, 4.83338],
            [45.80342, 4.84145],
            [45.81279, 4.84473],
            [45.81884, 4.85675],
            [45.79504, 4.87901],
            [45.787, 4.85997],
            [45.78612, 4.85189],
            [45.78251, 4.846],
            [45.77886, 4.84299]
        ]
    },
    {
        name: "Lyon - 4 ème",
        geoPoints:[
			[45.77445, 4.83311],
            [45.7709, 4.81299],
            [45.77719, 4.80887],
            [45.78877, 4.81779],
            [45.78183, 4.83329],
            [45.77886, 4.84299],
            [45.77308, 4.83974]
        ]
    },
    {
        name: "Vaulx-en-Velin Sud",
        geoPoints:[
			[45.74846, 4.91772],
            [45.768763, 4.91729],
            [45.77159, 4.93546],
            [45.76207, 4.93744],
            [45.74435, 4.9328]
        ]
    },
    {
        name: "Oullins",
        geoPoints: [
            [45.71809, 4.82077],
            [45.71186, 4.82755],
            [45.70694, 4.83991],
            [45.70342, 4.80521],
            [45.71954, 4.77836],
            [45.72440, 4.78066],
            [45.72441, 4.80849]
        ]
    }
];

var nbStations = 0;
var nbVelos = 0;
var nbEmplacements = 0;
var nbEmplacementsTotal = 0;
var nbStationsVides = 0;
var nbStationsPleines = 0;
var nbEmplacementsEnPanne = 0;
var nbStationsFermees = 0;
var nbStationsBonus = 0;


function parseVelovData(velovData){

    velovData.forEach(function(value){
		nbStations = velovData.length;
        nbVelos += value.available_bikes;
        nbEmplacements += value.available_bike_stands;
        nbEmplacementsTotal += value.bike_stands;

        if(value.available_bikes == 0)
        {
            nbStationsVides ++;
        }
        if(value.available_bike_stands == 0)
        {
            nbStationsPleines ++;
        }
        if(value.bike_stands - (value.available_bike_stands + value.available_bikes) > 0)
        {
            nbEmplacementsEnPanne += value.bike_stands - (value.available_bike_stands + value.available_bikes);
        }
        if(value.status != "OPEN")
        {
            nbStationsFermees ++;
        }
        if(value.bonus)
        {
            nbStationsBonus ++;
        }


        var bikes = "";

        for(var i=0; i<value.available_bikes; i++)
        {
            bikes += "<img src='images/velov-busy.png'/>";
        }
        for(var i=0; i<value.available_bike_stands; i++)
        {
            bikes += "<img src='images/velov-free.png'/>";
        }

        var imagePointer = "";
        if(value.status != "OPEN")
        {
            imagePointer = "images/rouge.png";
        }
        else if(value.available_bikes == 0)
        {
            imagePointer = "images/orange.png";
        }
        else if(value.available_bike_stands == 0)
        {
            imagePointer = "images/jaune.png";
        }
        else
        {
            imagePointer = "images/vert.png";
        }
		
		var currentMarker = L.marker([value.position.lat, value.position.lng], {
            icon: L.icon({
                iconUrl: imagePointer,
                iconSize: [15, 15],
                iconAnchor: [8, 8],
                popupAnchor: [0, -8]
            }),
			keyword: value.name.substring(value.name.split(" ")[0].length+3, value.name.length).replace("'", "`")
        }).bindPopup(
            L.popup({
                maxWidth: 1920
            })
            .setContent(
                "<div>"
                    +"<img class='stationBikeImg' src='images/stations/"+value.number+".jpg'/>"
                    +value.name+"<br/>"
                    +"<span class='spanBike'>"
                        +bikes
                        +"<br/>"
                        +"("+value.available_bikes+"/"+(value.available_bike_stands+value.available_bikes)+")"
                    +"</span><br/>"
					+"<a href='#' onclick='getArrondStats("+value.number+")'>Statistiques du quartier '"+getArrondName(value.number)+"'</a>"
                +"</div>"
            )
        ).addTo(map);
		
		
		$("#stations").append("<option value='"+value.name.substring(value.name.split(" ")[0].length+3, value.name.length).replace("'", "`")+"'/>");


        markers.push(currentMarker);
		arrondValues["a"+((value.number>9999)?String(value.number).substring(0, 2):String(value.number).substring(0, 1))].push(value);        
    });
	

    $("#nbStations").html(nbStations+" stations");
    $("#nbVelos").html(nbVelos+" vélos disponibles<br/><i>("+(Math.floor((nbVelos / nbEmplacementsTotal)*1000))/10+" % des emplacements)</i>");
    $("#nbEmplacementsDisponibles").html(nbEmplacements+" emplacements libres<br/><i>("+(Math.floor((nbEmplacements / nbEmplacementsTotal)*1000))/10+" % des emplacements)</i>");
    $("#nbStationsPleines").html(nbStationsPleines+" stations pleines<br/><i>("+(Math.floor((nbStationsPleines / velovData.length)*1000))/10+" % des stations)</i>");
    $("#nbStationsVides").html(nbStationsVides+" stations vides<br/><i>("+(Math.floor((nbStationsVides / velovData.length)*1000))/10+" % des stations)</i>");
    $("#nbEmplacementsEnPanne").html(nbEmplacementsEnPanne+" emplacements en pannes<br/><i>("+(Math.floor((nbEmplacementsEnPanne / nbEmplacementsTotal)*1000))/10+" % des emplacements)</i>");
    $("#nbEmplacementsTotal").html(nbEmplacementsTotal+" emplacements");
    $("#nbEmplacementsParStation").html((Math.floor((nbEmplacementsTotal / velovData.length)*10))/10+" emplacements par station en moyenne");
    $("#nbStationsFermees").html(nbStationsFermees+" stations fermées<br/><i>("+(Math.floor((nbStationsFermees / velovData.length)*1000))/10+" % des stations)</i>");
    $("#nbStationsBonus").html(nbStationsBonus+" stations bonus<br/><i>("+(Math.floor((nbStationsBonus / velovData.length)*1000))/10+" % des stations)</i>");

    $(".leaflet-bar").append('<a id="leafletCenter" href="#" title="Center"><i class="material-icons">fullscreen</i></a>');
	$(".leaflet-bar").append('<a id="leafletLegend" href="#" data-toggle="tooltip" data-placement="right" data-original-title="'
		+'<h3>Légende</h3>'
		+'<span><img src=\'images/tirets.png\'/> Arrondissement</span><br/>'
		+'<span><img src=\'images/vert.png\'/> Station ouverte</span><br/>'
		+'<span><img src=\'images/rouge.png\'/> Station fermée</span><br/>'
		+'<span><img src=\'images/jaune.png\'/> Station pleine</span><br/>'
		+'<span><img src=\'images/orange.png\'/> Station vide</span>'
		+'"><i class="fa fa-info" aria-hidden="true"></i></a>');
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip({animation: true, html: true, delay: {show: 300, hide: 300}});
	});

    $("#leafletCenter").click(function(){
        map.setView(L.latLng(45.759723, 4.842223), 13);
    });
	
	arrondissements.forEach(function(value){
		var latLngs = [];
		value.geoPoints.forEach(function(point){
			latLngs.push(L.latLng(point[0], point[1]));
		});
		arrondissementPolygons[value.name] = L.polygon(latLngs, {
				color: '#E11F26',
				weight: 4,
				fillColor: '#E11F26',
				fillOpacity: 0.1,
				dashArray: "5, 5"
			})
			.bindPopup(renderArrondissement(value.name))
			.addTo(map);
	});
	getLocation();
}

function validateLocationSearch(){
	$val = $("#location").val();
	markers.forEach(function(value){
		if(value.options.keyword == $val){
			map.panTo(value._latlng);
			value.openPopup();
			$("#location").val("");
			return false;
		}
	});
	
	return false;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            L.marker([position.coords.latitude, position.coords.longitude], {
                icon: L.icon({
                    iconUrl: 'images/geolocation.png',
                    iconSize: [15, 15],
                    iconAnchor: [8, 8]
                })
            }).addTo(map);
			
			var markerSelected = null;
			var distance = 100000;
			
			
			markers.forEach(function(value){
				var tempDistance = distanceBetweenGPS(position.coords.latitude, position.coords.longitude, value._latlng.lat, value._latlng.lng);
				if(tempDistance < distance) {
					distance = tempDistance;
					markerSelected = value;
				}
			});
			
			markerSelected.openPopup();
        });
    }
}

function getArrondName(numStation){
	var arrCorrespond = {
		10: "Villeurbanne",
        3: "Lyon - 3 ème",
		6: "Lyon - 6 ème",
		8: "Lyon - 8 ème",
		7: "Lyon - 7 ème",
		2: "Lyon - 2 ème",
		5: "Lyon - 5 ème",
        1: "Lyon - 1 er",
		9: "Lyon - 9 ème",
		11: "Caluire-et-Cuire",
		4: "Lyon - 4 ème",
        12: "Vaulx-en-Velin Sud",
        20: 'Oullins'
	};
	
	return arrCorrespond[Math.floor(numStation/1000)];
}

function getArrondStats(numStation){
	arrondissementPolygons[getArrondName(numStation)].openPopup();
}

function renderArrondissement(name){	
	var arrCorrespond = {
		"Villeurbanne": 10,
        "Lyon - 3 ème": 3,
		"Lyon - 6 ème": 6,
		"Lyon - 8 ème": 8,
		"Lyon - 7 ème": 7,
		"Lyon - 2 ème": 2,
		"Lyon - 5 ème": 5,
        "Lyon - 1 er": 1,
		"Lyon - 9 ème": 9,
		"Caluire-et-Cuire": 11,
		"Lyon - 4 ème": 4,
        "Vaulx-en-Velin Sud": 12,
        "Oullins": 20
	};
	
	
	var arrnbStations = arrondValues["a"+arrCorrespond[name]].length;
	var arrnbStationsPleines = 0;
	var arrnbStationsVides = 0;
	var arrnbVelos = 0;
	var arrnbEmplacements = 0;
	var arrnbEmplacementsVides = 0;
	var arrnbStationsFermees = 0;
	var arrnbStationsBonus = 0;
	var arrnbEmplacementsEnPanne = 0;
		
	var result = "";
	arrondValues["a"+arrCorrespond[name]].forEach(function(value){
		if(value.available_bike_stands == 0){
			arrnbStationsPleines++;
		}
		if(value.available_bikes == 0){
			arrnbStationsVides++;
		}
		arrnbVelos += value.available_bikes;
		arrnbEmplacementsVides += value.available_bike_stands;
		arrnbEmplacements += value.bike_stands;
		if(value.status != "OPEN"){
			arrnbStationsFermees ++;
		}
		if(value.bonus){
			arrnbStationsBonus++;
		}
		arrnbEmplacementsEnPanne += value.bike_stands -(value.available_bike_stands+value.available_bikes);
	});
	
	var arrnbEmplacementsParStation = (Math.floor((arrnbEmplacements / arrnbStations)*10))/10;
	var arrnbVelosParStation = (Math.floor((arrnbVelos / arrnbStations)*10))/10;
	
	result += "<img src='images/analysePopup/velovstation2.png'/> "
		+arrnbStations+" stations"
		+((arrnbStations > nbStations / 12)?greatUp:badDown)+"<br/>";
		
	result += "<img src='images/analysePopup/stationPleine.png'/> "
		+arrnbStationsPleines+" station(s) pleine(s) ("+Math.floor((arrnbStationsPleines / arrnbStations)*100)+"% des stations"
		+(((arrnbStationsPleines / arrnbStations) > (nbStationsPleines / nbStations))?badUp:greatDown)+")<br/>";
		
	result += "<img src='images/analysePopup/stationVide.png'/> "
		+arrnbStationsVides+" station(s) vide(s) ("+Math.floor((arrnbStationsVides / arrnbStations)*100)+"% des stations"
		+(((arrnbStationsVides / arrnbStations) > (nbStationsVides / nbStations))?badUp:greatDown)+")<br/>";
		
	result += "<img src='images/analysePopup/stationBonus.png'/> "
		+arrnbStationsBonus+ " station(s) bonus ("+Math.floor((arrnbStationsBonus / arrnbStations)*100)+"% des stations"
		+(((arrnbStationsBonus / arrnbStations) > (nbStationsBonus / nbStations))?greatUp:badDown)+")<br/><br/>";
		
	result += "<img src='images/analysePopup/velov.png'/> "
		+arrnbVelos+" vélos disponibles ("+Math.floor((arrnbVelos / arrnbEmplacements)*100)+"%"
		+(((arrnbVelos / arrnbEmplacements) > (nbVelos / nbEmplacementsTotal))?greatUp:badDown)+")<br/>";
		
	result += "<img src='images/analysePopup/emplacementLibre.png'/> "
		+arrnbEmplacementsVides+" emplacements vides ("+Math.floor((arrnbEmplacementsVides / arrnbEmplacements)*100)+"% des emplacements"
		+(((arrnbEmplacementsVides / arrnbEmplacements) > nbEmplacements / nbEmplacementsTotal)?greatUp:badDown)+")<br/>";
		
	result += "<img src='images/analysePopup/tousEmplacements.png'/> "+arrnbEmplacements+" emplacements au total"
		+((arrnbEmplacements > nbEmplacementsTotal / 12)?greatUp:badDown)+"<br/>";
		
	result += "<img src='images/analysePopup/velovstation.png'/> "+arrnbEmplacementsParStation+" emplacements par station"
		+((arrnbEmplacementsParStation > nbEmplacementsTotal / nbStations)?greatUp:badDown)+"<br/>";
		
	result += "<img src='images/analysePopup/velovstation.png'/> "+arrnbVelosParStation+" vélos par station"
		+((arrnbVelosParStation > nbVelos / nbStations)?greatUp:badDown)+"<br/><br/>";
	
	result += "<img src='images/analysePopup/NWstation.png'/> "
		+arrnbStationsFermees+" stations fermées ("+Math.floor((arrnbStationsFermees / arrnbStations)*100)+"% des stations"
		+(((arrnbStationsFermees / arrnbStations) > (nbStationsFermees / nbStations))?badUp:greatDown)+")<br/>";
	result += "<img src='images/analysePopup/NWvelov.png'/> "
		+arrnbEmplacementsEnPanne+" emplacements en panne ("+Math.floor((arrnbEmplacementsEnPanne / arrnbEmplacements)*100)+"% des emplacements"
		+(((arrnbEmplacementsEnPanne / arrnbEmplacements) > (nbEmplacementsEnPanne / nbEmplacementsTotal))?badUp:greatDown)+")<br/>";
	
	
	
	return "<div class='popupContentLeaflet'><h3>"+name+"</h3>"
		+result
		+"</div>"
}


function convertToRad(input){
	return (Math.PI * input)/180;
}
 
function distanceBetweenGPS(lat_a_degre, lon_a_degre, lat_b_degre, lon_b_degre){
     
	var R = 6378000;
 
    var lat_a = convertToRad(lat_a_degre);
    var lon_a = convertToRad(lon_a_degre);
    var lat_b = convertToRad(lat_b_degre);
    var lon_b = convertToRad(lon_b_degre);
     
    var d = R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(lon_b - lon_a) * Math.cos(lat_b) * Math.cos(lat_a)))
    return d;
}



var req = new XMLHttpRequest();
req.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=4a5a2bd5d41860eb9088114a81b74d7d572963d8', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      parseVelovData(JSON.parse(req.responseText));
     else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);


/*map.on("popupopen", function(){
	console.log($("g").length);
	$("g")
});*/