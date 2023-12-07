import React from "react";
import theme from '../../../configs/theme';
import { Card, Typography } from "@mui/material";
import zone3_4 from '../../../assets/zone3_4.jpg';
import { json, useNavigate } from "react-router-dom";

const TrackedCard = ({ zone, fileName, jpgURL, tifURL, tif2023URL, jsonContent }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate('/construction/trackerDetails', {
      state: {
        zone: zone, 
        fileName: fileName, 
        jpgURL: jpgURL, 
        tifURL:tifURL, 
        tif2023URL: tif2023URL, 
        jsonContent: jsonContent}
        }
      );
  }
  return (
    <Card sx={{
      width: '300px',
      height: '300px',
      padding: '10px',
      cursor: 'pointer',
      marginBottom: '20px',
    }} onClick = {handleCardClick}>
      <div style={{
        display: 'flex',
        alignSelf: 'center',
        width: '280px',
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '5px',
        marginBottom: '5px',
      }}>
        {jpgURL ? (
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            src={jpgURL}
            alt="Tracked Result"
          />
        ) : (
          <>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'black',
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                color="#fff"
              >
                No Previous Record
              </Typography>
            </div>
            <img
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                opacity: 0.5, 
              }}
              src={zone3_4}
              alt="Placeholder Image"
            />
          </>
        )}
      </div>
      <Typography 
      variant="h6"
      fontWeight={600}>{fileName} Tracker in Zone {zone}</Typography>
      <div style={{ 
        display: 'flex',
        gap: '3px',
      }}>
        <Typography sx={{
            color: theme.palette.shades.greenMedium,
        }}>Change Previously: {jsonContent?.change_results_ai == null ? 'N/A' : jsonContent?.change_results_ai.toFixed(2)}</Typography>
        {
            jsonContent == null ? null :
            <Typography sx={{
                color: theme.palette.shades.greenMedium,
            }}>%</Typography>
        }
      </div>
      
    </Card>
  );
};

export default TrackedCard;
