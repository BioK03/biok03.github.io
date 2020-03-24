const TEMPLATES = {
    STATION_POPUP: station => {
        let bikes = '';

        for(let i = 0; i < station.available_bikes; i++) {
            bikes += `<img src='images/velov-busy.png'/>`;
        }
        for(let i = 0; i < station.available_bike_stands; i++) {
            bikes += `<img src='images/velov-free.png'/>`;
        }

        return `<div>
            <img class='stationBikeImg' src='images/stations/${station.number}.jpg'/>
            ${station.name}<br/>
            <span class='spanBike'>
                ${bikes}
            </span><br/>
            <span class="spanBikeIndicator">(${station.available_bikes}/${(station.available_bike_stands + station.available_bikes)})<span><br/>
            <a href='#' onclick='UTILS.getArrondStats(${station.number})'>Statistiques du quartier '${UTILS.getArrondByCode(Math.floor(station.number / 1000)).name}'</a>
        </div>`;
    },
    ARRONDISSEMENT_POPUP: arrondissement => {
        const ARR_STATS = {
            arr_nbStations: arrondissement.stations.length,
            
            arr_nbStationsPleines: arrondissement.stations.filter(st => st.available_bike_stands === 0).length,
            arr_nbStationsVides: arrondissement.stations.filter(st => st.available_bikes === 0).length,
            arr_nbStationsFermees: arrondissement.stations.filter(st => st.status !== 'OPEN').length,
            arr_nbStationsBonus: arrondissement.stations.filter(st => !!st.bonus).length,
    
            arr_nbVelos: arrondissement.stations.map(st => st.available_bikes).reduce(UTILS.addReducer),
            arr_nbEmplacements: arrondissement.stations.map(st => st.bike_stands).reduce(UTILS.addReducer),
            arr_nbEmplacementsVides: arrondissement.stations.map(st => st.available_bike_stands).reduce(UTILS.addReducer),
            arr_nbEmplacementsEnPanne: arrondissement.stations.map(st => st.bike_stands - (st.available_bike_stands + st.available_bikes)).reduce(UTILS.addReducer),
    
            arr_nbEmplacementsParStation: 0,
            arr_nbVelosParStation: 0,
        };
        
        ARR_STATS.arr_nbEmplacementsParStation = Math.floor( (ARR_STATS.arr_nbEmplacements / ARR_STATS.arr_nbStations) * 10 ) / 10;
        ARR_STATS.arr_nbVelosParStation = Math.floor( (ARR_STATS.arr_nbVelos / ARR_STATS.arr_nbStations) * 10 ) / 10;
        
        let result = `<img src='images/analysePopup/velovstation2.png'/>
            ${ARR_STATS.arr_nbStations} stations
            ${(ARR_STATS.arr_nbStations > STATS.nbStations / ARRONDISSEMENTS.length) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/>
            
            <img src='images/analysePopup/stationPleine.png'/>
            ${ARR_STATS.arr_nbStationsPleines} station(s) pleine(s) - ${Math.floor((ARR_STATS.arr_nbStationsPleines / ARR_STATS.arr_nbStations)*100)}% des stations
            ${((ARR_STATS.arr_nbStationsPleines / ARR_STATS.arr_nbStations) > (STATS.nbStationsPleines / STATS.nbStations)) ? INDICATORS.BADUP : INDICATORS.GREATDOWN}<br/>
            
            <img src='images/analysePopup/stationVide.png'/>
            ${ARR_STATS.arr_nbStationsVides} station(s) vide(s) - ${Math.floor((ARR_STATS.arr_nbStationsVides / ARR_STATS.arr_nbStations)*100)}% des stations
            ${((ARR_STATS.arr_nbStationsVides / ARR_STATS.arr_nbStations) > (STATS.nbStationsVides / STATS.nbStations)) ? INDICATORS.BADUP : INDICATORS.GREATDOWN}<br/>
            
            <img src='images/analysePopup/stationBonus.png'/>
            ${ARR_STATS.arr_nbStationsBonus} station(s) bonus ${Math.floor((ARR_STATS.arr_nbStationsBonus / ARR_STATS.arr_nbStations)*100)}% des stations
            ${((ARR_STATS.arr_nbStationsBonus / ARR_STATS.arr_nbStations) > (STATS.nbStationsBonus / STATS.nbStations)) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/><br/>
            
            <img src='images/analysePopup/velov.png'/>
            ${ARR_STATS.arr_nbVelos} vélos disponibles - ${Math.floor((ARR_STATS.arr_nbVelos / ARR_STATS.arr_nbEmplacements)*100)}% des emplacements
            ${((ARR_STATS.arr_nbVelos / ARR_STATS.arr_nbEmplacements) > (STATS.nbVelos / STATS.nbEmplacementsTotal)) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/>
            
            <img src='images/analysePopup/emplacementLibre.png'/>
            ${ARR_STATS.arr_nbEmplacementsVides} emplacements vides - ${Math.floor((ARR_STATS.arr_nbEmplacementsVides / ARR_STATS.arr_nbEmplacements)*100)}% des emplacements
            ${((ARR_STATS.arr_nbEmplacementsVides / ARR_STATS.arr_nbEmplacements) > STATS.nbEmplacementsDispos / STATS.nbEmplacementsTotal) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/>
            
            <img src='images/analysePopup/tousEmplacements.png'/> ${ARR_STATS.arr_nbEmplacements} emplacements au total
            ${(ARR_STATS.arr_nbEmplacements > STATS.nbEmplacementsTotal / ARRONDISSEMENTS.length) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/>
            
            <img src='images/analysePopup/velovstation.png'/> ${ARR_STATS.arr_nbEmplacementsParStation} emplacements par station
            ${(ARR_STATS.arr_nbEmplacementsParStation > STATS.nbEmplacementsTotal / STATS.nbStations) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/>
            
            <img src='images/analysePopup/velovstation.png'/> ${ARR_STATS.arr_nbVelosParStation} vélos par station
            ${(ARR_STATS.arr_nbVelosParStation > STATS.nbVelos / STATS.nbStations) ? INDICATORS.GREATUP : INDICATORS.BADDOWN}<br/><br/>
            
            <img src='images/analysePopup/NWstation.png'/>
            ${ARR_STATS.arr_nbStationsFermees} stations fermées - ${Math.floor((ARR_STATS.arr_nbStationsFermees / ARR_STATS.arr_nbStations)*100)}% des stations
            ${((ARR_STATS.arr_nbStationsFermees / ARR_STATS.arr_nbStations) > (STATS.nbStationsFermees / STATS.nbStations)) ? INDICATORS.BADUP : INDICATORS.GREATDOWN}<br/>
    
            <img src='images/analysePopup/NWvelov.png'/>
            ${ARR_STATS.arr_nbEmplacementsEnPanne} emplacements en panne - ${Math.floor((ARR_STATS.arr_nbEmplacementsEnPanne / ARR_STATS.arr_nbEmplacements)*100)}% des emplacements
            ${((ARR_STATS.arr_nbEmplacementsEnPanne / ARR_STATS.arr_nbEmplacements) > (STATS.nbEmplacementsEnPanne / STATS.nbEmplacementsTotal)) ? INDICATORS.BADUP : INDICATORS.GREATDOWN}<br/>`;
        
        return `<div class='popupContentLeaflet'><h3>${arrondissement.name}</h3>${result}</div>`;
    },
    LEAFLET_CONTROLS: `<a id="leafletCenter" href="#" title="Center"><i class="material-icons">fullscreen</i></a>
    <a id="leafletLegend" href="#" data-toggle="tooltip" data-placement="right" data-original-title="
        <h3>Légende</h3>
        <span><img src=\'images/tirets.png\'/> Arrondissement</span><br/>
        <span><img src=\'images/vert.png\'/> Station ouverte</span><br/>
        <span><img src=\'images/rouge.png\'/> Station fermée</span><br/>
        <span><img src=\'images/jaune.png\'/> Station pleine</span><br/>
        <span><img src=\'images/orange.png\'/> Station vide</span>
        "><i class="fa fa-info" aria-hidden="true"></i>
    </a>`
};

