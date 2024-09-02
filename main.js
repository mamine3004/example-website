window.onload = init;
function init(){

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    var Stadia = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    var map = L.map('mapid',{
        center:[32, -7], 
        zoom:5,
        minZoom:4,
        layers:[osm]
    });

    const baseLayers = {
        "<b>Open Street Map</b>": osm,
        "<b>Stadia</b>": Stadia,
    };
    
    var controlLayers = L.control.layers(baseLayers, {},{}).addTo(map);

    map.on('resize',function(e){
        console.log('The map has been resized')
    })

    // map.on('resize',function(e){
    //     map.flyTo([32,-7])
    // })

    // map.eachLayer(function(layer){
    //     layer.bindPopup('Hello');
    // });
    // console.log(map.getPanes())
    // var map = L.map('mapid').setView([51.505, -0.09], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);


}