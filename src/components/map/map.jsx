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
      const { google } = mapProps;
      const bounds = new google.maps.LatLngBounds();
    
      const topEightResults = this.props.results?.slice(0,7)
      
      if (topEightResults) {
        topEightResults.forEach(marker => {
          bounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
        })
      }

      if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
        var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.005, bounds.getNorthEast().lng() + 0.005);
        var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.005, bounds.getNorthEast().lng() - 0.005);
        bounds.extend(extendPoint1);
        bounds.extend(extendPoint2);
     }

      map.fitBounds(bounds);
    };

    onMarkerClick = (result, selectPlace) => {
      selectPlace()
      this.props.scrollToItem(result)
    }

    render() {
        return (
            <Map
              google={this.props.google}
              onReady={this.adjustMap}
              zoom={14}
              style={mapStyles}
              containerStyle={containerStyles}
              streetViewControl={false}
              mapTypeControl={false}
              yesIWantToUseGoogleMapApiInternals
            >
            { this.props.results.map((result) => {
                return <Marker
                        className={this.props.selectedPlace === result ? "location-marker--selected" : "location-marker"}
                        key={result.location_id}
                        onClick={() => this.onMarkerClick(result, this.props.selectPlace.bind(this, result))}
                        position={{ lat: result.latitude, lng: result.longitude }}
                        selectedPlace={this.props.selectedPlace}
                      />
            })}
            { this.props.results.map((result, index) => {
                return <InfoWindow
                  key={index}
                  visible={this.props.selectedPlace === result}
                  position={{lat: result.latitude, lng: result.longitude}} 
                >
                  <div>
                    <a
                      className="infowindow__address"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${result.address} ${result.city} ${result.state_code} ${result.zip}`)}`}
                    > 
                      <p className="infowindow__address-text">
                        {result.address}<br/>
                        {result.city}, {result.state_code} {result.zip}
                      </p>
                    </a>
                    <p className="infowindow__subheader">Volunteer Contact</p>
                    <p className="infowindow__contact-details">{result.location_name}</p>
                    { !!result.phone_number && <p className="infowindow__contact-details">{result.phone_number}</p> }

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