import  mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react'

const Map = ({longitude, latitude}) => {


    const NEXT_PUBLIC_MAP_API = 'pk.eyJ1Ijoibm9pdG9zZmVyYSIsImEiOiJjbDRmMTh4MjQwMnh3M2RwZmF2YmxnOGJ1In0.U53kaqZ3slQHGRwXAr8iDQ'
    
    mapboxgl.accessToken = NEXT_PUBLIC_MAP_API
    
    const mapContainer = useRef(null)
    const map = useRef(null)

    useEffect(() => {
        if (map.current) return

        if(longitude, latitude) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [longitude, latitude],
                zoom: 5
            })
        }

    }, [longitude, latitude])
    return (
        <div ref={mapContainer} className="map" />
    )
}

export default Map