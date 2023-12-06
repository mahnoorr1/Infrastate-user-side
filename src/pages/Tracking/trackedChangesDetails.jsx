import React, { useContext } from 'react';
import theme from '../../configs/theme';
import { useLocation } from 'react-router-dom';
import { Typography, Card } from '@mui/material';
import ImageGrid from '../../components/imageSegments';
import TrackedResultCard from './components/trackedResultsCard';
import TrackedGeoDataTable from './components/trackedChangesTable';  
import { TrackerDetailContext } from './providers/trackerDetailProvider';

const TrackedChangesDetailsScreen = () => {
  const { state } = useLocation();
  const { updateTrackerDetail, trackerDetails } = useContext(TrackerDetailContext);
  const { data } = state || {};

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant='h4' fontWeight={600}>
        {trackerDetails.title} Tracker - Tracking Details
      </Typography>
      <hr />
      <div style={{
        display: 'flex',
        gap: '10px',
      }}>
          <Card sx={{
          height: '120px',
          width: '250px',
          borderRadius: '5px',
          padding: '10px',
          margin: '10px',
          border: '2px solid',
          borderColor: theme.palette.shades.greenMedium,
        }}>
          <Typography
          variant='h3'
          fontWeight={600}
          color={theme.palette.shades.greenMedium}>
          {data && data.geo_data && data.geo_data.features.length}</Typography>
          <Typography 
          variant='body1'
          marginTop={'5px'}
          color={'grey'}>Number of Changes Found</Typography>
        </Card>
        <Card sx={{
          height: '120px',
          width: '250px',
          borderRadius: '5px',
          padding: '10px',
          margin: '10px',
          border: '2px solid',
          borderColor: theme.palette.shades.greenMedium,
        }}>
          <Typography
          variant='h3'
          fontWeight={600}
          color={theme.palette.shades.greenMedium}>
          {data && data.change_results_ai.toFixed(2)}%</Typography>
          <Typography 
          variant='body1'
          marginTop={'5px'}
          color={'grey'}>Percentage of Change</Typography>
        </Card>
      </div>
      <Typography 
      variant='h5'
      fontWeight={600}
      marginTop={'10px'}>
        Marked Changes Details
      </Typography>
      <hr/>
      <ImageGrid imagePath={trackerDetails.image} />
      <Typography 
      variant='h5'
      fontWeight={600}
      marginTop={'10px'}>
        Descriptive Coordinates
      </Typography>
      <hr/>
      {data && data.geo_data && <TrackedGeoDataTable geoData={data.geo_data} />} 
    </div>
  );
}

export default TrackedChangesDetailsScreen;
