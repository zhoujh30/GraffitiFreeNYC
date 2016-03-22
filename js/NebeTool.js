var map = L.map('NebeToolMap',{layer:[poverty, unemployment, popualationGrowth, income, education, obese, travelTime, wage, jobGrowth, establishmentGrowth, rent, smallBusiness]}).setView([40.7471983, -73.9983273], 11);

//Linked to Basemap via Mapbox 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'nycedcmisgis.ndh346pj',
    accessToken: 'pk.eyJ1IjoibnljZWRjbWlzZ2lzIiwiYSI6ImViWWc2bXMifQ.tQLdsPcTjM1Db66vk8YoPA',

}).addTo(map);

//Define breaks with different colors
function getPovColor(d) {
	return d === 0? '#969696':
    d <= 8.6 ? '#eff3ff':
	d <= 16.3 ? '#bdd7e7':
	d <= 24.7 ? '#6baed6':
	d <= 36.1 ? '#3182bd' :
	'#08519c';
}
function getUnempColor(d) {
	return d === 0? '#969696':
    d <= 7.5 ? '#edf8e9':
	d <= 10.7 ? '#bae4b3':
	d <= 14.8 ? '#74c476':
	d <= 22.5 ? '#31a354' :
	'#006d2c';
}
function getPopGrowColor(d) {
	return d === 0? '#969696':
    d <= -0.572572 ? '#f2f0f7':
	d <= 0.053781 ? '#cbc9e2':
	d <= 0.317850 ? '#9e9ac8':
	d <= 1.521633 ? '#756bb1' :
	'#54278f';
}    
function getIncomeColor(d) {
	return d === 0? '#969696':
    d <= 27481 ? '#eff3ff':
	d <= 50799 ? '#bdd7e7':
	d <= 72909 ? '#6baed6':
	d <= 101634 ? '#3182bd' :
	'#08519c';
}
function getEducationColor(d) {
	return d === 0? '#969696':
    d <= 18.9 ? '#feedde':
	d <= 36.5 ? '#fdbe85':
	d <= 47.5 ? '#fd8d3c':
	d <= 59.1 ? '#e6550d' :
	'#a63603';
}  
function getObeseColor(d) {
	return d === 0? '#969696':
    d <= 10.6 ? '#f2f0f7':
	d <= 18.1 ? '#cbc9e2':
	d <= 25.7 ? '#9e9ac8':
	d <= 32.0 ? '#756bb1' :
	'#54278f';
} 
function getTravelTimeColor(d) {
	return d === 0? '#969696':
    d <= 29.0 ? '#fee5d9':
	d <= 35.7 ? '#fcae91':
	d <= 40.7 ? '#fb6a4a':
	d <= 45.1 ? '#de2d26' :
	'#a50f15';
} 
function getWageColor(d) {
	return d === 0? '#969696':
    d <= 35377.474010 ? '#edf8e9':
	d <= 47636.518050 ? '#bae4b3':
	d <= 68430.562470 ? '#74c476':
	d <= 116901.121900 ? '#31a354' :
	'#006d2c';
} 
function getJobGrowthColor(d) {
	return d === 0? '#969696':
    d <= -0.071716 ? '#fee5d9':
	d <= 0.202405 ? '#fcae91':
	d <= 0.786183 ? '#fb6a4a':
	d <= 2.183612 ? '#de2d26' :
	'#a50f15';
} 
function getEstablishmentGrowthColor(d) {
	return d === 0? '#969696':
    d <= 0.098446 ? '#feedde':
	d <= 0.340240 ? '#fdbe85':
	d <= 0.746741 ? '#fd8d3c':
	d <= 1.500000 ? '#e6550d' :
	'#a63603';
} 
function getRentColor(d) {
	return d === 0? '#969696':
    d <= 25.3 ? '#f2f0f7':
	d <= 30.7 ? '#cbc9e2':
	d <= 35.6 ? '#9e9ac8':
	d <= 41.9 ? '#756bb1' :
	'#54278f';
} 
function getSmallBusinessColor(d) {
	return d === 0? '#969696':
    d <= 0.810811 ? '#fee5d9':
	d <= 0.922360 ? '#fcae91':
	d <= 0.956376 ? '#fb6a4a':
	d <= 0.977049 ? '#de2d26' :
	'#a50f15';
}
	

