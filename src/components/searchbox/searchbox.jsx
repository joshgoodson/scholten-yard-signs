import React, { useEffect, useRef } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

function SearchBox(){
    const [address, setAddress] = React.useState("");
  
    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);

      console.log(results)
    };
  
    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div className="searchbox">
              <input className="searchbox__input" {...getInputProps({ placeholder: "Enter full address" })} />
              <div>
                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? "#f5f5f5" : "#fff"
                  };
  
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
}
    
export default SearchBox

