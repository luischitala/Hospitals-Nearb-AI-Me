        // Obtención de coordenadas
        //Gratis y en Json
        // function ipLookUp () {
        //     $.ajax('http://ip-api.com/json')
        //     .then(
        //         function success(response) {
        //             console.log('User\'s Location Data is ', response);
        //             console.log('User\'s Country', response.country);
        //         },

        //         function fail(data, status) {
        //             console.log('Request failed.  Returned status of',
        //                         status);
        //         }
        //     );
        //     }
        // ipLookUp()
                    
        // Creación de mapa
        const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        //Delimitación del área de Jalisco
        let myMap = L.map('myMap').setView([20.677041,-103.347745], 10)
        L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap)

        // Personalización íconos
        let hospitalMarker = L.ExtraMarkers.icon({
            icon: 'fa-hospital',
            markerColor: 'red',
            shape: 'square',
            prefix: 'fa'
        })

         //Monito individual
        let dudeMarker = L.ExtraMarkers.icon({
            icon: 'fa-male',
            markerColor: 'blue',
            shape: 'circle',
            prefix: 'fa'
        })
                
        //Función Centrar
        function center(latitude,longitude){
            pos = [latitude,longitude]
            
            myMap.flyTo(pos, 12);
            L.marker(pos).addTo(myMap).setIcon(dudeMarker);  
               
            }

        //Función Añadir los marcadores
        function hospitalmarker(mlatitude,mlongitude){

            pos = [mlatitude,mlongitude]

            L.marker(pos).addTo(myMap).setIcon(hospitalMarker); 
            
        }

        //Función de rellenado de inputs
        function selectionchange(){
            var e = document.getElementById("select-location");
            var lat = e.options[e.selectedIndex].value;
            

            document.getElementById('slat').value = lat;
        

        }


        //Función para habilitar el selector
        function movSelector(){
            document.getElementById("select-location").addEventListener('change', function(e){
                //Obtención de coordendas
                console.log(e.target.value.split(","));
                //Almacenamiento en variable
                let coords = e.target.value.split(",");
                //Rellenado de inputs con valores del selector
                selectionchange()
                //Función de colocación en el mapa
            myMap.flyTo(coords, 14);
        })}
        
        movSelector();

        //    let geojsonlayer = L.geoJson(hospitales, {
        //     onEachFeature: function(feature, layer){
        //     layer.bindPopup(feature.properties['NOMBRE_DE_LA_UNIDAD'])
        //     layer.setIcon(hospitalMarker)
        //         }
        //      }).addTo(myMap)
        //     myMap.fitBounds(geojsonlayer.getBounds())
        //     L.geoJson(hospitales,{
        //      onEachFeature: basementDweller

        //     }).addTo(myMap);
        