
$("#analyse").slideUp(1);
$("#infos").slideUp(1);
$("#results").slideUp(1);

$("#analyseLink").click(function(){
    $("#infos").slideUp();
	$("#results").slideUp();
	
    $("#analyse").slideDown();
	
    declareEvents();
});

$("#infosLink").click(function(){
    $("#analyse").slideUp();
	$("#results").slideUp();
	
    $("#infos").slideDown();
	
    declareEvents();
});

$("#resultsLink").click(function(){
    $("#analyse").slideUp();
	$("#infos").slideUp();
	
    $("#results").slideDown();
	
	declareEvents();
	setTimeout(function(){
		loadCharts();
	}, 500);
	
});

$("#mapLink").click(function(){
    $("#analyse").slideUp();
    $("#infos").slideUp();
	$("#results").slideUp();
});

function declareEvents(){
    $(".close").unbind('click').click(function(){
        $("#analyse").slideUp();
        $("#infos").slideUp();
		$("#results").slideUp();
    });
	
	setTimeout(function(){
		$("#qlik").unbind('click').click(function(){
			if($(this).html().includes("Afficher")){
				$(".imgopt").css("display", "block");
				$(this).html('<span id="qlik"><img src="images/qlik.png"/> Masquer les aperçus Qlik Sense</span>');
			}else{
				$(".imgopt").css("display", "none");
				$(this).html('<span id="qlik"><img src="images/qlik.png"/> Afficher les aperçus Qlik Sense</span>');
			}
		});
	}, 500);	
	
}

