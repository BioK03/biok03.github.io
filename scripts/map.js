var map = L.map('map').setView([45.759723, 4.842223], 13);
var markers = [];


L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var arrondissements = [
    {
        name: "Villeurbanne",
        geoPoints:[
            [45.787, 4.85997],
            [45.79504, 4.87901],
            [45.78343, 4.90759],
            [45.77104, 4.90605],
            [45.768763, 4.91729],
            [45.74846, 4.91772],
            [45.7527, 4.89912],
            [45.75493, 4.87583],
            [45.76374, 4.86987],
            [45.77241, 4.85876]
        ]
    },
    {
        name: "3 ème",
        geoPoints:[
            [45.76356, 4.83982],
            [45.76374, 4.86987],
            [45.75493, 4.87583],
            [45.7527, 4.89912],
            [45.73926, 4.89208],
            [45.74964, 4.85955],
            [45.75681, 4.83869]
        ]
    },
    {
        name: "6 ème",
        geoPoints:[
            [45.78251, 4.846],
            [45.78612, 4.85189],
            [45.787, 4.85997],
            [45.77241, 4.85876],
            [45.76374, 4.86987],
            [45.76356, 4.83987],
            [45.77308, 4.83974],
            [45.77269, 4.83964],
            [45.77886, 4.84299]
        ]
    },
    {
        name: "8 ème",
        geoPoints:[
            [45.73926, 4.89208],
            [45.7203, 4.88739],
            [45.72689, 4.86232],
            [45.73079, 4.85966],
            [45.72971, 4.85382],
            [45.71898, 4.85443],
            [45.71887, 4.84909],
            [45.73858, 4.84961],
            [45.74964, 4.85955]
        ]
    },
    {
        name: "7 ème",
        geoPoints:[
            [45.74964, 4.85955],
            [45.73858, 4.84961],
            [45.71887, 4.84909],
            [45.71853, 4.83755],
            [45.70694, 4.83991],
            [45.71186, 4.82755],
            [45.71809, 4.82077],
            [45.72779, 4.81811],
            [45.75681, 4.83859]
        ]
    },
    {
        name: "2 ème",
        geoPoints:[
            [45.72779, 4.81811],
            [45.73457, 4.81353],
            [45.74104, 4.81310],
            [45.74727, 4.815672],
            [45.75104, 4.82177],
            [45.76476, 4.83053],
            [45.76356, 4.83987],
            [45.75681, 4.83869]
        ]
    },
    {
        name: "5 ème",
        geoPoints:[
            [45.75104, 4.82177],
            [45.7519, 4.80211],
            [45.74429, 4.78366],
            [45.75232, 4.77087],
            [45.75447, 4.78142],
            [45.76418, 4.78683],
            [45.76052, 4.80486],
            [45.76702, 4.81790],
            [45.76773, 4.82736],
            [45.76476, 4.83053]
        ]
    },
    {
        name: "9 ème",
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
            [45.80342, 4.84145],
            [45.81279, 4.84473],
            [45.81884, 4.85675],
            [45.79504, 4.87901],
            [45.787, 4.85997],
            [45.78612, 4.85189],
            [45.78251, 4.846],
            [45.77886, 4.84299],
            [45.78183, 4.83329],
            [45.78877, 4.81779],
            [45.79697, 4.83338]
        ]
    },
    {
        name: "4 ème",
        geoPoints:[
            [45.77308, 4.83974],
            [45.77445, 4.83311],
            [45.7709, 4.81299],
            [45.77719, 4.80887],
            [45.78877, 4.81779],
            [45.78183, 4.83329],
            [45.77886, 4.84299],
            [45.77269, 4.83961]
        ]
    },
    {
        name: "1 er",
        geoPoints:[
            [45.76356, 4.83987],
            [45.76476, 4.83053],
            [45.76773, 4.82756],
            [45.76702, 4.81790],
            [45.7709, 4.81299],
            [45.77445, 4.83311],
            [45.77308, 4.83974]
        ]
    },
    {
        name: "Valux-en-Velin Sud",
        geoPoints:[
            [45.768763, 4.91729],
            [45.77159, 4.93546],
            [45.76207, 4.93744],
            [45.74435, 4.9328],
            [45.74846, 4.91772]
        ]
    },
];


arrondissements.forEach(function(value){
    var latLngs = [];
    value.geoPoints.forEach(function(point){
        latLngs.push(L.latLng(point[0], point[1]));
    });
    L.polygon(latLngs, {
        color: '#E11F26',
        weight: 4,
        fillColor: '#E11F26',
        fillOpacity: 0.1,
        dashArray: "5, 5"
    }).bindPopup(value.name).addTo(map);
});

function parseVelovData(velovData){
    console.log(velovData);
    
    var nbVelos = 0;
    var nbArcs = 0;
    var nbArcsTotal = 0;
    var nbStationsVides = 0;
    var nbStationsPleines = 0;
    var nbEmplacementsEnPanne = 0;
    var nbStationsFermees = 0;
    var nbStationsBonus = 0;

    velovData.forEach(function(value){
        nbVelos += value.available_bikes;
        nbArcs += value.available_bike_stands;
        nbArcsTotal += value.bike_stands;

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
            imagePointer = "images/gris.gif";
        }
        else if(value.available_bikes == 0)
        {
            imagePointer = "images/orange.gif";
        }
        else if(value.available_bike_stands == 0)
        {
            imagePointer = "images/jaune.gif";
        }
        else
        {
            imagePointer = "images/vert.gif";
        }

        markers.push(L.marker([value.position.lat, value.position.lng], {
            icon: L.icon({
                iconUrl: imagePointer,
                iconSize: [15, 15],
                iconAnchor: [8, 8],
                popupAnchor: [0, -8]
            })
        }).bindPopup(
            L.popup({
                maxWidth: 1920
            })
            .setContent(
                "<div>"
                    +value.name+"<br/>"
                    +"<span class='spanBike'>"
                    +bikes
                    +"</span>"
                +"</div>"
            )
        ).addTo(map));

        
    });

    $("#nbStations").html(velovData.length+" stations");
    $("#nbVelos").html(nbVelos+" vélos disponibles");
    $("#nbEmplacementsDisponibles").html(nbArcs+" emplacements libres");
    $("#nbStationsPleines").html(nbStationsPleines+" stations pleines");
    $("#nbStationsVides").html(nbStationsVides+" stations vides");
    $("#nbEmplacementsEnPanne").html(nbEmplacementsEnPanne+" emplacements en pannes");
    $("#nbEmplacementsTotal").html(nbArcsTotal+" emplacements");
    $("#nbEmplacementsParStation").html((Math.floor((nbArcsTotal / velovData.length)*10))/10+" emplacements par station en moyenne");
    $("#nbStationsFermees").html(nbStationsFermees+" stations fermées");
    $("#nbStationsBonus").html(nbStationsBonus+" stations bonus");
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
        });
    }
}

getLocation();




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
