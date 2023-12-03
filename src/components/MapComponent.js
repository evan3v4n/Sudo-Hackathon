import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current || mapRef.current._leaflet_id) return;
    
        const map = L.map(mapRef.current, {
            worldCopyJump: true,
            minZoom: 3, // Set a minimum zoom level
            maxZoom: 19, // Maximum zoom level, already set in your tileLayer
            maxBounds: [[-90, -180], [90, 180]], // Set the maximum bounds for panning
        }).setView([51.505, -0.09], 4);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 10,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    
        return () => {
            map.remove();
        };
    }, []);
    

    return <div id="map" ref={mapRef} style={{ height: '1000px', width: '100%' }} />;

}

export default MapComponent;
