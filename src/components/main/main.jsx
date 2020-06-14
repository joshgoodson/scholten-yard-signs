import React from "react";
import SearchBox from "../searchbox/searchbox";
import Results from "../results/results";
import PICKUP_LOCATIONS from "../../constants/ysPickupLocations";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };

    this.searchForNearestPickup = function (location) {
    //   console.log(
    //     "Calling searchForNeearestPickup: " + JSON.stringify(location)
    //   );

      var origin = new google.maps.LatLng(
        location[0].geometry.location.lat(),
        location[0].geometry.location.lng()
      );

      var service = new google.maps.DistanceMatrixService();

      var pickup_by_distance = [];

      this.setState(
        {
          results: pickup_by_distance,
        },
        () => {
          PICKUP_LOCATIONS.forEach(function (pickup) {
            // console.log("pickup: " + JSON.stringify(pickup));

            var destination = new google.maps.LatLng(
              pickup.latitude,
              pickup.longitude
            );
            service.getDistanceMatrix(
              {
                origins: [origin],
                destinations: [destination],
                travelMode: "DRIVING",
                avoidHighways: false,
                avoidTolls: false,
              },
              function callback(response, status) {
                // console.log("Distance: " + JSON.stringify(response));
                var results = response.rows[0].elements;

                pickup_by_distance.push({
                  ...pickup,
                  results,
                });

                // console.log(
                //   "Final Array: " + JSON.stringify(pickup_by_distance)
                // );
              }
            );
          });
        }
      );
    };
  }

  render() {
    return (
      <div className="main__container">
        <SearchBox
          searchForNearestPickup={(i) => this.searchForNearestPickup(i)}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default Main;
