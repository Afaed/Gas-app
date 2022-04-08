import React, { useEffect, useRef, useState } from 'react';
import {GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
let userLocation = {};

function setCurrentPosition( position ) { 

    userLocation = {lat: position.coords.latitude, lng: position.coords.longitude };
}

function positionError( error ) { 

    console.log(error);
}

navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError);

const NestedMapDependencies = () => {

    return <GoogleMap 
            zoom={10} 
            center={userLocation}
            mapContainerClassName="map-container"
        >
            <Marker position={userLocation} />
        </GoogleMap>;

}

const Map = () => {

    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBRm3itj6oBIld55_PLJzQ6noL1aF3w_Uk"
        //"AIzaSyBRm3itj6oBIld55_PLJzQ6noL1aF3w_Uk"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <NestedMapDependencies />;
    
}

export default Map;