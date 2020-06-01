import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { ReactComponent as SearchIcon } from '../../img/search.svg';
import './searchbox.css'

function SearchBox(props){
    const [address, setAddress] = React.useState("");
  
    const handleSelect = async value => {
        setAddress(value);
        const results = await geocodeByAddress(value);
        props.searchForNearestPickup(results)
    };
  
    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                    <div className="searchbox">
                        <SearchIcon className="searchbox__icon" />
                        <input className="searchbox__input" {...getInputProps({ placeholder: "Enter full address" })} />
                    </div>
                    <div className="suggestions-container">
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#f5f5f5" : "#fff"
                            };
            
                            return (
                                <div className="suggestion" {...getSuggestionItemProps(suggestion, { style })}>
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