function povertyStyle(feature) {
	return {
	fillColor: getPovColor(feature.properties.FIRST_TItl),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function unemploymentStyle(feature) {
	return {
	fillColor: getUnempColor(feature.properties.FIRST_TI_1),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function populationGrowthStyle(feature) {
	return {
	fillColor: getPopGrowColor(feature.properties.FIRST_TI_2),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function incomeStyle(feature) {
	return {
	fillColor: getIncomeColor(feature.properties.FIRST_TI_3),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function educationStyle(feature) {
	return {
	fillColor: getEducationColor(feature.properties.FIRST_TI_4),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function obeseStyle(feature) {
	return {
	fillColor: getObeseColor(feature.properties.FIRST_TI_5),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function travelTimeStyle(feature) {
	return {
	fillColor: getTravelTimeColor(feature.properties.FIRST_TI_6),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function wageStyle(feature) {
	return {
	fillColor: getWageColor(feature.properties.FIRST_TI_7),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function jobGrowthStyle(feature) {
	return {
	fillColor: getJobGrowthColor(feature.properties.FIRST_TI_8),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function establishmentGrowthStyle(feature) {
	return {
	fillColor: getEstablishmentGrowthColor(feature.properties.FIRST_TI_9),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function rentStyle(feature) {
	return {
	fillColor: getRentColor(feature.properties.FIRST_T_10),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
function smallBusinessStyle(feature) {
	return {
	fillColor: getSmallBusinessColor(feature.properties.SUM_BUS_FI),
	weight: .5,
	opacity: 1,
	fillOpacity: 0.7,
	color: 'white'
};
}
			
//var geojsonLayer = L.geoJson(geoJson, {style:Poverty}).addTo(map);
//
var poverty = L.geoJson(mapData, {style:povertyStyle, onEachFeature: onEachFeaturePoverty}).addTo(map);
var popualationGrowth = L.geoJson(mapData, {style:populationGrowthStyle, onEachFeature: onEachFeaturePopulation});
var unemployment = L.geoJson(mapData, {style:unemploymentStyle, onEachFeature: onEachFeatureUnemployment});
var income = L.geoJson(mapData, {style:incomeStyle, onEachFeature: onEachFeatureIncome});
var education = L.geoJson(mapData, {style:educationStyle, onEachFeature: onEachFeatureEducation});
var obese = L.geoJson(mapData, {style:obeseStyle, onEachFeature: onEachFeatureObese});
var travelTime = L.geoJson(mapData, {style:travelTimeStyle, onEachFeature: onEachFeatureTravelTime});
var wage = L.geoJson(mapData, {style:wageStyle, onEachFeature: onEachFeatureWage});
var jobGrowth = L.geoJson(mapData, {style:jobGrowthStyle, onEachFeature: onEachFeatureJobGrowth});
var establishmentGrowth = L.geoJson(mapData, {style:establishmentGrowthStyle, onEachFeature: onEachFeatureEstablishmentGrowth});
var rent = L.geoJson(mapData, {style:rentStyle, onEachFeature: onEachFeatureRent});
var smallBusiness = L.geoJson(mapData, {style:smallBusinessStyle, onEachFeature: onEachFeatureSmallBusiness});

// those layers are actually baselayers of the map, not overlayers, so changed variable name here
var baselayMaps = {
	"% People with Income below the Poverty Level": poverty,
	"Population Growth 2000-2010": popualationGrowth,
	"% Unemployed": unemployment,
    "2013 Household Income": income,
	"High School Graduate or Less": education,
	"% obese": obese,
	"Mean Travel Time to Work": travelTime,
	"Average Wage 2012": wage,
	"Job Growth 2000-2012": jobGrowth,
	"Establishment Growth 2000-2012": establishmentGrowth,
	"% of Units Paying >50% of Income in Rent": rent,
	"% of Establishments with under 50 Employees": smallBusiness

};  
    
var titleLink = L.control({position: 'bottomleft'});

titleLink.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info titleLink');
    div.innerHTML = '<h2>SPLAN Neighborhood Planning Tool</h2>' + 
'<h4>Additional information click <a href="http://www.nycedc.com">here</a>.</h4>';
    return div
};
    
titleLink.addTo(map);  
    
    
L.control.layers(baselayMaps).addTo(map);    

var legend = L.control({position: 'topleft'});

		legend.onAdd = function (map) {

			var divPoverty = L.DomUtil.create('div', 'info legend'),
				gradesPoverty = [0.0, 8.6, 16.3, 24.7, 36.1],
				labelsPoverty = [],
				from, to;

			for (var i = 0; i < gradesPoverty.length; i++) {
				from = gradesPoverty[i];
				to = gradesPoverty[i + 1];

				labelsPoverty.push(
					'<i style="background:' + getPovColor(from + 1) + '"></i> ' +
					from + (to ? '% &ndash; ' + to + '%' : '% +') );
			}

			divPoverty.innerHTML = '<h4>% People with Income below the Poverty Level</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsPoverty.join('<br>');
//            divPoverty.innerHTML = '<h4>% People with Income below the Poverty Level</h4><i style="background:#fee5d9"></i> 0 – 81.2%<br><i style="background:#fcae91"></i> 81.2 – 92.2%<br><i style="background:#fb6a4a"></i> 92.2 – 95.6%<br><i style="background:#de2d26"></i> 95.6 – 97.7%<br><i style="background:#a50f15"></i> 97.7+%';
                
			return divPoverty;
		};

		legend.addTo(map);



map.on("baselayerchange", function(eventLayer) {
	legend.getContainer().innerHTML = eventLayer.name;
	if (eventLayer.name === '% People with Income below the Poverty Level') {

				var gradesPoverty = [0.0, 8.6, 16.3, 24.7, 36.1],
					labelsPoverty = [],
					from, to;

				for (var i = 0; i < gradesPoverty.length; i++) {
					from = gradesPoverty[i];
					to = gradesPoverty[i + 1];

					labelsPoverty.push(
						'<i style="background:' + getPovColor(from + 1) + '"></i> ' +
						from + (to ? '% &ndash; ' + to + '%' : '% +') );
				}

				legend.getContainer().innerHTML =  '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsPoverty.join('<br>');	
    } 
	
	else if (eventLayer.name === 'Population Growth 2000-2010') { 
			var gradesPopulation = [-1.000, -0.573, 0.054, 0.318, 1.522],
				labelsPopulation = [],
				from, to;

			for (var i = 0; i < gradesPopulation.length; i++) {
				from = gradesPopulation[i];
				to = gradesPopulation[i + 1];

				labelsPopulation.push(
					'<i style="background:' + getPopGrowColor(from + 0.001) + '"></i> ' +
					100*from + (100*to ? '% &ndash; ' + 100*to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsPopulation.join('<br>');
    }
	else if (eventLayer.name === '2013 Household Income') { 
			var gradesIncome = [0, 27481, 50799, 72909, 101634],
				labelsIncome = [],
				from, to;

			for (var i = 0; i < gradesIncome.length; i++) {
				from = gradesIncome[i];
				to = gradesIncome[i + 1];

				labelsIncome.push(
					'<i style="background:' + getIncomeColor(from + 1) + '"></i> ' + '$' +
					addCommas(from) + addCommas((to ? ' &ndash; $' + to : ' +')) );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsIncome.join('<br>');
    }
	else if (eventLayer.name === 'High School Graduate or Less') { 
			var gradesEducation = [0, 18.9, 36.5, 47.5, 59.1],
				labelsEducation = [],
				from, to;

			for (var i = 0; i < gradesEducation.length; i++) {
				from = gradesEducation[i];
				to = gradesEducation[i + 1];

				labelsEducation.push(
					'<i style="background:' + getEducationColor(from + 1) + '"></i> ' +
					from + (to ? '% &ndash; ' + to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsEducation.join('<br>');
    }
	else if (eventLayer.name === '% obese') { 
			var gradesObese = [0, 10.6, 18.1, 25.7, 32.0],
				labelsObese = [],
				from, to;

			for (var i = 0; i < gradesObese.length; i++) {
				from = gradesObese[i];
				to = gradesObese[i + 1];

				labelsObese.push(
					'<i style="background:' + getObeseColor(from + 1) + '"></i> ' +
					from + (to ? '% &ndash; ' + to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsObese.join('<br>');
    }
	else if (eventLayer.name === '% Unemployed') { 
			var gradesUnemployment = [0, 7.5, 10.7, 14.8, 22.5],
				labelsUnemployment = [],
				from, to;

			for (var i = 0; i < gradesUnemployment.length; i++) {
				from = gradesUnemployment[i];
				to = gradesUnemployment[i + 1];

				labelsUnemployment.push(
					'<i style="background:' + getUnempColor(from + 1) + '"></i> ' +
					from + (to ? '% &ndash; ' + to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsUnemployment.join('<br>');
    }
	else if (eventLayer.name === 'Mean Travel Time to Work') { 
		    var gradesTravelTime = [0, 29.0, 35.7, 40.7, 45.1],
				labelsTravelTime = [],
				from, to;

			for (var i = 0; i < gradesTravelTime.length; i++) {
				from = gradesTravelTime[i];
				to = gradesTravelTime[i + 1];

				labelsTravelTime.push(
					'<i style="background:' + getTravelTimeColor(from + 1) + '"></i> ' +
					from + (to ? ' min &ndash; ' + to + ' min' : ' min +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsTravelTime.join('<br>');
    }
	else if (eventLayer.name === 'Average Wage 2012') { 
			var gradesWage = [0, 35377, 47637, 68431, 116901],
				labelsWage = [],
				from, to;

			for (var i = 0; i < gradesWage.length; i++) {
				from = gradesWage[i];
				to = gradesWage[i + 1];

				labelsWage.push(
					'<i style="background:' + getWageColor(from + 1) + '"></i> ' + '$' +
					addCommas(from) + addCommas((to ? ' &ndash; $' + to : ' +')) );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsWage.join('<br>');
    }
	else if (eventLayer.name === 'Job Growth 2000-2012') { 
			var gradesJobGrowth = [-1.000, -0.071, 0.203, 0.787, 2.184],
				labelsJobGrowth = [],
				from, to;

			for (var i = 0; i < gradesJobGrowth.length; i++) {
				from = gradesJobGrowth[i];
				to = gradesJobGrowth[i + 1];

				labelsJobGrowth.push(
					'<i style="background:' + getJobGrowthColor(from ) + '"></i> ' +
					100*from + (100*to ? '% &ndash; ' + 100*to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsJobGrowth.join('<br>');
    }
	else if (eventLayer.name === 'Establishment Growth 2000-2012') { 
			var gradesEstablishmentGrowth = [-0.401, 0.098, 0.340, 0.747, 1.500],
				labelsEstablishmentGrowth = [],
				from, to;

			for (var i = 0; i < gradesEstablishmentGrowth.length; i++) {
				from = gradesEstablishmentGrowth[i];
				to = gradesEstablishmentGrowth[i + 1];

				labelsEstablishmentGrowth.push(
					'<i style="background:' + getEstablishmentGrowthColor(from+0.001) + '"></i> ' +
					100*from + (100*to ? '% &ndash; ' + 100*to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsEstablishmentGrowth.join('<br>');
    }
	else if (eventLayer.name === '% of Units Paying >50% of Income in Rent') { 
			var gradesRent = [0, 25.3, 30.7, 35.6, 41.9],
				labelsRent = [],
				from, to;

			for (var i = 0; i < gradesRent.length; i++) {
				from = gradesRent[i];
				to = gradesRent[i + 1];

				labelsRent.push(
					'<i style="background:' + getRentColor(from + 1) + '"></i> ' +
					from + (to ? '% &ndash; ' + to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsRent.join('<br>');
    }
	else if (eventLayer.name === '% of Establishments with under 50 Employees') { 
			var gradesSmallBusiness = [0, 0.812, 0.922, 0.956, 0.977],
				labelsSmallBusiness = [],
				from, to;

			for (var i = 0; i < gradesSmallBusiness.length; i++) {
				from = gradesSmallBusiness[i];
				to = gradesSmallBusiness[i + 1];

				labelsSmallBusiness.push(
					'<i style="background:' + getSmallBusinessColor(from+0.001) + '"></i> ' +
					100*from + (100*to ? '% &ndash; ' + 100*to + '%' : '% +') );
			}

			legend.getContainer().innerHTML  = '<h4>' + eventLayer.name + '</h4>' + '<i style="background:' + getPovColor(0) + '"></i> ' + 'N/A' + '<br>' + labelsSmallBusiness.join('<br>');
    }
});
    
    

var info = L.control({position: 'topleft'});
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.updatePoverty();
	return this._div;
		};
info.updatePoverty = function (props) {
	this._div.innerHTML =   (props ? '<i style="background:' + getPovColor(props.FIRST_TItl) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TItl === 0 ? 'N/A' : props.FIRST_TItl.toFixed(1) + '%') 
		: '<h4>Hover over a zip code</h4>');
	};
info.updatePopulation = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getPopGrowColor(props.FIRST_TI_2) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_2 === 0 ? 'N/A' :(100*props.FIRST_TI_2).toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateUnemployment = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getUnempColor(props.FIRST_TI_1) + '"></i> ' +'<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_1 === 0 ? 'N/A' : props.FIRST_TI_1 + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateIncome = function (props) {
	this._div.innerHTML =   (props ? '<i style="background:' + getIncomeColor(props.FIRST_TI_3) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_3 === 0 ? 'N/A' : '$' + addCommas(props.FIRST_TI_3))
		: '<h4>Hover over a zip code</h4>');
	};
info.updateEducation = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getEducationColor(props.FIRST_TI_4) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_4 === 0 ? 'N/A' : props.FIRST_TI_4.toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};	
info.updateObese = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getObeseColor(props.FIRST_TI_5) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_5 === 0 ? 'N/A' : props.FIRST_TI_5.toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateTravelTime = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getTravelTimeColor(props.FIRST_TI_6) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_6 === 0 ? 'N/A' : props.FIRST_TI_6.toFixed(1) + ' min')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateWage = function (props) {
	this._div.innerHTML =   (props ? '<i style="background:' + getWageColor(props.FIRST_TI_7) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_7 === 0 ? 'N/A' : '$' + addCommas(props.FIRST_TI_7.toFixed(0)))
		: '<h4>Hover over a zip code</h4>');
	};
info.updateJobGrowth = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getJobGrowthColor(props.FIRST_TI_8) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_8 === 0 ? 'N/A' :(100*props.FIRST_TI_8).toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateEstablishmentGrowth = function (props) {
	this._div.innerHTML =   (props ? '<i style="background:' + getEstablishmentGrowthColor(props.FIRST_TI_9) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_TI_9 === 0 ? 'N/A' : (100*props.FIRST_TI_9).toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateRent = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getRentColor(props.FIRST_T_10) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.FIRST_T_10 === 0 ? 'N/A' : props.FIRST_T_10.toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.updateSmallBusiness = function (props) {
	this._div.innerHTML =  (props ? '<i style="background:' + getSmallBusinessColor(props.SUM_BUS_FI) + '"></i> ' + '<b>' + props.POSTAL + '</b><br />' + (props.SUM_BUS_FI === 0 ? 'N/A' : (100*props.SUM_BUS_FI).toFixed(1) + '%')
		: '<h4>Hover over a zip code</h4>');
	};
info.addTo(map);

function highlightFeaturePoverty(e) {
    var layer = e.target;
	
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updatePoverty(layer.feature.properties);
	
}	
function resetHighlightPoverty(e) {
    poverty.resetStyle(e.target);
	info.updatePoverty();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}	
function onEachFeaturePoverty(feature, layer) {
    layer.on({
        mouseover: highlightFeaturePoverty,
        mouseout: resetHighlightPoverty,
        click: zoomToFeature
    });
}

function highlightFeaturePopulation(e) {
    var layer = e.target;
	
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updatePopulation(layer.feature.properties);
	
}	
function resetHighlightPopulation(e) {
    popualationGrowth.resetStyle(e.target);
	info.updatePopulation();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}	
function onEachFeaturePopulation(feature, layer) {
//    layeradd: legendPopulation.onAdd,
//	layerremove:
	layer.on({
        mouseover: highlightFeaturePopulation,
        mouseout: resetHighlightPopulation,
        click: zoomToFeature
    });
}

function highlightFeatureUnemployment(e) {
    var layer = e.target;
	
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateUnemployment(layer.feature.properties);
	
}	
function resetHighlightUnemployment(e) {
    unemployment.resetStyle(e.target);
	info.updateUnemployment();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}	
function onEachFeatureUnemployment(feature, layer) {
    layer.on({
        mouseover: highlightFeatureUnemployment,
        mouseout: resetHighlightUnemployment,
        click: zoomToFeature
    });
}

function highlightFeatureIncome(e) {
    var layer = e.target;
	
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateIncome(layer.feature.properties);
	
}	
function resetHighlightIncome(e) {
    income.resetStyle(e.target);
	info.updateIncome();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}	
function onEachFeatureIncome(feature, layer) {
    layer.on({
        mouseover: highlightFeatureIncome,
        mouseout: resetHighlightIncome,
        click: zoomToFeature
    });
}

function highlightFeatureEducation(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateEducation(layer.feature.properties);
}	
function resetHighlightEducation(e) {
    education.resetStyle(e.target);
	info.updateEducation();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureEducation(feature, layer) {
    layer.on({
        mouseover: highlightFeatureEducation,
        mouseout: resetHighlightEducation,
        click: zoomToFeature
    });
}

function highlightFeatureObese(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateObese(layer.feature.properties);
}	
function resetHighlightObese(e) {
    obese.resetStyle(e.target);
	info.updateObese();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureObese(feature, layer) {
    layer.on({
        mouseover: highlightFeatureObese,
        mouseout: resetHighlightObese,
        click: zoomToFeature
    });
}
	
function highlightFeatureTravelTime(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateTravelTime(layer.feature.properties);
}	
function resetHighlightTravelTime(e) {
    travelTime.resetStyle(e.target);
	info.updateTravelTime();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureTravelTime(feature, layer) {
    layer.on({
        mouseover: highlightFeatureTravelTime,
        mouseout: resetHighlightTravelTime,
        click: zoomToFeature
    });
}
	
function highlightFeatureWage(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateWage(layer.feature.properties);
}	
function resetHighlightWage(e) {
    wage.resetStyle(e.target);
	info.updateWage();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureWage(feature, layer) {
    layer.on({
        mouseover: highlightFeatureWage,
        mouseout: resetHighlightWage,
        click: zoomToFeature
    });
}

function highlightFeatureJobGrowth(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateJobGrowth(layer.feature.properties);
}	
function resetHighlightJobGrowth(e) {
    jobGrowth.resetStyle(e.target);
	info.updateJobGrowth();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureJobGrowth(feature, layer) {
    layer.on({
        mouseover: highlightFeatureJobGrowth,
        mouseout: resetHighlightJobGrowth,
        click: zoomToFeature
    });
}

function highlightFeatureEstablishmentGrowth(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateEstablishmentGrowth(layer.feature.properties);
}	
function resetHighlightEstablishmentGrowth(e) {
    establishmentGrowth.resetStyle(e.target);
	info.updateEstablishmentGrowth();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureEstablishmentGrowth(feature, layer) {
    layer.on({
        mouseover: highlightFeatureEstablishmentGrowth,
        mouseout: resetHighlightEstablishmentGrowth,
        click: zoomToFeature
    });
}
	
function highlightFeatureRent(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateRent(layer.feature.properties);
}	
function resetHighlightRent(e) {
    rent.resetStyle(e.target);
	info.updateRent();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureRent(feature, layer) {
    layer.on({
        mouseover: highlightFeatureRent,
        mouseout: resetHighlightRent,
        click: zoomToFeature
    });
}
	
function highlightFeatureSmallBusiness(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
	info.updateSmallBusiness(layer.feature.properties);
}
function resetHighlightSmallBusiness(e) {
    smallBusiness.resetStyle(e.target);
	info.updateSmallBusiness();
}
function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
}
function onEachFeatureSmallBusiness(feature, layer) {
    layer.on({
        mouseover: highlightFeatureSmallBusiness,
        mouseout: resetHighlightSmallBusiness,
        click: zoomToFeature
    });
}