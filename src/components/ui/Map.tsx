import { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


interface MapProps {
  onClick: (lat: number, lng: number) => void;
}


const containerStyle = {
  width: '100%',
  height: '400px',
};


const center = {
  lat: 24.860735, 
  lng: 67.001137, 
};

const Map: React.FC<MapProps> = ({ onClick }) => {
  
  const googleMapsApiKey = process.env
    .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
  });


  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat() ?? 0;
    const lng = event.latLng?.lng() ?? 0;
    onClick(lat, lng); 
    setMarker({ lat, lng }); 
  };

  
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={30}
      onClick={handleMapClick} 
    >
      {marker && (
        <Marker
          position={marker} 
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', 
          }}
        />
      )}
    </GoogleMap>
  );
};

export default Map;
