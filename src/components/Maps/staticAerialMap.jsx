import '../../index.css'
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import useLocationFetcher from '../../hooks/locationFetcher';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const points = [
  {
    lng: 73.082362,
    lat: 33.709256,
  },
  {
    lng: 73.104623,
    lat: 33.713175,
  },
  {
    lng: 73.095789,
    lat: 33.720327,
  },
  {
    lng: 73.074941,
    lat: 33.715722,
  },
];

const StaticAerialMap = ({ height, width }) => {
  return (
    <Box p={2}>
      <MapContainer
        center={[points[0].lat, points[0].lng]}
        zoom={14}
        style={{ height: height, width: width, borderRadius: 20, marginLeft: 15 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri"
        />

        {points.map((point, index) => {
        // Fetch location name for the current point using hook
        const { locationName, fetchLocationName, address } = useLocationFetcher();
        fetchLocationName(point.lat, point.lng);
        return (
          <Marker key={index} position={[point.lat, point.lng]} draggable={false}>
            <Popup>
              <div>
                <strong>Location Name:</strong>
                <br />
                {locationName || 'Fetching...'}
                <br/>
                lat: {point.lat}, lng: {point.lng} 
              </div>
            </Popup>
          </Marker>
        );
      })}
      </MapContainer>
    </Box>
  );
};

export default StaticAerialMap;
