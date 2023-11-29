// ResultContext.jsx
import React, { createContext, useState } from 'react';

const TrackerDetailContext = createContext();

const TrackerDetailProvider = ({ children }) => {
  const [trackerDetails, setResult] = useState({ title: '', image: ''});

  const updateTrackerDetail = (title, image ) => {
    setResult({ title, image });
  };

  const contextValue = {
    trackerDetails,
    updateTrackerDetail,
  };

  return <TrackerDetailContext.Provider value={contextValue}>{children}</TrackerDetailContext.Provider>;
};

export { TrackerDetailContext, TrackerDetailProvider };
