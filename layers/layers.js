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
var format_ZipCodeBoundaryNY_2 = new ol.format.GeoJSON();
var features_ZipCodeBoundaryNY_2 = format_ZipCodeBoundaryNY_2.readFeatures(json_ZipCodeBoundaryNY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipCodeBoundaryNY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZipCodeBoundaryNY_2.addFeatures(features_ZipCodeBoundaryNY_2);
var lyr_ZipCodeBoundaryNY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZipCodeBoundaryNY_2, 
                style: style_ZipCodeBoundaryNY_2,
                popuplayertitle: 'Zip Code Boundary NY',
                interactive: true,
                title: '<img src="styles/legend/ZipCodeBoundaryNY_2.png" /> Zip Code Boundary NY'
            });
var format_TransmissionLines_3 = new ol.format.GeoJSON();
var features_TransmissionLines_3 = format_TransmissionLines_3.readFeatures(json_TransmissionLines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransmissionLines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransmissionLines_3.addFeatures(features_TransmissionLines_3);
var lyr_TransmissionLines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransmissionLines_3, 
                style: style_TransmissionLines_3,
                popuplayertitle: 'Transmission Lines',
                interactive: true,
                title: '<img src="styles/legend/TransmissionLines_3.png" /> Transmission Lines'
            });
var format_Generators_4 = new ol.format.GeoJSON();
var features_Generators_4 = format_Generators_4.readFeatures(json_Generators_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Generators_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Generators_4.addFeatures(features_Generators_4);
var lyr_Generators_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Generators_4, 
                style: style_Generators_4,
                popuplayertitle: 'Generators',
                interactive: true,
                title: '<img src="styles/legend/Generators_4.png" /> Generators'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ZipCodeBoundaryNY_2.setVisible(true);lyr_TransmissionLines_3.setVisible(true);lyr_Generators_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_ZipCodeBoundaryNY_2,lyr_TransmissionLines_3,lyr_Generators_4];
lyr_ZipCodeBoundaryNY_2.set('fieldAliases', {'ZipCode': 'ZipCode', 'N_Ge_FID_Z': 'N_Ge_FID_Z', 'Nea_Dist_Z': 'Nea_Dist_Z', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TransmissionLines_3.set('fieldAliases', {'Name': 'Name', 'Total_Leng': 'Total_Leng', 'Shape_Leng': 'Shape_Leng', 'OBJECTID_1': 'OBJECTID_1', 'ID': 'ID', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'NAICS_CODE': 'NAICS_CODE', 'OWNER': 'OWNER', 'VOLTAGE': 'VOLTAGE', 'VOLT_CLASS': 'VOLT_CLASS', 'INFERRED': 'INFERRED', 'Zip_Code': 'Zip_Code', 'Gen_Name': 'Gen_Name', 'Length': 'Length', });
lyr_Generators_4.set('fieldAliases', {'Name': 'Name', 'SourceID': 'SourceID', 'SourceOID': 'SourceOID', 'PosAlong': 'PosAlong', 'SideOfEdge': 'SideOfEdge', 'CurbApproa': 'CurbApproa', 'Status': 'Status', 'SnapX': 'SnapX', 'SnapY': 'SnapY', 'SnapZ': 'SnapZ', 'DistanceTo': 'DistanceTo', 'Attr_Lengt': 'Attr_Lengt', 'Cutoff_Len': 'Cutoff_Len', });
lyr_ZipCodeBoundaryNY_2.set('fieldImages', {'ZipCode': 'TextEdit', 'N_Ge_FID_Z': 'TextEdit', 'Nea_Dist_Z': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TransmissionLines_3.set('fieldImages', {'Name': 'TextEdit', 'Total_Leng': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'ID': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'OWNER': 'TextEdit', 'VOLTAGE': 'TextEdit', 'VOLT_CLASS': 'TextEdit', 'INFERRED': 'TextEdit', 'Zip_Code': 'TextEdit', 'Gen_Name': 'TextEdit', 'Length': 'TextEdit', });
lyr_Generators_4.set('fieldImages', {'Name': 'TextEdit', 'SourceID': 'TextEdit', 'SourceOID': 'TextEdit', 'PosAlong': 'TextEdit', 'SideOfEdge': 'TextEdit', 'CurbApproa': 'TextEdit', 'Status': 'TextEdit', 'SnapX': 'TextEdit', 'SnapY': 'TextEdit', 'SnapZ': 'TextEdit', 'DistanceTo': 'TextEdit', 'Attr_Lengt': 'TextEdit', 'Cutoff_Len': 'TextEdit', });
lyr_ZipCodeBoundaryNY_2.set('fieldLabels', {'ZipCode': 'inline label - always visible', 'N_Ge_FID_Z': 'no label', 'Nea_Dist_Z': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TransmissionLines_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Total_Leng': 'no label', 'Shape_Leng': 'no label', 'OBJECTID_1': 'no label', 'ID': 'no label', 'TYPE': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'NAICS_CODE': 'inline label - always visible', 'OWNER': 'inline label - always visible', 'VOLTAGE': 'inline label - always visible', 'VOLT_CLASS': 'inline label - always visible', 'INFERRED': 'inline label - always visible', 'Zip_Code': 'inline label - always visible', 'Gen_Name': 'inline label - always visible', 'Length': 'inline label - always visible', });
lyr_Generators_4.set('fieldLabels', {'Name': 'inline label - always visible', 'SourceID': 'no label', 'SourceOID': 'no label', 'PosAlong': 'no label', 'SideOfEdge': 'no label', 'CurbApproa': 'no label', 'Status': 'no label', 'SnapX': 'no label', 'SnapY': 'no label', 'SnapZ': 'no label', 'DistanceTo': 'no label', 'Attr_Lengt': 'no label', 'Cutoff_Len': 'no label', });
lyr_Generators_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});