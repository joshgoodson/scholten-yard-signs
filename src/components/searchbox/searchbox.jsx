import React from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import { ReactComponent as SearchIcon } from 'img/search.svg';
import './searchbox.css'

function SearchBox(props){
    const [address, setAddress] = React.useState("");
  
    const handleSelect = async value => {
        setAddress(value);
        const results = await geocodeByAddress(value);
        props.searchForNearestPickup(results)
        document.getElementsByClassName('suggestions-container')[0].classList.remove('active')
    };

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                googleCallbackName="initGoogleApi"
            >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div className="searchbox__container">
                    <div className={`searchbox ${suggestions.length > 0 ? "active-suggestions" : ""}`}>
                        <SearchIcon className="searchbox__icon" />
                        <input className="searchbox__input" {...getInputProps({ placeholder: "Enter your full address" })} />
                    </div>
                    <div className={`suggestions-container ${suggestions.length > 0 ? "active" : "" } ${props.hasResults ? 'suggestions-container--with-results' : ""}`}>
                        { suggestions.map(suggestion => {
                            return (
                                <div className={`suggestion ${suggestion.active ? "active" : ""}`} {...getSuggestionItemProps(suggestion)}>
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

