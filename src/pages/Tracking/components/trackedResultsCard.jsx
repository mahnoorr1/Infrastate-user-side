import theme from '../../../configs/theme';
import React, { useContext } from 'react';
import { Card, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import HoverZoom from '../../../components/onhoverZoom';
import { TrackerDetailContext } from '../providers/trackerDetailProvider';

const TrackedResultCard = ({ image, title, data }) => {
  const navigate = useNavigate();
  const { updateTrackerDetail, trackerDetails } = useContext(TrackerDetailContext);
  const handleNavigation = () => {
    updateTrackerDetail(title, image);
    navigate('/trackerDetails', { state: { data } });
  };

  console.log(data, "data from previous screen");

  return (
    <HoverZoom>
      <Card
        sx={{
          height: '340px',
          width: '380px',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '30px',
        }}
        onClick={handleNavigation}
      >
        <Card
          sx={{
            width: '100%',
            borderTopRadius: '15px',
            height: '250px',
            boxShadow: 'none',
            marginBottom: '2%',
          }}
        >
          <img
            src={image}
            height={'100%'}
            width={'100%'}
            style={{
              objectFit: 'cover',
            }}
            alt="Card Image"
          />
        </Card>
        <Typography
          variant='h6'
          fontWeight={600}
          sx={{
            marginBottom: '5px',
          }}
        >
          {title}
        </Typography>
        {data && data.change_results_ai !== undefined ? (
          <Typography
            variant='subheading1'
            fontWeight={600}
            color={theme.palette.shades.greenMedium}
          >
            Change Occurred: {data.change_results_ai.toFixed(2)} %
          </Typography>
        ) : (
          <Typography variant='subheading1' fontWeight={600} color={theme.palette.shades.greenMedium}>
            Change Occurred: N/A
          </Typography>
        )}
      </Card>
    </HoverZoom>
  );
};

export default TrackedResultCard;
