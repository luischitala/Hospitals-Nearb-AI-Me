
        //Función creación de mapa INICIAL
    
            const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            //Delimitación del área de Jalisco
            let myMap = L.map('myMap',{ zoomControl: false }).setView([20.677041,-103.347745], 16);
            L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap);
        

        //Función creación de mapa Para refrescar
     
        //Función para obtener las coordenadas
        // function obtencionCoord(){
        //   var options = {
        //     enableHighAccuracy: true,
        //     timeout: 5000,
        //     maximumAge: 0
        //   };
          
        //   function success(pos) {
        //     var crd = pos.coords;
          
        //     console.log('Your current position is:');
        //     console.log('Latitude : ' + crd.latitude);
        //     console.log('Longitude: ' + crd.longitude);
        //     console.log('More or less ' + crd.accuracy + ' meters.');
        //     latitud = parseFloat(crd.latitude);
        //     longitud = parseFloat(crd.longitude);
        //     $('#lating').val(latitud);
        //     $('#lnging').val(longitud);
           
        //   };
          
        //   function error(err) {
        //     console.warn('ERROR(' + err.code + '): ' + err.message);
        //   };
          
        //   navigator.geolocation.getCurrentPosition(success, error, options);
        // }  

        // Personalización íconos
        let hospitalMarker1 = L.ExtraMarkers.icon({
            icon: 'fa-hospital',
            markerColor: 'green',
            shape: 'square',
            prefix: 'fa'
        })

        let hospitalMarker2 = L.ExtraMarkers.icon({
            icon: 'fa-hospital',
            markerColor: 'white',
            shape: 'square',
            prefix: 'fa'
        })

        let hospitalMarker3 = L.ExtraMarkers.icon({
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
            // L.marker(pos).addTo(myMap).setIcon(dudeMarker);  
           
            }

         //Función Re cálculo
         function recalculate(latitude,longitude){
            pos = [latitude,longitude]
            
            myMap.flyTo(pos, 12);
            dude = L.marker(pos).addTo(myMap).setIcon(dudeMarker); 
           
            }

        //Función Añadir los marcadores
        function hospitalmarker2(mlatitude,mlongitude){

            pos = [mlatitude,mlongitude]

            L.marker(pos).addTo(myMap).setIcon(hospitalMarker2); 
            
        }
        //Highlight
        function hospitalmarker1(mlatitude,mlongitude){

            pos = [mlatitude,mlongitude]

            L.marker(pos, {highlight: 'permanent'}).addTo(myMap).setIcon(hospitalMarker1).bindPopup('Soy la mejor opción :)').openPopup(); 
            
        }
            //Highlight
            function hospitalmarker3(mlatitude,mlongitude){

                pos = [mlatitude,mlongitude]
    
                L.marker(pos).addTo(myMap).setIcon(hospitalMarker3);
                
            }

        //Función de rellenado de inputs
        function selectionchange(){
            var e = document.getElementById("select-location");
            var lat = e.options[e.selectedIndex].value;
            

            document.getElementById('slat').value = lat;
        

        }


        //Función para habilitar el selector
        // function movSelector(){
        //     document.getElementById("select-location").addEventListener('change', function(e){
        //         //Obtención de coordendas
        //         console.log(e.target.value.split(","));
        //         //Almacenamiento en variable
        //         let coords = e.target.value.split(",");
        //         //Rellenado de inputs con valores del selector
        //         selectionchange()
        //         //Función de colocación en el mapa
        //     myMap.flyTo(coords, 14);
        // })}
        
 

// Mostrar Tarjetas
        function mostrarTarjetas(hospitales){
            for(i=0;i<3;i++){
                var nombre = hospitales[i].NOMBRE_DE_LA_UNIDAD;
                if(i==0){
                    let tarjetas = `<div class="card card-hover border-0 rounded img-fluid position-relative zoom" style="border-radius:25px; height:400px; width:300px; padding-left:30px; padding-right:10px;  background-image: url('{% static 'img/green.png' %}'); max-height:400px; max-width:280px;" >
                        <div class="card-body" style="padding-top: -5px; z-index:2; position-absolute">
                        <div class="row t-info">
                            <div class="col-4"  >
                                <span class="fcircular" >
                                <img src="{% static 'img/descarga.png' %}" class="rounded-circle z-depth-2 shadow" height="55" width="55" alt="100x100" style="padding-bottom: 5px;">
                                </span>
                            </div>
                                <div class="col-8" padding-right="0">
                                
                                <div class="row"> 
                                    <div class="col-3" style="color:white">3</h7></div>
                                    <div class="col-9 d-flex justify-content-end" style="padding: top 25;">  
                                        <div class="row" style="padding-top: 4px;">
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:grey"></i>
                                            <i class="fas fa-star" style="color:grey"></i>
                                        </div>  
                                    </div>
                                </div>
                                <div class="row">
                                <h5 class="t-tarjeta" style="font-size: 15px; padding-left: 15px; padding-top:10px; color:white;">`+ nombre +`</h5>
                                </div>
                                </div>
                        </div>
                        <div class="row" style:padding-top:50px;>
                            <div class="col" style="max-height: 50px;">
                                <div class="tb-tarjeta rounded" style="background-color: #00d74e; ">
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Disponible en urgencias </h5>
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Servicio 24 horas</h5>
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Equipamento completo</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding-top: 20px; text-align:center;">
                                <button class="btn btn-light shadow" style="font-size: 10px; display:inline-block;">REGISTRAR EMERGENCIA</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <ul style="padding-left: 0; padding-top:10px; ">
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">ESPECIALIDADES</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">SERVICIOS</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">PRECIOS</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">CONTACTO</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>`;
                    document.getElementById('res'+[i]).innerHTML= tarjetas;
                }
                else if (i == 1){
                    let tarjetas = `<div class="card card-hover border-0 border-secondary rounded img-fluid position-relative zoom" style=" height:400px; width:300px; padding-left:30px; padding-right:10px;  background-image: url('{% static 'img/view.png' %}'); max-height:400px; max-width:280px;" >
                        <div class="card-body" style="padding-top: -5px; z-index:2; position-absolute">
                        <div class="row t-info">
                            <div class="col-4"  >
                                <span class="fcircular" >
                                <img src="{% static 'img/descarga.png' %}" class="rounded-circle z-depth-2 shadow" height="55" width="55" alt="100x100" style="padding-bottom: 5px;">
                                </span>
                            </div>
                                <div class="col-8" padding-right="0">
                                
                                <div class="row"> 
                                    <div class="col-3" style="color:black">3</h7></div>
                                    <div class="col-9 d-flex justify-content-end" style="padding: top 25;">  
                                        <div class="row" style="padding-top: 4px;">
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:grey"></i>
                                            <i class="fas fa-star" style="color:grey"></i>
                                        </div>  
                                    </div>
                                </div>
                                <div class="row">
                                <h5 class="t-tarjeta" style="font-size: 15px; padding-left: 15px; padding-top:10px; color:black;">`+ nombre +`</h5>
                                </div>
                                </div>
                        </div>
                        <div class="row">
                            <div class="col" style="max-height: 50px; padding-top:10px;">
                                <div class="tb-tarjeta rounded" style="background-color: #00d74e;">
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Disponible en urgencias </h5>
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Servicio 24 horas</h5>
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Equipamento completo</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding-top: 20px; text-align:center;">
                                <button class="btn btn-light shadow" style="font-size: 10px; display:inline-block;">REGISTRAR EMERGENCIA</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <ul style="padding-left: 0; padding-top:10px; ">
                                    <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">ESPECIALIDADES</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">SERVICIOS</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">PRECIOS</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: black; text-decoration:none;">CONTACTO</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>`;
                    document.getElementById('res'+[i]).innerHTML= tarjetas;
                }
                else{
                    let tarjetas = `<div class="card card-hover border-0 border-secondary rounded img-fluid position-relative zoom" style=" height:400px; width:300px; padding-left:30px; padding-right:10px;  background-image: url('{% static 'img/selected.png' %}'); max-height:400px; max-width:280px;" >
                        <div class="card-body" style="padding-top: -5px; z-index:2; position-absolute">
                        <div class="row t-info">
                            <div class="col-4"  >
                                <span class="fcircular" >
                                <img src="{% static 'img/descarga.png' %}" class="rounded-circle z-depth-2 shadow" height="55" width="55" alt="100x100" style="padding-bottom: 5px;">
                                </span>
                            </div>
                                <div class="col-8" padding-right="0">
                                
                                <div class="row"> 
                                    <div class="col-3" style="color:white">3</h7></div>
                                    <div class="col-9 d-flex justify-content-end" style="padding: top 25;">  
                                        <div class="row" style="padding-top: 4px;">
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:gold"></i>
                                            <i class="fas fa-star" style="color:grey"></i>
                                            <i class="fas fa-star" style="color:grey"></i>
                                        </div>  
                                    </div>
                                </div>
                                <div class="row">
                                <h5 class="t-tarjeta" style="font-size: 15px; padding-left: 15px; padding-top:10px; color:white;">`+ nombre +`</h5>
                                </div>
                                </div>
                        </div>
                        <div class="row">
                            <div class="col" style="max-height: 50px; padding-top:10px;">
                                <div class="tb-tarjeta rounded" style="background-color: #00d74e;">
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Disponible en urgencias </h5>
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Servicio 24 horas</h5>
                                    <h5 class="ct-tarjeta" style="font-size: 10px; text-align:center; color:white;" >Equipamento completo</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style="padding-top: 20px; text-align:center;">
                                <button class="btn btn-light shadow" style="font-size: 10px; display:inline-block;">REGISTRAR EMERGENCIA</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <ul style="padding-left: 0; padding-top:10px; ">
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">ESPECIALIDADES</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">SERVICIOS</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">PRECIOS</a></li>
                                    <li style="list-style-type: none;"><a href="" style="color: white; text-decoration:none;">CONTACTO</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>`;
                    document.getElementById('res'+[i]).innerHTML= tarjetas;
                }  
            }
        }



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
        