import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MarkerProvider } from "../context/mapMarkerContext";
import Construction from "../pages/Construction/construction";
import TrackerDetailsAndApply from "../pages/Construction/detailsAndApply";
import ChangePointOnMap from "../pages/Tracking/components/changePointOnMap";
import { TrackerDetailProvider } from "../pages/Tracking/providers/trackerDetailProvider";
import AddTrackerOnZoneSegment from "../pages/Construction/addTrackerOnZoneSegment";

const ConstructionPageRouter = () => {
  return (
    <MarkerProvider>
    <TrackerDetailProvider>
      <Routes>
          <Route path="" element={<Construction />} />
          <Route path="/trackerDetails" element={<TrackerDetailsAndApply />} />
          <Route path="/trackerDetails/addTracker" element={<AddTrackerOnZoneSegment/>}/>
          <Route path="/trackerDetails/changePoint" element={<ChangePointOnMap/>}/>
      </Routes>
    </TrackerDetailProvider>
    </MarkerProvider>
  );
}

export default ConstructionPageRouter;
