import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css'

const mapStyles = {
  width: '100%',
  height: '100%'
};

const containerStyles = {
  position: 'relative',
  flex: 1.5,
  boxShadow: "-12px 0 20px var(--lightest-grey)"
}

export class MapContainer extends React.Component {
    adjustMap = (mapProps, map) => {
      // eslint-disable-next-line
      const {google, markers} = mapProps;
      const bounds = new this.props.google.maps.LatLngBounds();
    
      this.props.results.forEach(marker => {
        bounds.extend(new this.props.google.maps.LatLng(marker.latitude, marker.longitude));
      });
    
      map.fitBounds(bounds);
    };

    render() {
        return (
            <Map
              google={this.props.google}
              zoom={14}
              onReady={this.adjustMap}
              style={mapStyles}
              containerStyle={containerStyles}
              yesIWantToUseGoogleMapApiInternals
            >
            { this.props.results.map((result) => {
              const onClick = this.props.selectPlace.bind(this, result)
                return <Marker
                        className={this.props.selectedPlace === result ? "location-marker--selected" : "location-marker"}
                        key={result.location_id}
                        onClick={onClick}
                        position={{ lat: result.latitude, lng: result.longitude }}
                        selectedPlace={this.props.selectedPlace}
                      />
            })}
            { this.props.results.map((result) => {
                return <InfoWindow
                  visible={this.props.selectedPlace === result}
                  position={{lat: result.latitude, lng: result.longitude}} 
                >
                  <div>
                    <p className="location location__remaining-signs">{result.signs} signs remaining</p>
                    <a
                      className="infowindow__address"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${result.address} ${result.city} ${result.state_code} ${result.zip}`)}`}
                    > 
                      <p>
                        {result.address}<br/>
                        {result.city}, {result.state_code} {result.zip}
                      </p>
                    </a>
                    <p className="infowindow__hours">{result.dates_hours}</p>

                  </div>
                </InfoWindow>
            })}
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API
})(MapContainer)