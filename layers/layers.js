var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZipCodeBoundary_2 = new ol.format.GeoJSON();
var features_ZipCodeBoundary_2 = format_ZipCodeBoundary_2.readFeatures(json_ZipCodeBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipCodeBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZipCodeBoundary_2.addFeatures(features_ZipCodeBoundary_2);
var lyr_ZipCodeBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZipCodeBoundary_2, 
                style: style_ZipCodeBoundary_2,
                popuplayertitle: 'Zip Code Boundary',
                interactive: true,
                title: '<img src="styles/legend/ZipCodeBoundary_2.png" /> Zip Code Boundary'
            });
var format_ZipCodesWithTransmissionsLines_3 = new ol.format.GeoJSON();
var features_ZipCodesWithTransmissionsLines_3 = format_ZipCodesWithTransmissionsLines_3.readFeatures(json_ZipCodesWithTransmissionsLines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipCodesWithTransmissionsLines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZipCodesWithTransmissionsLines_3.addFeatures(features_ZipCodesWithTransmissionsLines_3);
var lyr_ZipCodesWithTransmissionsLines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZipCodesWithTransmissionsLines_3, 
                style: style_ZipCodesWithTransmissionsLines_3,
                popuplayertitle: 'Zip Codes With Transmissions Lines',
                interactive: true,
                title: '<img src="styles/legend/ZipCodesWithTransmissionsLines_3.png" /> Zip Codes With Transmissions Lines'
            });
var format_ZipCodesWithoutTransmissionsLines_4 = new ol.format.GeoJSON();
var features_ZipCodesWithoutTransmissionsLines_4 = format_ZipCodesWithoutTransmissionsLines_4.readFeatures(json_ZipCodesWithoutTransmissionsLines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipCodesWithoutTransmissionsLines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZipCodesWithoutTransmissionsLines_4.addFeatures(features_ZipCodesWithoutTransmissionsLines_4);
var lyr_ZipCodesWithoutTransmissionsLines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZipCodesWithoutTransmissionsLines_4, 
                style: style_ZipCodesWithoutTransmissionsLines_4,
                popuplayertitle: 'Zip Codes Without Transmissions Lines',
                interactive: true,
                title: '<img src="styles/legend/ZipCodesWithoutTransmissionsLines_4.png" /> Zip Codes Without Transmissions Lines'
            });
var format_ElectricalTransmissionLinesVoltageClass_5 = new ol.format.GeoJSON();
var features_ElectricalTransmissionLinesVoltageClass_5 = format_ElectricalTransmissionLinesVoltageClass_5.readFeatures(json_ElectricalTransmissionLinesVoltageClass_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricalTransmissionLinesVoltageClass_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricalTransmissionLinesVoltageClass_5.addFeatures(features_ElectricalTransmissionLinesVoltageClass_5);
var lyr_ElectricalTransmissionLinesVoltageClass_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectricalTransmissionLinesVoltageClass_5, 
                style: style_ElectricalTransmissionLinesVoltageClass_5,
                popuplayertitle: 'Electrical Transmission Lines (Voltage Class)',
                interactive: true,
    title: 'Electrical Transmission Lines (Voltage Class)<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_0.png" /> DC<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_1.png" /> Under 100kV<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_2.png" /> 100kV - 161kV<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_3.png" /> 220kV - 287kV<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_4.png" /> 345kV<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_5.png" /> 500kV<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_6.png" /> 735 and Above<br />\
    <img src="styles/legend/ElectricalTransmissionLinesVoltageClass_5_7.png" /> Not Available<br />'
        });
var format_Generators_6 = new ol.format.GeoJSON();
var features_Generators_6 = format_Generators_6.readFeatures(json_Generators_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Generators_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Generators_6.addFeatures(features_Generators_6);
var lyr_Generators_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Generators_6, 
                style: style_Generators_6,
                popuplayertitle: 'Generators',
                interactive: true,
                title: '<img src="styles/legend/Generators_6.png" /> Generators'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ZipCodeBoundary_2.setVisible(true);lyr_ZipCodesWithTransmissionsLines_3.setVisible(true);lyr_ZipCodesWithoutTransmissionsLines_4.setVisible(true);lyr_ElectricalTransmissionLinesVoltageClass_5.setVisible(true);lyr_Generators_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_ZipCodeBoundary_2,lyr_ZipCodesWithTransmissionsLines_3,lyr_ZipCodesWithoutTransmissionsLines_4,lyr_ElectricalTransmissionLinesVoltageClass_5,lyr_Generators_6];
lyr_ZipCodeBoundary_2.set('fieldAliases', {'ZipCode': 'ZipCode', 'N_Ge_FID_Z': 'N_Ge_FID_Z', 'Nea_Dist_Z': 'Nea_Dist_Z', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZipCodesWithTransmissionsLines_3.set('fieldAliases', {'ZipCode': 'ZipCode', 'N_Ge_FID_Z': 'N_Ge_FID_Z', 'Nea_Dist_Z': 'Nea_Dist_Z', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZipCodesWithoutTransmissionsLines_4.set('fieldAliases', {'ZipCode': 'ZipCode', 'N_Ge_FID_Z': 'N_Ge_FID_Z', 'Nea_Dist_Z': 'Nea_Dist_Z', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ElectricalTransmissionLinesVoltageClass_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ID': 'ID', 'NAICS_CODE': 'NAICS_CODE', 'OWNER': 'OWNER', 'VOLTAGE': 'VOLTAGE', 'VOLT_CLASS': 'VOLT_CLASS', 'INFERRED': 'INFERRED', });
lyr_Generators_6.set('fieldAliases', {'Name': 'Name', });
lyr_ZipCodeBoundary_2.set('fieldImages', {'ZipCode': 'TextEdit', 'N_Ge_FID_Z': 'TextEdit', 'Nea_Dist_Z': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZipCodesWithTransmissionsLines_3.set('fieldImages', {'ZipCode': 'TextEdit', 'N_Ge_FID_Z': 'TextEdit', 'Nea_Dist_Z': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZipCodesWithoutTransmissionsLines_4.set('fieldImages', {'ZipCode': 'TextEdit', 'N_Ge_FID_Z': 'TextEdit', 'Nea_Dist_Z': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ElectricalTransmissionLinesVoltageClass_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ID': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'OWNER': 'TextEdit', 'VOLTAGE': 'TextEdit', 'VOLT_CLASS': 'TextEdit', 'INFERRED': 'TextEdit', });
lyr_Generators_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_ZipCodeBoundary_2.set('fieldLabels', {'ZipCode': 'inline label - always visible', 'N_Ge_FID_Z': 'no label', 'Nea_Dist_Z': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ZipCodesWithTransmissionsLines_3.set('fieldLabels', {'ZipCode': 'inline label - always visible', 'N_Ge_FID_Z': 'no label', 'Nea_Dist_Z': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ZipCodesWithoutTransmissionsLines_4.set('fieldLabels', {'ZipCode': 'inline label - always visible', 'N_Ge_FID_Z': 'no label', 'Nea_Dist_Z': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ElectricalTransmissionLinesVoltageClass_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'ID': 'inline label - always visible', 'NAICS_CODE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'VOLTAGE': 'inline label - always visible', 'VOLT_CLASS': 'inline label - always visible', 'INFERRED': 'inline label - always visible', });
lyr_Generators_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Generators_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});