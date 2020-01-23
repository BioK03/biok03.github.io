var map = L.map('map').setView([45.759723, 4.842223], 12);
var markers = [];
var arrondissementPolygons = [];
var arrondValues = {
    a0: [],
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
    a14: [],
    a15: [],
    a16: [],
    a17: [],
    a18: [],
    a19: [],
    a20: [],
    a21: [],
    a22: [],
    a23: [],
    a24: [],
    a25: [],
    a27: [],
    a28: [],
    a30: [],
    a33: [],
    a34: []
};


const greatUp = '<i class="text-success material-icons" title="Supérieur à la moyenne">arrow_drop_up</i>';
const badUp = '<i class="text-danger material-icons" title="Supérieur à la moyenne">arrow_drop_up</i>';
const greatDown = '<i class="text-success material-icons" title="Inférieur à la moyenne">arrow_drop_down</i>';
const badDown = '<i class="text-danger material-icons" title="Inférieur à la moyenne">arrow_drop_down</i>';

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: 'OpenData by <a href="https://developer.jcdecaux.com/#/home" target="_blank">JCDecaux</a>.Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const arrondissements = [
    {
        name: 'Infrastructure JC Decaux',
        geoPoints: [
            [45.780225, 4.904592],
            [45.780275, 4.905550],
            [45.780801, 4.905440],
            [45.780711, 4.904506]
        ]
    },

	{
        name: 'Lyon - 1 er',
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
        name: 'Lyon - 2 ème',
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
        name: 'Lyon - 3 ème',
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
        name: 'Lyon - 4 ème',
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
        name: 'Lyon - 5 ème',
        geoPoints:[
			[45.75232, 4.77087],
            [45.75447, 4.78142],
            [45.76418, 4.78683],
            [45.76052, 4.80486],
            [45.76702, 4.81790],
            [45.76773, 4.82756],
            [45.76476, 4.83053],
            [45.75104, 4.82177],
            [45.751222, 4.816067],
            [45.7519, 4.80211],
            [45.74429, 4.78366],
            [45.747768, 4.778961]
        ]
    },
    {
        name: 'Lyon - 6 ème',
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
        name: 'Lyon - 7 ème',
        geoPoints:[
			[45.70694, 4.83991],
            [45.714367, 4.822854],
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
        name: 'Lyon - 8 ème',
        geoPoints:[
			[45.72971, 4.85382],
            [45.71898, 4.85443],
            [45.71887, 4.84909],
            [45.73858, 4.84961],
            [45.74964, 4.85955],
            [45.73926, 4.89208],
            [45.726113, 4.886807],
            [45.7203, 4.88739],
            [45.72689, 4.86232],
            [45.73079, 4.85966]
        ]
    },
    {
        name: 'Lyon - 9 ème',
        geoPoints:[
            [45.76052, 4.80486],
            [45.76418, 4.78683],
            [45.77595, 4.79398],
            [45.78647, 4.79124],
            [45.78756, 4.78446],
            [45.791745, 4.796322],
            [45.789441, 4.807587],
            [45.798672, 4.819797],
            [45.802382, 4.820312],
            [45.804656, 4.822801],
            [45.806870, 4.832156],
            [45.804259, 4.834098],
            [45.808478, 4.836802],
            [45.80342, 4.84145],
            [45.79697, 4.83338],
            [45.78877, 4.81779],
            [45.77719, 4.80887],
            [45.7709, 4.81299],
            [45.76702, 4.81790]
        ]
    },

    {
        name: 'Villeurbanne',
        geoPoints:[
			[45.7527, 4.89912],
            [45.75493, 4.87583],
            [45.76374, 4.86987],
            [45.77241, 4.85876],
            [45.787, 4.85997],
            [45.79504, 4.87901],
            [45.780711, 4.904506],
            [45.780225, 4.904592],
            [45.77104, 4.90605],
            [45.768763, 4.91729],
            [45.74846, 4.91772]
        ]
    },
    {
        name: 'Caluire-et-Cuire',
        geoPoints:[
			[45.78183, 4.83329],
            [45.78877, 4.81779],
            [45.79697, 4.83338],
            [45.80342, 4.84145],
            [45.81279, 4.84473],
            [45.81884, 4.85675],
            [45.812609, 4.862593],
            [45.79504, 4.87901],
            [45.787, 4.85997],
            [45.78612, 4.85189],
            [45.78251, 4.846],
            [45.77886, 4.84299]
        ]
    },
    {
        name: 'Vaulx-en-Velin',
        geoPoints:[
			[45.74846, 4.91772],
            [45.768763, 4.91729],
            [45.77104, 4.90605],
            [45.780225, 4.904592],
            [45.780275, 4.905550],
            [45.780801, 4.905440],
            [45.780711, 4.904506],
            [45.79504, 4.87901],
            [45.803311, 4.892842],
            [45.803627, 4.924590],
            [45.809268, 4.966834],
            [45.77159, 4.93546],
            [45.76207, 4.93744],
            [45.74435, 4.9328]
        ]
    },
    {
        name: 'Saint-Priest',
        geoPoints: [
            [45.717944, 4.909705],
            [45.703328, 4.894951],
            [45.688100, 4.911602],
            [45.676723, 4.968690],
            [45.677563, 4.991263],
            [45.708379, 5.000018],
            [45.725578, 4.948434],
            [45.725824, 4.936570]
        ]
    },
    {
        name: 'Vénissieux',
        geoPoints: [
            [45.671309, 4.886024],
            [45.684623, 4.893234],
            [45.688100, 4.911602],
            [45.703328, 4.894951],
            [45.717944, 4.909705],
            [45.726113, 4.886807],
            [45.7203, 4.88739],
            [45.72689, 4.86232],
            [45.73079, 4.85966],
            [45.72971, 4.85382],
            [45.71898, 4.85443],
            [45.71887, 4.84909],
            [45.713254, 4.864654],
            [45.700139, 4.866496],
            [45.700551, 4.856516],
            [45.688262, 4.861502],
        ]
    },
    {
        name: 'Saint-Fons',
        geoPoints: [
            [45.70694, 4.83991],
            [45.71853, 4.83755],
            [45.71887, 4.84909],
            [45.713254, 4.864654],
            [45.700139, 4.866496],
            [45.700551, 4.856516],
            [45.688262, 4.861502],
            [45.680529, 4.845262],
            [45.686657, 4.836518],
            [45.691529, 4.840879],
        ]
    },
    {
        name: 'Pierre-Bénite',
        geoPoints: [
            [45.696655, 4.809508],
            [45.697674, 4.821395],
            [45.695426, 4.820322],
            [45.691529, 4.840879],
            [45.70694, 4.83991],
            [45.714367, 4.822854],
            [45.709063, 4.820923],
            [45.70342, 4.80521],
        ]
    },
    {
        name: 'St-Genis-Laval',
        geoPoints: [
            [45.71954, 4.77836],
            [45.706315, 4.767709],
            [45.688091, 4.765306],
            [45.688031, 4.773718],
            [45.664883, 4.785820],
            [45.666322, 4.791742],
            [45.678857, 4.795519],
            [45.688331, 4.817920],
            [45.697674, 4.821395],
            [45.696655, 4.809508],
            [45.70342, 4.80521],
        ]
    },
    {
        name: 'Oullins',
        geoPoints: [
            [45.71809, 4.82077],
            [45.714367, 4.822854],
            [45.709063, 4.820923],
            [45.70342, 4.80521],
            [45.71954, 4.77836],
            [45.722786, 4.780420],
            [45.72440, 4.78066],
            [45.72441, 4.80849],
        ]
    },
    {
        name: 'Fontaines sur Saône',
        geoPoints: [
            [45.81884, 4.85675],
            [45.829786, 4.850928],
            [45.833524, 4.841401],
            [45.837650, 4.840500],
            [45.839055, 4.855520],
            [45.833075, 4.855992],
            [45.833045, 4.865219],
            [45.814952, 4.866292],
            [45.812609, 4.862593]
        ]
    },
    {
        name: 'Bron',
        geoPoints: [
            [45.726113, 4.886807],
            [45.73926, 4.89208],
            [45.7527, 4.89912],
            [45.74846, 4.91772],
            [45.74435, 4.9328],
            [45.725824, 4.936570],
            [45.717944, 4.909705]
        ]
    },
    {
        name: 'Tassin la Demi-Lune',
        geoPoints: [
            [45.77595, 4.79398],
            [45.76418, 4.78683],
            [45.75447, 4.78142],
            [45.75232, 4.77087],
            [45.751066, 4.743412],
            [45.769420, 4.736116],
            [45.768162, 4.712255],
            [45.775017, 4.711526],
            [45.773371, 4.747703],
            [45.765049, 4.771393]
        ]
    },
    {
        name: 'La Mulatière',
        geoPoints: [
            [45.75104, 4.82177],
            [45.74727, 4.815672],
            [45.74104, 4.81310],
            [45.73457, 4.81353],
            [45.72779, 4.81811],
            [45.71809, 4.82077],
            [45.72441, 4.80849],
            [45.727568, 4.805746],
            [45.742006, 4.807935],
            [45.751222, 4.816067]
        ]
    },
    {
        name: 'Sainte-Foy-lès-Lyon',
        geoPoints: [
            [45.74429, 4.78366],
            [45.7519, 4.80211],
            [45.751222, 4.816067],
            [45.742006, 4.807935],
            [45.727568, 4.805746],
            [45.72441, 4.80849],
            [45.72440, 4.78066],
            [45.722786, 4.780420],
            [45.728568, 4.771580],
            [45.737734, 4.781107],
            [45.746360, 4.776214],
            [45.747768, 4.778961]
        ]
    },
    {
        name: 'Rillieux',
        geoPoints: [
            [45.814952, 4.866292],
            [45.812609, 4.862593],
            [45.79504, 4.87901],
            [45.803311, 4.892842],
            [45.803627, 4.924590],
            [45.831742, 4.921672],
            [45.857571, 4.901416],
            [45.836287, 4.904334]
        ]
    },
    {
        name: 'Ecully',
        geoPoints: [
            [45.78756, 4.78446],
            [45.78647, 4.79124],
            [45.77595, 4.79398],
            [45.765049, 4.771393],
            [45.773371, 4.747703],
            [45.790535, 4.752106],
            [45.800888, 4.770173]
        ]
    },
    {
        name: 'Saint-Cyr-au-Mont-d\'Or',
        geoPoints: [
            [45.798672, 4.819797],
            [45.802382, 4.820312],
            [45.804656, 4.822801],
            [45.806870, 4.832156],
            [45.804259, 4.834098],
            [45.808478, 4.836802],
            [45.817107, 4.834909],
            [45.824764, 4.8259830],
            [45.831044, 4.827785],
            [45.827967, 4.813979],
            [45.843335, 4.806340],
            [45.842678, 4.793122],
            [45.816841, 4.810202],
            [45.815226, 4.805996],
            [45.802842, 4.810116]
        ]
    },
    {
        name: 'Collonges au Mont-d\'Or',
        geoPoints: [
            [45.837650, 4.840500],
            [45.833524, 4.841401],
            [45.829786, 4.850928],
            [45.81884, 4.85675],
            [45.81279, 4.84473],
            [45.80342, 4.84145],
            [45.808478, 4.836802],
            [45.817107, 4.834909],
            [45.824764, 4.8259830],
            [45.831044, 4.827785]
        ]
    },
    {
        name: 'Albigny-sur-Saône',
        geoPoints: [
            [45.866499, 4.836443],
            [45.878421, 4.836572],
            [45.873135, 4.825007],
            [45.856490, 4.818441],
            [45.853830, 4.836379]
        ]
    },
    {
        name: 'Neuville-sur-Saône',
        geoPoints: [
            [45.866499, 4.836443],
            [45.878421, 4.836572],
            [45.884456, 4.814427],
            [45.898554, 4.864381],
            [45.885113, 4.866097],
            [45.883619, 4.850133],
            [45.866469, 4.850648]
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
    nbStations = velovData.length;

    velovData.forEach(value => {
        nbVelos += value.available_bikes;
        nbEmplacements += value.available_bike_stands;
        nbEmplacementsTotal += value.bike_stands;

        if(value.available_bikes == 0) {
            nbStationsVides ++;
        }
        if(value.available_bike_stands == 0) {
            nbStationsPleines ++;
        }
        if(value.bike_stands - (value.available_bike_stands + value.available_bikes) > 0) {
            nbEmplacementsEnPanne += value.bike_stands - (value.available_bike_stands + value.available_bikes);
        }
        if(value.status != 'OPEN') {
            nbStationsFermees ++;
        }
        if(value.bonus) {
            nbStationsBonus ++;
        }

        var bikes = '';

        for(var i = 0; i < value.available_bikes; i++) {
            bikes += `<img src='images/velov-busy.png'/>`;
        }
        for(var i = 0; i < value.available_bike_stands; i++) {
            bikes += `<img src='images/velov-free.png'/>`;
        }

        var imagePointer = '';
        if(value.status != 'OPEN') {
            imagePointer = 'images/rouge.png';
        }
        else if(value.available_bikes == 0) {
            imagePointer = 'images/orange.png';
        }
        else if(value.available_bike_stands == 0) {
            imagePointer = 'images/jaune.png';
        }
        else {
            imagePointer = 'images/vert.png';
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
                `<div>
                    <img class='stationBikeImg' src='images/stations/${value.number}.jpg'/>
                    ${value.name}<br/>
                    <span class='spanBike'>
                        ${bikes}
                        <br/>
                        (${value.available_bikes}/${(value.available_bike_stands+value.available_bikes)})
                    </span><br/>
					<a href='#' onclick='getArrondStats(${value.number})'>Statistiques du quartier '${getArrondName(value.number)}'</a>
                </div>`
            )
        ).addTo(map);
		
		$('#stations').append(`<option value='${value.name.substring(value.name.split(" ")[0].length+3, value.name.length).replace("'", "`")}'/>`);


        markers.push(currentMarker);
        var arrondNumber = (value.number > 9999) ? String(value.number).substring(0, 2) : 
            ((value.number > 999) ? String(value.number).substring(0, 1) : '0');
        if (!!arrondValues['a' + arrondNumber]) {
            arrondValues['a' + arrondNumber].push(value);
        } else {
            console.warn('Arrond ' + arrondNumber + ' not recognized for station : ', value);
        }
    });

    $('#nbStations').html(nbStations + ' stations');
    $('#nbVelos').html(`${nbVelos} vélos disponibles<br/><i>${(Math.floor((nbVelos / nbEmplacementsTotal)*1000))/10} % des emplacements)</i>`);
    $('#nbEmplacementsDisponibles').html(`${nbEmplacements} emplacements libres<br/>
        <i>${(Math.floor((nbEmplacements / nbEmplacementsTotal)*1000))/10} % des emplacements)</i>`);
    $('#nbStationsPleines').html(`${nbStationsPleines} stations pleines<br/>
        <i>${(Math.floor((nbStationsPleines / velovData.length)*1000))/10} % des stations)</i>`);
    $('#nbStationsVides').html(`${nbStationsVides} stations vides<br/>
        <i>${(Math.floor((nbStationsVides / velovData.length)*1000))/10} % des stations)</i>`);
    $('#nbEmplacementsEnPanne').html(`${nbEmplacementsEnPanne} emplacements en pannes<br/>
        <i>${(Math.floor((nbEmplacementsEnPanne / nbEmplacementsTotal)*1000))/10} % des emplacements)</i>`);
    $('#nbEmplacementsTotal').html(nbEmplacementsTotal + ' emplacements');
    $('#nbEmplacementsParStation').html((Math.floor((nbEmplacementsTotal / velovData.length)*10))/10 + " emplacements par station en moyenne");
    $('#nbStationsFermees').html(`${nbStationsFermees} stations fermées<br/>
        <i>${(Math.floor((nbStationsFermees / velovData.length)*1000))/10} % des stations)</i>`);
    $('#nbStationsBonus').html(`${nbStationsBonus} stations bonus<br/>
        <i>${(Math.floor((nbStationsBonus / velovData.length)*1000))/10} % des stations)</i>`);

    $('.leaflet-bar').append('<a id="leafletCenter" href="#" title="Center"><i class="material-icons">fullscreen</i></a>');
	$('.leaflet-bar').append(`<a id="leafletLegend" href="#" data-toggle="tooltip" data-placement="right" data-original-title="
		<h3>Légende</h3>
		<span><img src=\'images/tirets.png\'/> Arrondissement</span><br/>
		<span><img src=\'images/vert.png\'/> Station ouverte</span><br/>
		<span><img src=\'images/rouge.png\'/> Station fermée</span><br/>
		<span><img src=\'images/jaune.png\'/> Station pleine</span><br/>
		<span><img src=\'images/orange.png\'/> Station vide</span>
		"><i class="fa fa-info" aria-hidden="true"></i></a>`);
	
	(() => $('[data-toggle="tooltip"]').tooltip({ animation: true, html: true, delay: { show: 300, hide: 300 } }))();

    $('#leafletCenter').click(() => map.setView(L.latLng(45.759723, 4.842223), 13));
	
	arrondissements.forEach(value => {
		arrondissementPolygons[value.name] = L.polygon(value.geoPoints.map(pt => L.latLng(pt[0], pt[1])), {
				color: '#E11F26',
				weight: 4,
				fillColor: '#E11F26',
				fillOpacity: 0.1,
				dashArray: '5, 5'
			})
			.bindPopup(renderArrondissement(value.name))
			.addTo(map);
	});
	getLocation();
}

function validateLocationSearch(){
	$val = $('#location').val();
	markers.forEach(value => {
		if(value.options.keyword === $val){
			map.panTo(value._latlng);
			value.openPopup();
			$('#location').val('');
			return false;
		}
	});
	return false;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            L.marker([position.coords.latitude, position.coords.longitude], {
                icon: L.icon({
                    iconUrl: 'images/geolocation.png',
                    iconSize: [15, 15],
                    iconAnchor: [8, 8]
                })
            }).addTo(map);
			
			var markerSelected = null;
			var distance = Math.Infinity;
			
			markers.forEach(value => {
				var tempDistance = distanceBetweenGPS(position.coords.latitude, position.coords.longitude, value._latlng.lat, value._latlng.lng);
				if(tempDistance < distance) {
					distance = tempDistance;
					markerSelected = value;
				}
			});
            
            if(markerSelected != null) {
                markerSelected.openPopup();
            }
        });
    }
}