var chartAttributes = {
	"chartkpi01-1": {
		type: 'bar',
		data: {
			labels: ["2022 - Place Carnot", "7022 - Jaurès / Lagrange", "10006 - Charpennes (FAR)", "4024 - Lyon Métropole", "7030 - Quartie Général Frère", "7003 - Gambetta / Garibaldi (FAR)", "3036 - Félix Faure / Vivier Merle"],
			datasets: [{
				label: 'Stations au plus fort taux d\'occupation',
				data: [22.8, 22.5, 20.3, 20.3, 20, 18.6, 18.2],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Stations au plus fort taux d'occupation"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi01-2": {
		type: 'bar',
		data: {
			labels: ["7ème", "2ème", "9ème", "3ème", "8ème", "Villeurbanne", "6ème", "5ème", "Caluire-et-Cuire", "1er", "4ème", "Vaulx-en-Velin"],
			datasets: [{
				label: 'Arrondissements au plus fort taux d\'occupation',
				data: [11.4, 10.5, 9.9, 9.8, 9.6, 9.5, 8.4, 7.6, 7.3, 7, 6.1, 3.2],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Arrondissements au plus fort taux d'occupation"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi02-1": {
		type: 'bar',
		data: {
			labels: ["9052 - Balmont", "9050 - Allée de l'Europe", "9051 - Andrei Sakharov", "4005 - Place Bertone", "8003 - Claude Bernard Lyon 1", "4009 - Jacquard / Denfert-Rochereau", "8059 - Laennec / Pinel", "10013 - Cusset", "4041 - Boussanges / Austerlitz"],
			datasets: [{
				label: 'Stations au plus faible taux d\'occupation',
				data: [0.6, 0.6, 1, 1.6, 1.8, 1.9, 2, 2.2, 2.4],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Stations au plus faible taux d'occupation"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi02-2": {
		type: 'bar',
		data: {
			labels: ["Vaulx-en-Velin", "4ème", "1er", "Caluire-et-Cuire", "5ème", "6ème", "Villeurbanne", "8ème", "3ème", "9ème", "2ème", "7ème"],
			datasets: [{
				label: 'Arrondissements au plus faible taux d\'occupation',
				data: [3.2, 6.1, 7, 7.3, 7.6, 8.4, 9.5, 9.6, 9.8, 9.9, 10.5, 11.4],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Arrondissements au plus faible taux d'occupation"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi03-1": {
		type: 'line',
		data: {
			labels: ["09_10_2016", "10_10_2016", "11_10_2016", "12_10_2016", "13_10_2016", "14_10_2016", "15_10_2016", "16_10_2016", "17_10_2016", "18_10_2016", "19_10_2016", "20_10_2016", "21_10_2016"],
			datasets: [{
				label: 'Nombre de stations apparaissant vides dans la journée',
				fill: false,
				data: [145, 236, 241, 247, 143, 167, 228, 168, 204, 234, 222, 229, 159],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de stations apparaissant vides dans la journée"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi04-1": {
		type: 'line',
		data: {
			labels: ["09_10_2016", "10_10_2016", "11_10_2016", "12_10_2016", "13_10_2016", "14_10_2016", "15_10_2016", "16_10_2016", "17_10_2016", "18_10_2016", "19_10_2016", "20_10_2016", "21_10_2016"],
			datasets: [{
				label: 'Nombre de stations apparaissant pleines dans la journée',
				fill: false,
				data: [143, 234, 240, 231, 178, 194, 208, 210, 240, 241, 235, 233, 200],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de stations apparaissant pleines dans la journée"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi05": {
		type: 'line',
		data: {
			labels: ["0h", "0h30", "1h", "1h30", "2h", "2h30", "3h", "3h30", "4h", "4h30", "5h", "5h30", "6h", "6h30", "7h", "7h30", "8h", "8h30", "9h", "9h30", "10h", "10h30", "11h", "11h30", "12h", "12h30", "13h", "13h30", "14h", "14h30", "15h", "15h30", "16h", "16h30", "17h", "17h30", "18h", "18h30", "19h", "19h30", "20h", "20h30", "21h", "21h30", "22h", "22h30", "23h", "23h30"],
			datasets: [{
				label: 'Vélos disponibles',
				fill: false,
				data: [3940, 3910, 3950, 3970, 3990, 4050, 3910, 3940, 4000, 4080, 4050, 4010, 4010, 3980, 3810, 3590, 3890, 3540, 3800, 3800, 3920, 3470, 3500, 3610, 3610, 3630, 3650, 3590, 3710, 3670, 3480, 3460, 3540, 3540, 3370, 3320, 3250, 3040, 3170, 3280, 3460, 3530, 3690, 3920, 3950, 3960, 4010, 3870],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de vélos / portiques en panne en moyenne dans la semaine"
			}
		}
	},
	"chartkpi06": {
		type: 'line',
		data: {
			labels: ["0h", "0h30", "1h", "1h30", "2h", "2h30", "3h", "3h30", "4h", "4h30", "5h", "5h30", "6h", "6h30", "7h", "7h30", "8h", "8h30", "9h", "9h30", "10h", "10h30", "11h", "11h30", "12h", "12h30", "13h", "13h30", "14h", "14h30", "15h", "15h30", "16h", "16h30", "17h", "17h30", "18h", "18h30", "19h", "19h30", "20h", "20h30", "21h", "21h30", "22h", "22h30", "23h", "23h30"],
			datasets: [{
				label: 'Vélos utilisés',
				fill: false,
				data: [3800, 3790, 3790, 3770, 3750, 3780, 3670, 3670, 3750, 3750, 3720, 3690, 3670, 3670, 3720, 4010, 4300, 4180, 4010, 3960, 3980, 3630, 3670, 3990, 4220, 4190, 4090, 4110, 4100, 4040, 3940, 4050, 4200, 4320, 4310, 4410, 4360, 3990, 3950, 3830, 3830, 3710, 3730, 3910, 3960, 3900, 3900, 3740],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de vélos / portiques en panne en moyenne dans la semaine"
			}
		}
	},
	"chartkpi07-1": {
		type: 'bar',
		data: {
			labels: ["11°C", "12°C", "13°C", "14°C", "20°C", "25°C", "26°C", "27°C", "28°C", "30°C", "31°C"],
			datasets: [{
				label: 'Utilisation',
				data: [4110, 3330, 4500, 4550, 5740, 2520, 5420, 3900, 7110, 2020, 6650],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Utilisation moyenne à 13h en fonction de la température"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi07-2": {
		type: 'bar',
		data: {
			labels: ["Partiellement couvert", "Nuages éparses", "Dégagé", "Couvert"],
			datasets: [{
				label: 'Utilisation',
				data: [4550, 6750, 2640, 2290],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Utilisation moyenne à 13h en fonction de la météo"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi08-1": {
		type: 'pie',
		data: {
			labels: ["6043 - Cité Internationale - Cinéma", "7006 - Gerland", "40014 - Gare L.Bonnevay", "3091 - Hôpital Neurologique", "10002 - Insa (FAR)", "10056 - 11 Novembre / Gaston Berger", "3001 - Part-Dieu / Vivier Merle (FAR)", "9033 - Gorge de Loup", "3038 - Vivier Merle / Paul Bert", "5030 - Charcot / Résidence Universitaire"],
			datasets: [{
				label: 'Utilisation',
				data: [11.4, 11, 10.3, 10.2, 9.9, 9.7, 9.6, 9.4, 9.3, 9.2],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Stations les plus utilisées tous temps confondus"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi08-2": {
		type: 'pie',
		data: {
			labels: ["6043 - Cité Internationale - Cinéma", "7006 - Gerland", "10014 - Gare L.Bonnevay", "3091 - Hôpital Neurologique", "10002 - Insa (FAR)", "3001 - Part-Dieu / Vivier Merle (FAR)", "10056 - 11 Novembre / Gaston Berger", "3038 - Vivier Merle / Paul Bert", "9033 - Gorge de Loup", "3010 - Part-Dieu / Cuirassiers (FAR)"],
			datasets: [{
				label: 'Utilisation',
				data: [11.1, 11, 10.1, 10, 9.9, 9.8, 9.7, 9.6, 9.5, 9.3],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Stations les plus utilisées par temps clair"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi08-3": {
		type: 'pie',
		data: {
			labels: ["5030 - Charcot / Résidence Universitaire", "1022 - Place Tolozan (FAR)", "9033 - Gorge de Loup", "3091 - Hôpital Neurologique", "6043 - Cité Internationale - Cinéma", "10014 - Gare L.Bonnevay", "10063 - Perrin / Jean Jaurès", "7006 - Gerland", "4004 - Hénon", "5001 - Place Varillon (Funiculaire Saint-Just)"],
			datasets: [{
				label: 'Utilisation',
				data: [12.4, 10.5, 10.5, 10.3, 10.2, 10.2, 9.6, 8.8, 8.8, 8.6],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Stations les plus utilisées par temps couvert"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi08-4": {
		type: 'pie',
		data: {
			labels: ["1022 - Place Tolozan (FAR)", "6043 - Cité Internationale - Cinéma", "10014 - Gare L.Bonnevay", "3091 - Hôpital Neurologique", "5030 - Charcot / Résidence Universitaire", "10112 - Place de la Reconnaissance", "10063 - Perrin / Jean Jaurès", "7006 - Gerland", "10054 - Stalingrad / Meliès", "4004 - Hénon"],
			datasets: [{
				label: 'Utilisation',
				data: [12.1, 11.5, 10.9, 10.7, 10.6, 10.4, 9.5, 8.2, 8.1, 8],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Stations les plus utilisées par temps 'Nuages éparses'"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi09": {
		type: 'line',
		data: {
			labels: ["03_10_2016", "09_10_2016", "10_10_2016", "11_10_2016", "12_10_2016", "13_10_2016", "14_10_2016", "15_10_2016", "16_10_2016", "17_10_2016", "18_10_2016", "19_10_2016", "20_10_2016", "21_10_2016"],
			datasets: [{
				label: 'Portiques en panne',
				fill: false,
				data: [10.45, 31.62, 71.18, 105.31, 89.47, 62.43, 66, 71.29, 77.46, 64.93, 77.56, 82.08, 69.88, 32.13],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de vélos / portiques en panne en moyenne"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi10": {
		type: 'pie',
		data: {
			labels: ["1016 - Pêcherie", "7003 - Gambetta / Garibaldi (FAR)", "3079 - Place Louise", "2038 - Remparts D'ainay", "3003 - Part-Dieu / Deruelle (FAR)", "7018 - Lycée Louise Fabre", "4009 - Jacquard / Denfert-Rochereau", "7024 - Bancel - Chevreul", "3038 - Vivier Merle / Paul Bert", "1006 - Subsistances"],
			datasets: [{
				label: 'Portiques en panne',
				data: [17, 3.5, 2.1, 2.1, 2.1, 2, 1.8, 1.7, 1.6, 1.5],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Les stations qui ont le plus de vélos en panne durant une semaine"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi11": {
		type: 'pie',
		data: {
			labels: ["1016 - Pêcherie", "4022 - Place de la Croix-Rousse", "9052 - Balmont", "4041 - Boussanges / Austerlitz", "1036 - Aveyron", "9050 - Allée de l'Europe", "4005 - Place Bertone", "4002 - Mairie du 4 ème", "9051 - Andrei Sakharov", "4017 - Place des tapis"],
			datasets: [{
				label: '% du temps vide',
				data: [100, 69.8, 66.4, 61.1, 60.5, 59.9, 57.7, 56.6, 56.5, 51.1],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Les stations les plus vides"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi12": {
		type: 'pie',
		data: {
			labels: ["10092 - Montgolfier / Château Gaillard", "10073 - Institut d'art contemporain", "9003 - Place Valmy", "9022 - Rue Masaryc / Saint Cyr", "10064 - 4 Aout 1789", "10018 - Tolstoï / Florian", "10047 - Lherminier / Pressensé", "3039 - Place Bir-Hakeim", "2028 - Sainte-Blandine", "6011 - Mairie du 6 ème"],
			datasets: [{
				label: '% du temps pleine',
				data: [36.2, 32.4, 29.1, 29.1, 28.8, 27.7, 27.1, 26.7, 26.7, 26.3],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 1.0)', 'rgba(50, 50, 50, 0.9)', 'rgba(50, 50, 50, 0.8)', 'rgba(50, 50, 50, 0.7)', 'rgba(50, 50, 50, 0.6)', 'rgba(50, 50, 50, 0.5)', 'rgba(50, 50, 50, 0.4)', 'rgba(50, 50, 50, 0.3)', 'rgba(50, 50, 50, 0.2)']
			}]
		},
		
		options: {
			legend: {
				position: "right"
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Les stations les plus pleines"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi13-1": {
		type: 'line',
		data: {
			labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
			datasets: [{
				label: 'Vélos disponibles en moyenne',
				fill: false,
				data: [4380, 4530, 4560, 4160, 3090, 2040, 3450],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Vélos disponibles selon le jour de la semaine"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi13-2": {
		type: 'line',
		data: {
			labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
			datasets: [{
				label: 'Vélos disponibles en moyenne',
				fill: false,
				data: [4530, 4760, 4790, 4320, 3370, 2190, 3440],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Vélos disponibles selon le jour de la semaine, de 20h à 5h"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi13-3": {
		type: 'line',
		data: {
			labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
			datasets: [{
				label: 'Vélos disponibles en moyenne',
				fill: false,
				data: [4290, 4390, 4420, 4060, 2920, 1960, 3450],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Vélos disponibles selon la semaine, de 5h à 20h"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi14": {
		type: 'line',
		data: {
			labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
			datasets: [{
				label: 'Vélos disponibles en moyenne',
				fill: false,
				data: [4290, 4390, 4420, 4060, 2920, 1960, 3450],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Vélos disponibles selon la semaine"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi15": {
		type: 'bar',
		data: {
			labels: ["1er", "2ème", "3ème", "4ème", "5ème", "6ème", "7ème", "8ème", "9ème", "Caluire-et-Cuire", "Vaulx-en-Velin", "Villeurbanne"],
			datasets: [{
				label: 'Nombre de stations par habitant',
				data: [0.00061, 0.00104, 0.00321, 0.00055, 0.00049, 0.00056, 0.00051, 0.00042, 0.00047, 0.00007, 0.00005, 0.00049],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de station par habitant selon l'arrondissement"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi16": {
		type: 'bar',
		data: {
			labels: ["1er", "2ème", "3ème", "4ème", "5ème", "6ème", "7ème", "8ème", "9ème", "Caluire-et-Cuire", "Vaulx-en-Velin", "Villeurbanne"],
			datasets: [{
				label: 'Nombre de vélos disponibles par habitant',
				data: [0.00328, 0.01117, 0.03278, 0.00314, 0.00351, 0.00455, 0.00566, 0.00377, 0.00468, 0.00045, 0.00019, 0.00453],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Nombre de vélos disponibles par habitant selon l'arrondissement"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi17-1": {
		type: 'bar',
		data: {
			labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14" ,"15", "16", "17", "18", "19", "20", "21", "22", "23"],
			datasets: [{
				label: 'Pourcentage moyen de vélos disponible par heure',
				data: [50, 50, 51, 51, 51, 51, 51, 48, 46, 48, 49, 47, 46, 46, 47, 46, 45, 43, 42, 45, 48, 49, 49, 50],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Pourcentage moyen de vélos disponible par heure"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi17-2": {
		type: 'doughnut',
		data: {
			labels: ["Pourcentage moyen de vélos disponible par heure", ""],
			datasets: [{
				label: 'Pourcentage moyen de vélos disponible par heure',
				data: [48, 52],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 0.0)']
			}]
		},
		options: {
			animation: {
				onProgress: drawDoughnutValues,
				onComplete: drawDoughnutValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Pourcentage moyen de vélos disponible par heure"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi18-1": {
		type: 'bar',
		data: {
			labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14" ,"15", "16", "17", "18", "19", "20", "21", "22", "23"],
			datasets: [{
				label: 'Moyenne du nombre de places disponibles par heure',
				data: [48, 48, 48, 48, 47, 47, 47, 50, 52, 50, 50, 51, 53, 52, 52, 53, 54, 56, 56, 54, 51, 49, 49, 49],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Moyenne du nombre de places disponibles par heure"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi18-2": {
		type: 'doughnut',
		data: {
			labels: ["Pourcentage moyen du nombre de places disponibles par heure", ""],
			datasets: [{
				label: 'Pourcentage moyen du nombre de places disponibles par heure',
				data: [51, 49],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 0.0)']
			}]
		},
		options: {
			animation: {
				onProgress: drawDoughnutValues,
				onComplete: drawDoughnutValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Pourcentage moyen du nombre de places disponibles par heure"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi21-1": {
		type: 'bar',
		data: {
			labels: ["9051 - Andrei Sakharov", "9052 - Balmont", "9050 - Allée de l'Europe", "5044 - Champvert", "5045 - Valdo / Rivet", "5054 - Champvert", "5036 - La Salette", "10119 - Villeurbanne Saint-Jean", "4042 - Grégory Coupet", "5002 - Place des compagnons de la chanson", "5050 - Théâtre Romain", "5001 - Place Varillon (Funiculaire Saint-Just)"],
			datasets: [{
				label: 'Durée moyenne pendant laquelle une station est restée vide',
				data: [192.4, 188.25, 127.44, 104, 63.25, 49.25, 43.21, 33.94, 33.39, 32.54, 29.77, 27.76],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Durée moyenne pendant laquelle une station est restée vide"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi21-2": {
		type: 'doughnut',
		data: {
			labels: ["Durée moyenne pendant laquelle une station est restée vide (heures)", ""],
			datasets: [{
				label: 'Durée moyenne pendant laquelle une station est restée vide',
				data: [7.4, 16.6],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 0.0)']
			}]
		},
		options: {
			animation: {
				onProgress: drawDoughnutValues,
				onComplete: drawDoughnutValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Durée moyenne pendant laquelle une station est restée vide (heures)"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi22-1": {
		type: 'bar',
		data: {
			labels: ["5054 - Champvert", "3024 - Rockfeller / Esquirol", "10092 - Montgolfier / Château Gaillard", "10049 - Pressensé", "9041 - Carret / Sédallian", "5047 - Albéric Pont", "8057 - Vienne / Montagny", "10016 - Place de la Paix", "9044 - Masset / Saint Pierre de Vaise", "3013 - Place Antoinette", "9040 - Place Rhodiaceta", "10030 - Greuze"],
			datasets: [{
				label: 'Durée moyenne pendant laquelle une station est restée pleine (heures)',
				data: [110.38, 61, 37.78, 28.17, 24.8, 20.9, 20.1, 19.75, 19.69, 19.62, 19.5, 18.88],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Durée moyenne pendant laquelle une station est restée pleine"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi22-2": {
		type: 'doughnut',
		data: {
			labels: ["Durée moyenne pendant laquelle une station est restée pleine (heures)", ""],
			datasets: [{
				label: 'Durée moyenne pendant laquelle une station est restée pleine',
				data: [5.49, 18.51],
				backgroundColor: ['rgb(225,31,38)', 'rgba(50, 50, 50, 0.0)']
			}]
		},
		options: {
			animation: {
				onProgress: drawDoughnutValues,
				onComplete: drawDoughnutValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Durée moyenne pendant laquelle une station est restée pleine"
			},
			scales: {
				gridLines: {
					options: {
						display: false
					}
				}
			}
		}
	},
	"chartkpi23-1": {
		type: 'bar',
		data: {
			labels: ["5°C", "6°C", "7°C", "8°C", "9°C", "10°C", "11°C", "12°C", "13°C", "14°C", "15°C", "16°C", "17°C", "18°C", "19°C", "20°C", "21°C", "22°C", "23°C", "24°C", "25°C", "26°C", "27°C", "28°C", "29°C", "30°C", "31°C", "32°C", "33°C", "34°C", "35°C"],
			datasets: [{
				label: 'Taux d\'utilisation en fonction de la température',
				data: [0.521, 0.485, 0.518, 0.5, 0.506, 0.489, 0.472, 0.425, 0.389, 0.478, 0.464, 0.488, 0.496, 0.521, 0.514, 0.49, 0.511, 0.495, 0.475, 0.492, 0.495, 0.473, 0.44, 0.433, 0.432, 0.459, 0.44, 0.421, 0.409, 0.396, 0.382],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			animation: {
				onProgress: drawBarValues,
				onComplete: drawBarValues
			},
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Taux d'utilisation en fonction de la température"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
	"chartkpi24-1": {
		type: 'bar',
		data: {
			labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "80", "81", "82", "83", "85", "86", "87", "88", "92", "93", "94"],
			datasets: [{
				label: 'Taux d\'utilisation en fonction de l\'humidité',
				data: [0.432, 0.355, 0.412, 0.382, 0.461, 0.397, 0.408, 0.444, 0.407, 0.434, 0.419, 0.423, 0.441, 0.418, 0.432, 0.455, 0.441, 0.411, 0.433, 0.481, 0.446, 0.453, 0.447, 0.45, 0.503, 0.433, 0.482, 0.461, 0.477, 0.516, 0.464, 0.5, 0.516, 0.474, 0.447, 0.497, 0.433, 0.487, 0.493, 0.503, 0.487, 0.473, 0.52, 0.492, 0.466, 0.451, 0.508, 0.494, 0.506, 0.454, 0.512, 0.498, 0.514, 0.486, 0.512, 0.492, 0.502, 0.515, 0.502, 0.493, 0.519, 0.53, 0.5, 0.488, 0.51, 0.524, 0.487, 0.523, 0.502, 0.513, 0.443, 0.496, 0.501],
				backgroundColor: 'rgb(225,31,38)'
			}]
		},
		options: {
			maintainAspectRatio: false,
			title: {
				display: true,
				text: "Taux d'utiliation en fonction de l'humidité"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	},
};

function loadCharts(){
	for (chart in chartAttributes){
		new Chart(document.getElementById(chart), chartAttributes[chart]);
	}
}

function drawBarValues()
{
  // render the value of the chart above the bar
  var ctx = this.chart.ctx;
  ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
  ctx.fillStyle = this.chart.config.options.defaultFontColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  this.data.datasets.forEach(function (dataset) {
    for (var i = 0; i < dataset.data.length; i++) {
      if(dataset.hidden === true && dataset._meta[Object.keys(dataset._meta)[0]].hidden !== false){ continue; }
      var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
      if(dataset.data[i] !== null){
        ctx.fillText(dataset.data[i], model.x - 1, model.y - 5);
      }
    }
  });
}

function drawDoughnutValues()
{
  // render the value of the chart above the bar
  var ctx = this.chart.ctx;
  ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
  ctx.fillStyle = this.chart.config.options.defaultFontColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  this.data.datasets.forEach(function (dataset) {
    for (var i = 0; i < 1; i++) {
      if(dataset.hidden === true && dataset._meta[Object.keys(dataset._meta)[0]].hidden !== false){ continue; }
      var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
      if(dataset.data[i] !== null){
        ctx.fillText(dataset.data[i], model.x - 1, model.y - 5);
      }
    }
  });
}