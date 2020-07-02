const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

//Generación de mapa
let myMap = L.map('myMap').setView([51.505, -0.09], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18,

}).addTo(myMap)

let marker = L.marker([51.505, -0.09]).addTo(myMap)

let marker2 = L.marker([51.51, -0.09]).addTo(myMap)

//Agregar íconos

// let iconMarker = L.icon({
//     iconurl: 'marker.png',
//     iconSize: [60, 60],
//     iconAnchor: [30, 60]

// })

//Deshabilitar el zoom al hacer doble click
myMap.doubleClickZoom.disable()

//Generación de marcador
myMap.on('dblclick', e =>{
    let latLong = myMap.mouseEventToLatLng(e.originalEvent)
    console.log(latLong)
    L.marker([latLong.lat, latLong.lng]).addTo(myMap)
})

//Obtener geolocalización
navigator.geolocation.getCurrentPosition(
    (pos)=> {
        const {coords } = pos
        console.log(coords)
        L.marker([coords.latitude, coords.longitude]).addTo(myMap)
    },
    (err) => {
        console.log(err)
    },
    //Parámetros adicionales para la obteción de coordenadas
    {
        enableHighAccuracy:true,
        tiout: 5000,
        maximumAge:0
    }

)



//Importación Geojson

let geojson_url = "https://babel.webreactiva.com/labs/arboles_singulares_en_espacios_naturales.geojson"

//Extramarkers

let treeMarker = L.ExtraMarkers.icon({
    icon: 'fa-leaf',
    markerColor: 'green',
    shape: 'square',
    prefix: 'fa'
})


fetch(
    geojson_url
).then(
    res=> res.json()
).then(
    data => {
        let geojsonlayer = L.geoJson(data, {
            onEachFeature: function(feature, layer){
                layer.bindPopup(feature.properties['arbol_nombre'])
                layer.setIcon(treeMarker)
            }
        }).addTo(myMap)
        myMap.fitBounds(geojsonlayer.getBounds())
    }
)

//Mapa para el selector

let map = L.map('mapS').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

document.getElementById("select-location").addEventListener('change', function(e){
    //Obtención de coordendas
    console.log(e.target.value.split(","));
    //Almacenamiento en variable
    let coords = e.target.value.split(",");
    //Función de colocación en el mapa
    map.flyTo(coords, 18);

})