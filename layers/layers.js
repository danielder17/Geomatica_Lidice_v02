ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-76.611787, 0.489660, -54.909588, 20.070071]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Vene_Parroquias_3 = new ol.format.GeoJSON();
var features_Vene_Parroquias_3 = format_Vene_Parroquias_3.readFeatures(json_Vene_Parroquias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Vene_Parroquias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vene_Parroquias_3.addFeatures(features_Vene_Parroquias_3);
var lyr_Vene_Parroquias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vene_Parroquias_3, 
                style: style_Vene_Parroquias_3,
                interactive: true,
                title: '<img src="styles/legend/Vene_Parroquias_3.png" /> Vene_Parroquias'
            });
var format_Vene_Carto_Social_v01_4 = new ol.format.GeoJSON();
var features_Vene_Carto_Social_v01_4 = format_Vene_Carto_Social_v01_4.readFeatures(json_Vene_Carto_Social_v01_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Vene_Carto_Social_v01_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vene_Carto_Social_v01_4.addFeatures(features_Vene_Carto_Social_v01_4);
var lyr_Vene_Carto_Social_v01_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vene_Carto_Social_v01_4, 
                style: style_Vene_Carto_Social_v01_4,
                interactive: true,
    title: 'Vene_Carto_Social_v01<br />\
    <img src="styles/legend/Vene_Carto_Social_v01_4_0.png" /> Bases de Misiones<br />\
    <img src="styles/legend/Vene_Carto_Social_v01_4_1.png" /> Comuna<br />\
    <img src="styles/legend/Vene_Carto_Social_v01_4_2.png" /> Consejo Comunal<br />\
    <img src="styles/legend/Vene_Carto_Social_v01_4_3.png" /> Organización sectorial<br />\
    <img src="styles/legend/Vene_Carto_Social_v01_4_4.png" /> Sistema de agregación comunal<br />\
    <img src="styles/legend/Vene_Carto_Social_v01_4_5.png" /> Somos Venezuela<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_Vene_Parroquias_3.setVisible(true);lyr_Vene_Carto_Social_v01_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_ESRISatellite_2,lyr_Vene_Parroquias_3,lyr_Vene_Carto_Social_v01_4];
lyr_Vene_Parroquias_3.set('fieldAliases', {'ID': 'ID', 'COD_ESTADO': 'COD_ESTADO', 'ESTADO': 'ESTADO', 'CAP_ESTADO': 'CAP_ESTADO', 'COD_MUNIC': 'COD_MUNIC', 'CI_MUNICI': 'CI_MUNICI', 'MUNICIPIO': 'MUNICIPIO', 'CAP_MUNIC': 'CAP_MUNIC', 'COD_PARROQ': 'COD_PARROQ', 'CI_PARROQ': 'CI_PARROQ', 'PARROQUIA': 'PARROQUIA', 'CAP_PARROQ': 'CAP_PARROQ', 'NOTA': 'NOTA', 'Hectareas': 'Hectareas', });
lyr_Vene_Carto_Social_v01_4.set('fieldAliases', {'nombre_rel': 'nombre_rel', 'cedula': 'cedula', 'telefono': 'telefono', 'correo': 'correo', 'codigo_de_': 'codigo_de_', 'estado': 'estado', 'codigo_d_1': 'codigo_d_1', 'municipio': 'municipio', 'codigo_d_2': 'codigo_d_2', 'parroquia': 'parroquia', 'institucio': 'institucio', 'sector_ciu': 'sector_ciu', 'nudo_criti': 'nudo_criti', 'nudo_cri_1': 'nudo_cri_1', 'nudo_cri_2': 'nudo_cri_2', 'poten1': 'poten1', 'poten2': 'poten2', 'poten3': 'poten3', 'Proyecto1': 'Proyecto1', 'descripcio': 'descripcio', 'responsabl': 'responsabl', 'descripc_1': 'descripc_1', 'responsa_1': 'responsa_1', 'descripc_2': 'descripc_2', 'responsa_2': 'responsa_2', 'ente1': 'ente1', 'ente2': 'ente2', 'ente3': 'ente3', 'sector2': 'sector2', 'frente2': 'frente2', 'area2': 'area2', 'sector1': 'sector1', 'frente1': 'frente1', 'area1': 'area1', 'sector3': 'sector3', 'frente3': 'frente3', 'area3': 'area3', 'Vene_Parro': 'Vene_Parro', 'Vene_Par_1': 'Vene_Par_1', 'Vene_Par_2': 'Vene_Par_2', 'Vene_Par_3': 'Vene_Par_3', 'Vene_Par_4': 'Vene_Par_4', 'Vene_Par_5': 'Vene_Par_5', 'Vene_Par_6': 'Vene_Par_6', 'Vene_Par_7': 'Vene_Par_7', 'Vene_Par_8': 'Vene_Par_8', 'Vene_Par_9': 'Vene_Par_9', 'Vene_Par10': 'Vene_Par10', 'Vene_Par11': 'Vene_Par11', 'Vene_Par12': 'Vene_Par12', 'Vene_Par13': 'Vene_Par13', 'Vene_Par14': 'Vene_Par14', });
lyr_Vene_Parroquias_3.set('fieldImages', {'ID': 'TextEdit', 'COD_ESTADO': 'TextEdit', 'ESTADO': 'TextEdit', 'CAP_ESTADO': 'TextEdit', 'COD_MUNIC': 'TextEdit', 'CI_MUNICI': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CAP_MUNIC': 'TextEdit', 'COD_PARROQ': 'TextEdit', 'CI_PARROQ': 'TextEdit', 'PARROQUIA': 'TextEdit', 'CAP_PARROQ': 'TextEdit', 'NOTA': 'TextEdit', 'Hectareas': 'TextEdit', });
lyr_Vene_Carto_Social_v01_4.set('fieldImages', {'nombre_rel': 'TextEdit', 'cedula': 'TextEdit', 'telefono': 'TextEdit', 'correo': 'TextEdit', 'codigo_de_': 'TextEdit', 'estado': 'TextEdit', 'codigo_d_1': 'TextEdit', 'municipio': 'TextEdit', 'codigo_d_2': 'TextEdit', 'parroquia': 'TextEdit', 'institucio': 'TextEdit', 'sector_ciu': 'TextEdit', 'nudo_criti': 'TextEdit', 'nudo_cri_1': 'TextEdit', 'nudo_cri_2': 'TextEdit', 'poten1': 'TextEdit', 'poten2': 'TextEdit', 'poten3': 'TextEdit', 'Proyecto1': 'TextEdit', 'descripcio': 'TextEdit', 'responsabl': 'TextEdit', 'descripc_1': 'TextEdit', 'responsa_1': 'TextEdit', 'descripc_2': 'TextEdit', 'responsa_2': 'TextEdit', 'ente1': 'TextEdit', 'ente2': 'TextEdit', 'ente3': 'TextEdit', 'sector2': 'TextEdit', 'frente2': 'TextEdit', 'area2': 'TextEdit', 'sector1': 'TextEdit', 'frente1': 'TextEdit', 'area1': 'TextEdit', 'sector3': 'TextEdit', 'frente3': 'TextEdit', 'area3': 'TextEdit', 'Vene_Parro': 'TextEdit', 'Vene_Par_1': 'TextEdit', 'Vene_Par_2': 'TextEdit', 'Vene_Par_3': 'TextEdit', 'Vene_Par_4': 'TextEdit', 'Vene_Par_5': 'TextEdit', 'Vene_Par_6': 'TextEdit', 'Vene_Par_7': 'TextEdit', 'Vene_Par_8': 'TextEdit', 'Vene_Par_9': 'TextEdit', 'Vene_Par10': 'TextEdit', 'Vene_Par11': 'TextEdit', 'Vene_Par12': 'TextEdit', 'Vene_Par13': 'TextEdit', 'Vene_Par14': 'TextEdit', });
lyr_Vene_Parroquias_3.set('fieldLabels', {'ID': 'no label', 'COD_ESTADO': 'no label', 'ESTADO': 'no label', 'CAP_ESTADO': 'no label', 'COD_MUNIC': 'no label', 'CI_MUNICI': 'no label', 'MUNICIPIO': 'no label', 'CAP_MUNIC': 'no label', 'COD_PARROQ': 'no label', 'CI_PARROQ': 'no label', 'PARROQUIA': 'no label', 'CAP_PARROQ': 'no label', 'NOTA': 'no label', 'Hectareas': 'no label', });
lyr_Vene_Carto_Social_v01_4.set('fieldLabels', {'nombre_rel': 'no label', 'cedula': 'no label', 'telefono': 'no label', 'correo': 'no label', 'codigo_de_': 'no label', 'estado': 'no label', 'codigo_d_1': 'no label', 'municipio': 'no label', 'codigo_d_2': 'no label', 'parroquia': 'no label', 'institucio': 'header label', 'sector_ciu': 'no label', 'nudo_criti': 'no label', 'nudo_cri_1': 'no label', 'nudo_cri_2': 'no label', 'poten1': 'no label', 'poten2': 'no label', 'poten3': 'no label', 'Proyecto1': 'no label', 'descripcio': 'no label', 'responsabl': 'no label', 'descripc_1': 'no label', 'responsa_1': 'no label', 'descripc_2': 'no label', 'responsa_2': 'no label', 'ente1': 'no label', 'ente2': 'no label', 'ente3': 'no label', 'sector2': 'no label', 'frente2': 'no label', 'area2': 'no label', 'sector1': 'no label', 'frente1': 'no label', 'area1': 'no label', 'sector3': 'no label', 'frente3': 'no label', 'area3': 'no label', 'Vene_Parro': 'no label', 'Vene_Par_1': 'no label', 'Vene_Par_2': 'no label', 'Vene_Par_3': 'no label', 'Vene_Par_4': 'no label', 'Vene_Par_5': 'no label', 'Vene_Par_6': 'no label', 'Vene_Par_7': 'no label', 'Vene_Par_8': 'no label', 'Vene_Par_9': 'no label', 'Vene_Par10': 'no label', 'Vene_Par11': 'no label', 'Vene_Par12': 'no label', 'Vene_Par13': 'no label', 'Vene_Par14': 'no label', });
lyr_Vene_Carto_Social_v01_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});