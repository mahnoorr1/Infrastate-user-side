import React, { useState } from 'react';
import { Autocomplete } from '@mui/material';
import { GooglePlacesAutocomplete } from 'react-google-places-autocomplete';

const SearchBar = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggestions = (predictions) => {
    setSuggestions(predictions || []);
  };

  return (
    <Autocomplete
      freeSolo
      value={selectedPlace}
      onChange={(event, newValue) => setSelectedPlace(newValue)}
      renderInput={(params) => <input {...params} placeholder="Search Location" />}
      renderOption={(place) => place.description}
      options={suggestions}
      loadingText="Loading..."
      noOptionsText="No results found"
      openOnFocus
      autoComplete
      includeInputInList
    >
      {(params) => (
        <GooglePlacesAutocomplete
          apiKey="AIzaSyAGv4FqvLZ8td5KLCeXtER79e2jeBMfjic"
          autocompletionRequest={{
            types: ['address'], 
          }}
          debounce={300}
          onLoadFailed={(error) => console.error(error)}
          onLoadSuccess={handleSuggestions}
          {...params}
        />
      )}
    </Autocomplete>
  );
};

export default SearchBar;
