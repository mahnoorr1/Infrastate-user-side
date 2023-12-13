import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AerialMap from "../../../components/Maps/aerialViewMap";
import { TrackerDetailContext } from "../../Tracking/providers/trackerDetailProvider";
import { Typography } from "@mui/material";
import { MapMarkerContext } from "../../../context/mapMarkerContext";
const ChangePointOnMap = () => {
    const { state } = useLocation();
    const { lng, lat } = state || {};
    const { updateTrackerDetail, trackerDetails } = useContext(TrackerDetailContext);
    const { location, locationName, updateLocation, address } = useContext(MapMarkerContext);
    return(
        <div style={{
            margin: '30px',
        }}> 
            <Typography 
            variant="h6"
            fontWeight={600}>Detailed View of Single Tracked Change: [{trackerDetails.title}]</Typography>
            <hr/>
            <div style={{
                display: 'flex', 
                gap: '10px',
            }}>
                <Typography fontWeight={600}>Location:</Typography>
                <Typography>{locationName}</Typography>
            </div>
            <div style={{
                display: 'flex', 
                gap: '10px',
            }}>
                
            </div>
            
            <div style={{
                marginTop: '10px',
            }}>
                <AerialMap height={'60vh'} width={'80vw'} lat={lat} lng={lng}></AerialMap>
            </div>
        </div>
    )
}


export default ChangePointOnMap;