import React, { useState } from 'react';
import theme from '../../configs/theme';
import { AppBar, Tabs, Tab } from '@mui/material';


const TopNavBar = ({ onCategoryChange, categories, }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTabChange = (event, newValue) => {
    const newCategory = categories[newValue];
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <div>
      <AppBar sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '100%',
        marginLeft: '5px',
        overflow: 'auto',
        }} position="static">
        <Tabs 
        sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.shades.greenMedium, 
            },
            '& .Mui-selected': {
                color: theme.palette.shades.greenMedium, //didn't changed need to fix
              },
          }}
        value={categories.indexOf(selectedCategory)} 
        variant="scrollable" 
        scrollButtons="auto"
        onChange={handleTabChange}>
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default TopNavBar;
