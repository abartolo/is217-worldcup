                    
			// add all your code to this method, as this will ensure that page is loaded
			AmCharts.ready(function() {
			    // create AmMap object
			    var map = new AmCharts.AmMap();
			    // set path to images
			    map.pathToImages = "../ammap/images/";
			    
			    /* create data provider object
			     mapVar tells the map name of the variable of the map data. You have to
			     view source of the map file you included in order to find the name of the 
			     variable - it's the very first line after commented lines.
			     
			     getAreasFromMap indicates that amMap should read all the areas available
			     in the map data and treat them as they are included in your data provider.
			     in case you don't set it to true, all the areas except listed in data
			     provider will be treated as unlisted.
			    */
			    var dataProvider = {
			        mapVar: AmCharts.maps.worldLow,
			        getAreasFromMap:true                    
			    }; 
			    // pass data provider to the map object
			    map.dataProvider = dataProvider;
			
			    /* create areas settings
			     * autoZoom set to true means that the map will zoom-in when clicked on the area
			     * selectedColor indicates color of the clicked area.
			     */
			    map.areasSettings = {
                                color: "#74b73e",
                                autoZoom: true,
			        selectedColor: "#fec804",
                                rollOverOutlineColor: "#303030"
                                
			    };
                            map.zoomOnDoubleClick = false;
                            map.mouseWheelZoomEnabled = true;
                                                       
                            console.log(map);
                            
                            map.addListener("clickMapObject", function (event) {
                                
                                console.log(event.mapObject.id);
                                console.log(event.mapObject.title);
                                
                            });
                            
			
			    // let's say we want a small map to be displayed, so let's create and add it to the map
			    map.smallMap = new AmCharts.SmallMap();
			
			    // write the map to container div
			    map.write("mapdiv");               
			    
			});