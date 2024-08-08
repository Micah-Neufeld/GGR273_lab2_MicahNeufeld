ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-1236444.461472, 5434803.930788, 2070303.436684, 6635801.956752]);
var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> Alberta Boundary'
            });
var format_water_clipped_1 = new ol.format.GeoJSON();
var features_water_clipped_1 = format_water_clipped_1.readFeatures(json_water_clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_water_clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_clipped_1.addFeatures(features_water_clipped_1);
var lyr_water_clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_clipped_1, 
                style: style_water_clipped_1,
                popuplayertitle: "water_clipped",
                interactive: false,
                title: '<img src="styles/legend/water_clipped_1.png" /> water_clipped'
            });
var format_FishStocking2024_2 = new ol.format.GeoJSON();
var features_FishStocking2024_2 = format_FishStocking2024_2.readFeatures(json_FishStocking2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStocking2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStocking2024_2.addFeatures(features_FishStocking2024_2);
var lyr_FishStocking2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStocking2024_2, 
                style: style_FishStocking2024_2,
                popuplayertitle: "Fish Stocking (2024)",
                interactive: true,
    title: 'Fish Stocking (2024)<br />\
    <img src="styles/legend/FishStocking2024_2_0.png" /> 0 - 2175<br />\
    <img src="styles/legend/FishStocking2024_2_1.png" /> 2175 - 5600<br />\
    <img src="styles/legend/FishStocking2024_2_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/FishStocking2024_2_3.png" /> 11500 - 20000<br />\
    <img src="styles/legend/FishStocking2024_2_4.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStocking2024_2_5.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStocking2024_2_6.png" /> 110000 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_water_clipped_1.setVisible(true);lyr_FishStocking2024_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_water_clipped_1,lyr_FishStocking2024_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_water_clipped_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStocking2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Species': 'Species', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'NewFieldNa': 'NewFieldNa', 'NewField_1': 'NewField_1', 'Map Author': 'Map Author', 'Map Auth_1': 'Map Auth_1', 'Map Auth_2': 'Map Auth_2', 'Map Auth_3': 'Map Auth_3', 'Map Auth_4': 'Map Auth_4', 'Map Auth_5': 'Map Auth_5', 'Map Auth_6': 'Map Auth_6', 'Map_Author': 'Map_Author', 'Map_Auth_1': 'Map_Auth_1', 'Map_Auth_2': 'Map_Auth_2', 'Map_Auth_3': 'Map_Auth_3', 'Map_Auth_4': 'Map_Auth_4', 'MA1': 'MA1', 'MA1_1': 'MA1_1', 'NumStock': 'NumStock', 'Map Auth_7': 'Map Auth_7', 'Map Auth_8': 'Map Auth_8', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': '', 'DGUID': '', 'PRNAME': '', 'PRENAME': '', 'PRFNAME': '', 'PREABBR': '', 'PRFABBR': '', 'LANDAREA': '', });
lyr_water_clipped_1.set('fieldImages', {'HYDROUID': '', 'NAME': '', 'RANK': '', 'PRUID': '', });
lyr_FishStocking2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Species': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'NewFieldNa': 'TextEdit', 'NewField_1': 'TextEdit', 'Map Author': 'TextEdit', 'Map Auth_1': 'TextEdit', 'Map Auth_2': 'TextEdit', 'Map Auth_3': 'TextEdit', 'Map Auth_4': 'TextEdit', 'Map Auth_5': 'TextEdit', 'Map Auth_6': 'TextEdit', 'Map_Author': 'TextEdit', 'Map_Auth_1': 'TextEdit', 'Map_Auth_2': 'TextEdit', 'Map_Auth_3': 'TextEdit', 'Map_Auth_4': 'TextEdit', 'MA1': 'TextEdit', 'MA1_1': 'TextEdit', 'NumStock': 'Range', 'Map Auth_7': '', 'Map Auth_8': '', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_water_clipped_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStocking2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Species': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'NewFieldNa': 'no label', 'NewField_1': 'no label', 'Map Author': 'header label - always visible', 'Map Auth_1': 'hidden field', 'Map Auth_2': 'hidden field', 'Map Auth_3': 'hidden field', 'Map Auth_4': 'hidden field', 'Map Auth_5': 'hidden field', 'Map Auth_6': 'hidden field', 'Map_Author': 'hidden field', 'Map_Auth_1': 'hidden field', 'Map_Auth_2': 'hidden field', 'Map_Auth_3': 'hidden field', 'Map_Auth_4': 'hidden field', 'MA1': 'hidden field', 'MA1_1': 'hidden field', 'NumStock': 'inline label - always visible', 'Map Auth_7': 'hidden field', 'Map Auth_8': 'hidden field', });
lyr_FishStocking2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});