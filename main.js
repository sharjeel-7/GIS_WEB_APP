window.onload = init;
function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [8732223.519, 1971774.4888],
      zoom: 3, 
      maxZoom: 16,
      minZoom: 2,
      
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map',
    keyboardEventTarget: document
  })

  var OSM = new ol.Layer.OSM("OpenStreetMap");
 /*loading the overlays from GeoServer.web_map is the workspace name. Loading the layer as a WMS*/
   var const_tech = new ol.Layer.WMS(
         "const_tech/wms",
         "http://localhost:8080/geoserver/const_tech/wms",
         {layers:"const_tech:const_tech",transparent: true, format: "image/gif"},
         {visibility: true},
         {'displayInLayerSwitcher':true}
      );
      /*adding the data to the map object*/ 

map.addLayers([OSM,const_tech,]);
}


