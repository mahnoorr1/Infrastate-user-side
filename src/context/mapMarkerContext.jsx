import React, { createContext, useState, useEffect } from 'react';
import useLocationFetcher from '../hooks/locationFetcher';

const MapMarkerContext = createContext();

const MarkerProvider = ({ children, lat, lng }) => {
  const [location, setLocation] = useState({ lat: 33.709256, lng: 73.082362 });
  const { locationName, fetchLocationName, address } = useLocationFetcher();

  useEffect(() => {
    if (lat != null && lng != null) {
      setLocation({ lat, lng });
      fetchLocationName(lat, lng);
    }
  }, [lat, lng, fetchLocationName]);

  const updateLocation = (location) => {
    setLocation(location);
    fetchLocationName(location.lat, location.lng);
  };

  const contextValue = {
    location,
    locationName,
    updateLocation,
    address,
  };

  return (
    <MapMarkerContext.Provider value={contextValue}>
      {children}
    </MapMarkerContext.Provider>
  );
};

export { MapMarkerContext, MarkerProvider };
