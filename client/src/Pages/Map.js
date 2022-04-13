import React, { useEffect, useRef, useState } from 'react';
import {GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const sampleObj = require('../utils/sample-obj');
let gsMarkers = JSON.parse(sampleObj);

function getStations(endpoint) {
    // fetch(endpoint)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         console.log(data.results);
    //         console.log(data.results.items);
        
    //         for (let i = 0; i < data.results.items.length; i++) {
    //             gsMarkers.push({
    //                 id: data.results.items[i].id,
    //                 location: data.results.items[i].position,
    //                 name: data.results.items[i].title,
    //                 address: data.results.items[i].vicinity
    //             })
    //         }

    //         console.log(gsMarkers);
    //         console.log(JSON.stringify(gsMarkers));

            
    //     })
    
   
   
        // .then(res => res.json())
        // .then(data => {
        //     fs.writeFileSync('../utils/data.json', JSON.stringify(data, null, 2), 'utf-8');
        // });

    




    //console.log(sampleObj);
    //console.log(sampleObj.replace(/'/g, '"'));
    // gasStations = JSON.parse(sampleObj.replace(/'/g, '"'));
    // console.log(sampleObj);

}


function nearbyGsEndPoint(lat, lng) {
    return `https://places.ls.hereapi.com/places/v1/discover/explore?at=${lat}%2C${lng}&cat=petrol-station&apiKey=dD36DAdimAzcwz4H84i4jX-g-nAxGa8xZGmtD3nFRvw`;
}

// function setCurrentPosition( position ) { 

//     userLocation = {lat: position.coords.latitude, lng: position.coords.longitude };
// }

// function positionError( error ) { 

//     console.log(error);
// }

// navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError);

// fetch('http://ip-api.com/json')
//     .then(res => res.json())
//     .then(data => {
        
//     })
// ;

const NestedMapDependencies = () => {

    // let [userLocation, setUserLocation] = useState(false);
    // let [gsData, setGsData] = useState(false);
    const [mapData, setMapData] = useState(false);

    async function fetchFromAPIs() {
        //return await fetch('http://ip-api.com/json'); // get user location
    
        try {
            const userLocationRes = await fetch('http://ip-api.com/json');
            const userLocationData = userLocationRes.json();
            const userLocation = {
                userCoords: {
                    lat: userLocationData.lat,
                    lng: userLocationData.lon
                }
            }
    
            const gsLocationsRes = await fetch(nearbyGsEndPoint(userLocationData.lat, userLocationData.lon));
            const gsLocationsData = gsLocationsRes.json();
            const gsLocations = gsLocationsData.results.items;
            let gsMarkers = [];
    
            for (let i = 0; i < gsLocations.length; i++) {
                gsMarkers.push({
                    id: gsLocations[i].id,
                    location: gsLocations[i].position,
                    name: gsLocations[i].title,
                    address: gsLocations[i].vicinity
                })
            }
    
            return({
                ...userLocation,
                gsMarkers: gsMarkers
            });
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
        
        console.log(mapData);

        if(!mapData) { 

            // const dataForMap = fetchFromAPIs();

            const userLocation = {
                    lat: 37.7893403,
                    lng: -122.2267357
            }

            const mockObj = {
                userLocation,
                gsMarkers
            }

            console.log(mockObj);

            setMapData(mockObj);
            
        }        
    }, [])

    return <GoogleMap 
            zoom={8} 
            center={mapData.userLocation}
            mapContainerClassName="map-container"
        >
            {mapData.gsMarkers.map((station) => (
                <Marker key={station.id} position={{lat: station.location[0], lng: station.location[1]}} />
            ))}
            <Marker position={mapData.userLocation} />
        </GoogleMap>;

}

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC2A-PNzqQ25vdOH13qcLe2pMkjZZUiwjo"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <NestedMapDependencies />;
    
}

export default Map;