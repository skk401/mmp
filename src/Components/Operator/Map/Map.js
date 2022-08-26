import { useState , useCallback , useEffect} from "react";
import {
    GoogleMap,
    useLoadScript,
    MarkerF,
    InfoWindow,
    DirectionsRenderer
  } from "@react-google-maps/api";

import mapStyles from "./mapStyles";

  const mapContainerStyle = {
    height: "100%",
    width: "100%",
  };

  
  const options = {
      styles : mapStyles,
      disableDefaultUI:true   
    }
    
    
    
    const libraries = ["places"];
    
export function Map({coordinates , data  }) {

    const [directionsResponse, setDirectionsResponse] = useState(null);

    async function calculateRoute() {
        if (coordinates === '' || data === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: coordinates,
          destination: data,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
      }    
    
      useEffect(() => {
        calculateRoute();
        console.log({directionsResponse});
      }, [])
      
    
    
    const [markers, setMarkers] = useState(data)
        const onMapClick = useCallback(
            (event) =>{
                setMarkers(current => [...current ,
                    {
                        lat : event.latLng.lat(),
                        lng : event.latLng.lng()
                    }])
                } , []
                )
                const { isLoaded, loadError } = useLoadScript({
                    googleMapsApiKey: "AIzaSyAOGN3N9OdXbI1kCtShIGmIUWrUYhX9tqs",
        libraries,
      });
      if (loadError) return "Error";
      if (!isLoaded) return "Loading...";
    return(
        <>
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={coordinates}
        options={options}
        onClick={onMapClick}
      >
         {/* <Marker position={{ lat: markers.lat , lng:markers.lng}} />  */}
        {/* {markers.map(marker => console.log(marker))} */}
        {/* <MarkerF position={{ lat:Number(markers.lat) , lng: Number(markers.lng)}} icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png" />                 */}
        {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
      </GoogleMap>
        </>
    );
  }