function getArrondName(numStation){
	var arrCorrespond = {
        0: 'Infrastructure JC Decaux',

        1: 'Lyon - 1 er',
		2: 'Lyon - 2 ème',
        3: 'Lyon - 3 ème',
		4: 'Lyon - 4 ème',
		5: 'Lyon - 5 ème',
		6: 'Lyon - 6 ème',
		7: 'Lyon - 7 ème',
		8: 'Lyon - 8 ème',
		9: 'Lyon - 9 ème',

		10: 'Villeurbanne',
		11: 'Caluire-et-Cuire',
        12: 'Vaulx-en-Velin Sud',
        14: 'Bron',
        15: 'Saint-Priest',
        16: 'Vénissieux',
        17: 'Saint-Fons',
        18: 'Pierre-Bénite',
        19: 'St-Genis-Laval',
        20: 'Oullins',
        21: 'La Mulatière',
        22: 'Sainte-Foy-lès-Lyon',
        23: 'Tassin la Demi-Lune',
        24: 'Ecully',
        25: 'Saint-Cyr-au-Mont-d\'Or',
        27: 'Collonges au Mont-d\'Or',
        28: 'Fontaines sur Saône',
        30: 'Rillieux',
        33: 'Albigny-sur-Saône',
        34: 'Neuville-sur-Saône'
	};
	
	return arrCorrespond[Math.floor(numStation/1000)];
}

