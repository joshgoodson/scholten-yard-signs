import React, { useEffect, useRef } from 'react'

const GOOGLE_MAP_API_KEY = 'AIzaSyA3AtWnYIr93Lbo0wqtepcSJSRnrTs9dpc';
const myLocation = { // Random landmark, will be replaced by lat long of pickup place
    lat: 43.642567,
    lng: -79.387054
};

function Map() {
    // refs
    const googleMapRef = React.createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);

    // helper functions
    const createGoogleMap = () =>
        new window.google.maps.Map(googleMapRef.current, {
            zoom: 14,
            center: {
                lat: myLocation.lat,
                lng: myLocation.lng
            }
        });

    const createMarker = () =>
        new window.google.maps.Marker({
            position: {lat: myLocation.lat, lng: myLocation.lng},
            map: googleMap.current
        });

    useEffect(() => {
        /// move this script so it can be shared with other 
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();
            marker.current = createMarker()
        })
    });

    return (
        <div
            id="google-map"
            ref={googleMapRef}
        />
    )
}
    
export default Map