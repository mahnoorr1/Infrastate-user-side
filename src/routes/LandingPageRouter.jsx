// LandingPageRouter.js

import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/landingPage";
import { MarkerProvider } from "../context/mapMarkerContext";
import TrackedChangesDetailsScreen from "../pages/Tracking/trackedChangesDetails";
import ChangePointOnMap from "../pages/Tracking/components/changePointOnMap";
import { TrackerDetailProvider } from "../pages/Tracking/providers/trackerDetailProvider";

const LandingPageRouter = () => {
  return (
    <MarkerProvider>
    <TrackerDetailProvider>
      <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/trackerDetails" element={<TrackedChangesDetailsScreen />} />
          <Route path="/trackerDetails/changePoint" element={<ChangePointOnMap/>}/>
      </Routes>
    </TrackerDetailProvider>
    </MarkerProvider>
  );
}

export default LandingPageRouter;
