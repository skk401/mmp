import { useState , useCallback } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
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
    
export function Map({coordinates , data}) {
        const [markers, setMarkers] = useState([])
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
        {markers.map(marker => <Marker position={{ lat: marker.lat , lng:marker.lng}}/>)}
        {/* {data?.map((place,i) => (
                    <div
                    lat={Number(place.lat)}
                    lng={Number(place.lng)}
                    key = {i}
                    >
                        {
                            Number(place.bookings) > 8 ?
                            <LocationOnIcon color="error" fontSize="large"/>
                            :
                            <LocationOnIcon color="success" fontSize="large"/>
                        }   
                    </div>
                ))} */}
      </GoogleMap>
        </>
    );
  }