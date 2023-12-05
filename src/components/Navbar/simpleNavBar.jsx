import React, { useState } from 'react';
import appTheme from '../../configs/theme';
import { AppBar, Tabs, Tab } from '@mui/material';

const TopNavBar = ({ onCategoryChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTabChange = (event, newValue) => {
    const newCategory = categories[newValue];
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '100%',
        marginLeft: '5px',
      }}
      position="static"
    >
      <Tabs
        value={categories.indexOf(selectedCategory)}
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleTabChange}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: appTheme.palette.shades.greenMedium,
          },
        }}
      >
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={category}
            sx={{
              color: 'grey',
              '&.Mui-selected': {
                color: appTheme.palette.shades.greenMedium,
              },
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default TopNavBar;