const ARRONDISSEMENTS = [
    {
        code: 0,
        name: 'Infrastructure JC Decaux',
        geoPoints: [
            [45.780225, 4.904592],
            [45.780275, 4.905550],
            [45.780801, 4.905440],
            [45.780711, 4.904506]
        ],
        stations: [],
        polygon: null
    },

	{
        code: 1,
        name: 'Lyon - 1 er',
        geoPoints:[
			[45.76773, 4.82756],
            [45.76702, 4.81790],
            [45.7709, 4.81299],
            [45.77445, 4.83311],
            [45.77308, 4.83974],
            [45.76356, 4.83987],
            [45.76476, 4.83053]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 2,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 3,
        name: 'Lyon - 3 ème',
        geoPoints:[
			[45.74964, 4.85955],
            [45.75681, 4.83869],
            [45.76356, 4.83987],
            [45.76374, 4.86987],
            [45.75493, 4.87583],
            [45.7527, 4.89912],
            [45.73926, 4.89208]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 4,
        name: 'Lyon - 4 ème',
        geoPoints:[
			[45.77445, 4.83311],
            [45.7709, 4.81299],
            [45.77719, 4.80887],
            [45.78877, 4.81779],
            [45.78183, 4.83329],
            [45.77886, 4.84299],
            [45.77308, 4.83974]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 5,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 6,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 7,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 8,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 9,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 10,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 11,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 12,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 13,
        name: 'Décines-Charpieu',
        geoPoints: [
            [45.809268, 4.966834],
            [45.77159, 4.93546],
            [45.76207, 4.93744],
            [45.74435, 4.9328],
            [45.754003, 4.985542],
            [45.784178, 4.983998],
            [45.774361, 4.948807],
            [45.783932, 4.975243],
            [45.805842, 4.979534]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 14,
        name: 'Bron',
        geoPoints: [
            [45.726113, 4.886807],
            [45.73926, 4.89208],
            [45.7527, 4.89912],
            [45.74846, 4.91772],
            [45.74435, 4.9328],
            [45.725824, 4.936570],
            [45.717944, 4.909705]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 15,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 16,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 17,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 18,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 19,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 20,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 21,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 22,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 23,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 24,
        name: 'Ecully',
        geoPoints: [
            [45.78756, 4.78446],
            [45.78647, 4.79124],
            [45.77595, 4.79398],
            [45.765049, 4.771393],
            [45.773371, 4.747703],
            [45.790535, 4.752106],
            [45.800888, 4.770173]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 25,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 26,
        name: 'Saint-Didier-au-Mont-d\'Or',
        geoPoints: [
            [45.789441, 4.807587],
            [45.791745, 4.796322],
            [45.800485, 4.797342],
            [45.806169, 4.782879],
            [45.814426, 4.781506],
            [45.830516, 4.787686],
            [45.842296, 4.785969],
            [45.842678, 4.793122],
            [45.816841, 4.810202],
            [45.815226, 4.805996],
            [45.802842, 4.810116],
            [45.798672, 4.819797],

        ],
        stations: [],
        polygon: null
    },
    {
        code: 27,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 28,
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
        ],
        stations: [],
        polygon: null
    },    
    {
        code: 30,
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
        ],
        stations: [],
        polygon: null
    },
    {
        code: 32,
        name: 'Couzon-au-Mont-d\'Or',
        geoPoints: [
            [45.856490, 4.818441],
            [45.853830, 4.836379],
            [45.839624, 4.831960],
            [45.843335, 4.806340],
            [45.849639, 4.806425],
            [45.855139, 4.812819]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 33,
        name: 'Albigny-sur-Saône',
        geoPoints: [
            [45.866499, 4.836443],
            [45.878421, 4.836572],
            [45.873135, 4.825007],
            [45.856490, 4.818441],
            [45.853830, 4.836379]
        ],
        stations: [],
        polygon: null
    },
    {
        code: 34,
        name: 'Neuville-sur-Saône',
        geoPoints: [
            [45.866499, 4.836443],
            [45.878421, 4.836572],
            [45.884456, 4.814427],
            [45.898554, 4.864381],
            [45.885113, 4.866097],
            [45.883619, 4.850133],
            [45.866469, 4.850648]
        ],
        stations: [],
        polygon: null
    }
];

const map = L.map('map').setView([45.759723, 4.842223], 12);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: 'OpenData by <a href="https://developer.jcdecaux.com/#/home" target="_blank">JCDecaux</a>.Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let markers = [];

const INDICATORS = {
    GREATUP: '<i class="text-success material-icons" title="Supérieur à la moyenne">arrow_drop_up</i>',
    BADUP: '<i class="text-danger material-icons" title="Supérieur à la moyenne">arrow_drop_up</i>',
    GREATDOWN: '<i class="text-success material-icons" title="Inférieur à la moyenne">arrow_drop_down</i>',
    BADDOWN: '<i class="text-danger material-icons" title="Inférieur à la moyenne">arrow_drop_down</i>'
};

const UTILS = {
    getLocation: () => {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                L.marker([position.coords.latitude, position.coords.longitude], {
                    icon: L.icon({
                        iconUrl: 'images/geolocation.png',
                        iconSize: [15, 15],
                        iconAnchor: [8, 8]
                    })
                }).addTo(map);
                
                let markerSelected = null;
                let distance = Math.Infinity;
                
                markers.forEach(marker => {
                    let tempDistance = UTILS.distanceBetweenGPS(position.coords.latitude, position.coords.longitude, marker._latlng.lat, marker._latlng.lng);
                    if(tempDistance < distance) {
                        distance = tempDistance;
                        markerSelected = marker;
                    }
                });
                
                if(markerSelected !== null) {
                    markerSelected.openPopup();
                }
            });
        }
    },
    validateLocationSearch: () => {
        $val = $('#location').val();
        markers.filter(marker => marker.options.keyword === $val).forEach(marker => {
            map.panTo(marker._latlng);
            marker.openPopup();
            $('#location').val('');
        });
        return false;
    },
    getArrondByCode: code => {
        if(!!ARRONDISSEMENTS.filter(arr => arr.code === code)[0]) {
            return ARRONDISSEMENTS.filter(arr => arr.code === code)[0];
        }
        console.error('Unknown arrond with code ' + code);
        return {
            code: -1,
            name: 'Unknown',
            geoPoints: [],
            stations: [],
            polygon: null
        };
    },
    getArrondStats: numStation => UTILS.getArrondByCode(Math.floor(numStation / 1000)).polygon.openPopup(),

    convertToRad: input => (Math.PI * input)/180,
    distanceBetweenGPS: (lat_a_degre, lon_a_degre, lat_b_degre, lon_b_degre) => {
        const R = 6378000, lat_a = UTILS.convertToRad(lat_a_degre), lat_b = UTILS.convertToRad(lat_b_degre);
         
        return R * (Math.PI/2 - Math.asin( Math.sin(lat_b) * Math.sin(lat_a) + Math.cos(UTILS.convertToRad(lon_b_degre) - UTILS.convertToRad(lon_a_degre)) 
            * Math.cos(lat_b) * Math.cos(lat_a)))
    },

    addReducer: (accumulator, val) => accumulator + val
};

const STATS = {
    nbStations: 0,
    nbVelos: 0,
    nbEmplacementsDispos: 0,
    nbEmplacementsTotal: 0,
    nbStationsVides: 0,
    nbStationsPleines: 0,
    nbEmplacementsEnPanne: 0,
    nbStationsFermees: 0,
    nbStationsBonus: 0
};

const parseVelovData = velovData => {
    STATS.nbStations = velovData.length;

    STATS.nbVelos = velovData.map(st => st.available_bikes).reduce(UTILS.addReducer);
    STATS.nbEmplacementsDispos = velovData.map(st => st.available_bike_stands).reduce(UTILS.addReducer);
    STATS.nbEmplacementsTotal = velovData.map(st => st.bike_stands).reduce(UTILS.addReducer);

    STATS.nbStationsVides = velovData.filter(st => st.available_bikes === 0).length;
    STATS.nbStationsPleines = velovData.filter(st => st.available_bike_stands === 0).length;

    STATS.nbEmplacementsEnPanne = velovData.map(st => st.bike_stands - (st.available_bike_stands + st.available_bikes)).reduce(UTILS.addReducer);
    STATS.nbStationsFermees = velovData.filter(st => st.status !== 'OPEN').length;
    STATS.nbStationsBonus = velovData.filter(st => !!st.bonus).length;

    velovData.forEach(station => {

        var imagePointer = '';
        if(station.status !== 'OPEN') {
            imagePointer = 'images/rouge.png';
        }
        else if(station.available_bikes == 0) {
            imagePointer = 'images/orange.png';
        }
        else if(station.available_bike_stands == 0) {
            imagePointer = 'images/jaune.png';
        }
        else {
            imagePointer = 'images/vert.png';
        }
		
		let currentMarker = L.marker([station.position.lat, station.position.lng], {
            icon: L.icon({
                iconUrl: imagePointer,
                iconSize: [15, 15],
                iconAnchor: [8, 8],
                popupAnchor: [0, -8]
            }),
			keyword: station.name.substring(station.name.split(" ")[0].length + 3, station.name.length).replace("'", "`")
        }).bindPopup( L.popup({ maxWidth: 1920 }).setContent(TEMPLATES.STATION_POPUP(station)) ).addTo(map);
		
		$('#stations').append(`<option value='${station.name.substring(station.name.split(" ")[0].length+3, station.name.length).replace("'", "`")}'/>`);

        markers.push(currentMarker);
        UTILS.getArrondByCode(Math.floor(station.number / 1000)).stations.push(station);
    });

    $('#nbStations').html(STATS.nbStations + ' stations');
    $('#nbVelos').html(`${STATS.nbVelos} vélos disponibles<br/><i>${(Math.floor((STATS.nbVelos / STATS.nbEmplacementsTotal) * 1000)) / 10} % des emplacements)</i>`);
    $('#nbEmplacementsDisponibles').html(`${STATS.nbEmplacementsDispos} emplacements libres<br/>
        <i>${(Math.floor((STATS.nbEmplacementsDispos / STATS.nbEmplacementsTotal) * 1000)) / 10} % des emplacements)</i>`);
    $('#nbStationsPleines').html(`${STATS.nbStationsPleines} stations pleines<br/>
        <i>${(Math.floor((STATS.nbStationsPleines / STATS.nbStations) * 1000)) / 10} % des stations)</i>`);
    $('#nbStationsVides').html(`${STATS.nbStationsVides} stations vides<br/>
        <i>${(Math.floor((STATS.nbStationsVides / STATS.nbStations) * 1000)) / 10} % des stations)</i>`);
    $('#nbEmplacementsEnPanne').html(`${STATS.nbEmplacementsEnPanne} emplacements en pannes<br/>
        <i>${(Math.floor((STATS.nbEmplacementsEnPanne / STATS.nbEmplacementsTotal) * 1000)) / 10} % des emplacements)</i>`);
    $('#nbEmplacementsTotal').html(STATS.nbEmplacementsTotal + ' emplacements');
    $('#nbEmplacementsParStation').html((Math.floor((STATS.nbEmplacementsTotal / STATS.nbStations) * 10)) / 10 + " emplacements par station en moyenne");
    $('#nbStationsFermees').html(`${STATS.nbStationsFermees} stations fermées<br/>
        <i>${(Math.floor((STATS.nbStationsFermees / STATS.nbStations) * 1000)) / 10} % des stations)</i>`);
    $('#nbStationsBonus').html(`${STATS.nbStationsBonus} stations bonus<br/>
        <i>${(Math.floor((STATS.nbStationsBonus / STATS.nbStations) * 1000)) / 10} % des stations)</i>`);

    $('.leaflet-bar').append(TEMPLATES.LEAFLET_CONTROLS);
	
	(() => $('[data-toggle="tooltip"]').tooltip({ animation: true, html: true, delay: { show: 300, hide: 300 } }))();
    $('#leafletCenter').click(() => map.setView(L.latLng(45.759723, 4.842223), 13));
	
	ARRONDISSEMENTS.forEach(arr => {
		arr.polygon = L.polygon(arr.geoPoints.map(pt => L.latLng(pt[0], pt[1])), {
				color: '#E11F26',
				weight: 4,
				fillColor: '#E11F26',
				fillOpacity: 0.05,
				dashArray: '5, 5'
			})
			.bindPopup(TEMPLATES.ARRONDISSEMENT_POPUP(arr))
			.addTo(map);
	});
	UTILS.getLocation();
}

(() => {
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
})();
