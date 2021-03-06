import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import LoadingIndicator from "../loadingindicator/loadingindicator"
import SearchBox from '../searchbox/searchbox'
import Results from '../results/results'
import PICKUP_LOCATIONS from '../../constants/ysPickupLocations'
import './main.css'

export class Main extends React.Component{
    constructor(props) {
        super(props);
        const { google } = props;
        this.state = {
            results: null,
            isLoading: false
        };

        this.searchForNearestPickup = async function (location) {
    
            var origin = new google.maps.LatLng(
              location[0].geometry.location.lat(),
              location[0].geometry.location.lng()
            );
      
            var service = new google.maps.DistanceMatrixService();
      
            var pickup_by_distance = [];

            this.setState({
              isLoading: true
            })
      
            for (let i = 0; i < PICKUP_LOCATIONS.length; i++) {
              const pickup = PICKUP_LOCATIONS[i];
      
              var destination = new google.maps.LatLng(
                pickup.latitude,
                pickup.longitude
              );
      
              const getDistanceMatrix = (service, data) =>
                new Promise((resolve, reject) => {
                  service.getDistanceMatrix(data, (response, status) => {
                    if (status === "OK") {
                      var results = response.rows[0].elements;
      
                      let pickup_to_merge = pickup;
                      pickup_to_merge.distance = Math.round(results[0].distance.value / 1609);
                      pickup_by_distance.push({
                        ...pickup_to_merge,
                      });
                      resolve(response);
                    } else {
                      reject(response);
                    }
                  });
                });
      
              await getDistanceMatrix(
                service,
                {
                  origins: [origin],
                  destinations: [destination],
                  travelMode: "DRIVING",
                  avoidHighways: false,
                  avoidTolls: false,
                  unitSystem: google.maps.UnitSystem.IMPERIAL,
                }
              );
            }

            this.setState({
              results: pickup_by_distance,
              isLoading: false
            });
          };
    }

    render() {
        return (
            <div className="main__container">
                <div className={`content__container ${this.state.results?.length > 0 ? "content__container--with-results" : ""}`}>
                    <h1>Show Your Support for <br/>J.D. Scholten</h1>
                    <h2>Find the nearest location to pickup a yard sign.</h2>
                    <SearchBox searchForNearestPickup={(i) => this.searchForNearestPickup(i)} hasResults={this.state.results != null}/>
                    <Results results={this.state.results} clearResults={() => this.setState({results: null})}/>
                    <LoadingIndicator isLoading={this.state.isLoading} />
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API
})(Main)