function getArrondStats(numStation){
	arrondissementPolygons[getArrondName(numStation)].openPopup();
}

function renderArrondissement(name){	
	var arrCorrespond = {
        'Infrastructure JC Decaux': 0,

        'Lyon - 1 er': 1,
		'Lyon - 2 ème': 2,
        'Lyon - 3 ème': 3,
		'Lyon - 4 ème': 4,
		'Lyon - 5 ème': 5,
		'Lyon - 6 ème': 6,
		'Lyon - 7 ème': 7,
		'Lyon - 8 ème': 8,
		'Lyon - 9 ème': 9,

		'Villeurbanne': 10,
		'Caluire-et-Cuire': 11,
        'Vaulx-en-Velin': 12,
        'Bron': 14,
        'Saint-Priest': 15,
        'Vénissieux': 16,
        'Saint-Fons': 17,
        'Pierre-Bénite': 18,
        'St-Genis-Laval': 19,
        'Oullins': 20,
        'La Mulatière': 21,
        'Sainte-Foy-lès-Lyon': 22,
        'Tassin la Demi-Lune': 23,
        'Ecully': 24,
        'Saint-Cyr-au-Mont-d\'Or': 25,
        'Collonges au Mont-d\'Or': 27,
        'Fontaines sur Saône': 28,
        'Rillieux': 30,
        'Albigny-sur-Saône': 33,
        'Neuville-sur-Saône': 34
    };
    
    if (!arrondValues['a' + arrCorrespond[name]]) {
        console.log(`Can\'t render arrondissement ${name} : Name is not recognized`);
        return;
    }
	
	var arrnbStations = arrondValues['a' + arrCorrespond[name]].length;
	var arrnbStationsPleines = 0;
	var arrnbStationsVides = 0;
	var arrnbVelos = 0;
	var arrnbEmplacements = 0;
	var arrnbEmplacementsVides = 0;
	var arrnbStationsFermees = 0;
	var arrnbStationsBonus = 0;
	var arrnbEmplacementsEnPanne = 0;

	arrondValues['a' + arrCorrespond[name]].forEach(function(value){
		if(value.available_bike_stands == 0){
			arrnbStationsPleines++;
		}
		if(value.available_bikes == 0){
			arrnbStationsVides++;
		}
		arrnbVelos += value.available_bikes;
		arrnbEmplacementsVides += value.available_bike_stands;
		arrnbEmplacements += value.bike_stands;
		if(value.status != 'OPEN'){
			arrnbStationsFermees ++;
		}
		if(value.bonus){
			arrnbStationsBonus++;
		}
		arrnbEmplacementsEnPanne += value.bike_stands -(value.available_bike_stands+value.available_bikes);
	});
	
	var arrnbEmplacementsParStation = (Math.floor((arrnbEmplacements / arrnbStations)*10))/10;
	var arrnbVelosParStation = (Math.floor((arrnbVelos / arrnbStations)*10))/10;
	
	var result = `<img src='images/analysePopup/velovstation2.png'/>
		${arrnbStations} stations
        ${(arrnbStations > nbStations / 12)?greatUp:badDown}<br/>
        
        <img src='images/analysePopup/stationPleine.png'/>
        ${arrnbStationsPleines} station(s) pleine(s) - ${Math.floor((arrnbStationsPleines / arrnbStations)*100)}% des stations
        ${((arrnbStationsPleines / arrnbStations) > (nbStationsPleines / nbStations))?badUp:greatDown}<br/>
        
        <img src='images/analysePopup/stationVide.png'/>
		${arrnbStationsVides} station(s) vide(s) - ${Math.floor((arrnbStationsVides / arrnbStations)*100)}% des stations
        ${((arrnbStationsVides / arrnbStations) > (nbStationsVides / nbStations))?badUp:greatDown}<br/>
        
        <img src='images/analysePopup/stationBonus.png'/>
		${arrnbStationsBonus} station(s) bonus ${Math.floor((arrnbStationsBonus / arrnbStations)*100)}% des stations
        ${((arrnbStationsBonus / arrnbStations) > (nbStationsBonus / nbStations))?greatUp:badDown}<br/><br/>
        
        <img src='images/analysePopup/velov.png'/>
		${arrnbVelos} vélos disponibles - ${Math.floor((arrnbVelos / arrnbEmplacements)*100)}%
        ${((arrnbVelos / arrnbEmplacements) > (nbVelos / nbEmplacementsTotal))?greatUp:badDown}<br/>
        
        <img src='images/analysePopup/emplacementLibre.png'/>
        ${arrnbEmplacementsVides} emplacements vides - ${Math.floor((arrnbEmplacementsVides / arrnbEmplacements)*100)}% des emplacements
        ${((arrnbEmplacementsVides / arrnbEmplacements) > nbEmplacements / nbEmplacementsTotal)?greatUp:badDown}<br/>
        
        <img src='images/analysePopup/tousEmplacements.png'/> ${arrnbEmplacements} emplacements au total
        ${(arrnbEmplacements > nbEmplacementsTotal / 12)?greatUp:badDown}<br/>
        
        <img src='images/analysePopup/velovstation.png'/> ${arrnbEmplacementsParStation} emplacements par station
        ${(arrnbEmplacementsParStation > nbEmplacementsTotal / nbStations)?greatUp:badDown}<br/>
        
        <img src='images/analysePopup/velovstation.png'/> ${arrnbVelosParStation} vélos par station
        ${(arrnbVelosParStation > nbVelos / nbStations)?greatUp:badDown}<br/><br/>
        
        <img src='images/analysePopup/NWstation.png'/>
		${arrnbStationsFermees} stations fermées - ${Math.floor((arrnbStationsFermees / arrnbStations)*100)}% des stations
        ${((arrnbStationsFermees / arrnbStations) > (nbStationsFermees / nbStations))?badUp:greatDown}<br/>

        <img src='images/analysePopup/NWvelov.png'/>
		${arrnbEmplacementsEnPanne} emplacements en panne - ${Math.floor((arrnbEmplacementsEnPanne / arrnbEmplacements)*100)}% des emplacements
		${((arrnbEmplacementsEnPanne / arrnbEmplacements) > (nbEmplacementsEnPanne / nbEmplacementsTotal))?badUp:greatDown}<br/>`;
	
	return `<div class='popupContentLeaflet'><h3>${name}</h3>${result}</div>`;
}

const convertToRad = input => (Math.PI * input)/180;
 
const distanceBetweenGPS = (lat_a_degre, lon_a_degre, lat_b_degre, lon_b_degre) => {
	const R = 6378000, lat_a = convertToRad(lat_a_degre), lat_b = convertToRad(lat_b_degre);
     
    return R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(convertToRad(lon_b_degre) - convertToRad(lon_a_degre)) 
        * Math.cos(lat_b) * Math.cos(lat_a)))
}
/*
var req = new XMLHttpRequest();
req.open('GET', `https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=${KEYS.JCDECAUX}`, true);
req.onreadystatechange = function (_) {
  if (req.readyState == 4) {
     if(req.status == 200)
      parseVelovData(JSON.parse(req.responseText));
     else
      console.log('Erreur pendant le chargement de la page');
  }
};
req.send(null);*/

fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=${KEYS.JCDECAUX}`)
    .then(res => {
        if(!res.ok) {
            throw Error('Error fetching API');
        }
        return Promise.resolve(res);
    })
    .then(res => res.json())
    .then(parseVelovData)
    .catch(err => {
        console.log('Erreur pendant le chargement de la page');
        console.error(err);
    });
