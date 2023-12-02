import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current || mapRef.current._leaflet_id) return;
    
        const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    
        return () => {
            map.remove();
        };
    }, []);
    

    return <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default MapComponent;
