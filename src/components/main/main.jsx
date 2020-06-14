import React from "react";
import SearchBox from "../searchbox/searchbox";
import Results from "../results/results";
import PICKUP_LOCATIONS from "../../constants/ysPickupLocations";
import "./main.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };

<<<<<<< HEAD
    this.searchForNearestPickup = async function (location) {
      // this.setState({
      //   results: PICKUP_LOCATIONS,
      // });

      console.log(
        "Calling searchForNearestPickup: " + JSON.stringify(location)
      );
      // To Do: Make Google Maps call to get results and replace PICKUP_LOCATIONS below
=======
    this.searchForNearestPickup = function (location) {
    //   console.log(
    //     "Calling searchForNeearestPickup: " + JSON.stringify(location)
    //   );
>>>>>>> formatting

      var origin = new google.maps.LatLng(
        location[0].geometry.location.lat(),
        location[0].geometry.location.lng()
      );

      var service = new google.maps.DistanceMatrixService();

      var pickup_by_distance = [];

<<<<<<< HEAD
      for (let i = 0; i < PICKUP_LOCATIONS.length; i++) {
        const pickup = PICKUP_LOCATIONS[i];
        console.log("pickup: " + JSON.stringify(pickup));
        console.log("pickupByDistance: " + JSON.stringify(pickup_by_distance));

        var destination = new google.maps.LatLng(
          pickup.latitude,
          pickup.longitude
        );

        const getDistanceMatrix = (service, data) =>
          new Promise((resolve, reject) => {
            service.getDistanceMatrix(data, (response, status) => {
              if (status === "OK") {
                console.log("Distance: " + JSON.stringify(response));
=======
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
>>>>>>> formatting
                var results = response.rows[0].elements;

                pickup_by_distance.push({
                  ...pickup,
                  results,
                });
<<<<<<< HEAD
                console.log(
                  "pickup after return: " + JSON.stringify(pickup_by_distance)
                );
                resolve(response);
              } else {
                reject(response);
=======

                // console.log(
                //   "Final Array: " + JSON.stringify(pickup_by_distance)
                // );
>>>>>>> formatting
              }
            });
          });
<<<<<<< HEAD

        const result = await getDistanceMatrix(
          service, 
          {
            origins: [origin],
            destinations: [destination],
            travelMode: "DRIVING",
            avoidHighways: false,
            avoidTolls: false,
          },
          function callback(response, status) {
            console.log("Distance: " + JSON.stringify(response));
            var results = response.rows[0].elements;

            pickup_by_distance.push({
              ...pickup,
              results,
            });
            console.log(
              "pickup after return: " + JSON.stringify(pickup_by_distance)
            );
          }
        );
      }
      // PICKUP_LOCATIONS.forEach(function (pickup) {
      //   console.log("pickup: " + JSON.stringify(pickup));

      //   var destination = new google.maps.LatLng(
      //     pickup.latitude,
      //     pickup.longitude
      //   );
      //   service.getDistanceMatrix(
      //     {
      //       origins: [origin],
      //       destinations: [destination],
      //       travelMode: "DRIVING",
      //       avoidHighways: false,
      //       avoidTolls: false,
      //     },
      //     function callback(response, status) {
      //       console.log("Distance: " + JSON.stringify(response));
      //       var results = response.rows[0].elements;

      //       pickup_by_distance.push({
      //         ...pickup,
      //         results,
      //       });
      //     }
      //   );
      // });

      console.log("Final Array: " + JSON.stringify(pickup_by_distance));

      this.setState({
        results: pickup_by_distance,
      });
=======
        }
      );
>>>>>>> formatting
    };
  }

  render() {
    return (
      <div className="main__container">
        <div
          className={`content__container ${
            this.state.results?.length > 0
              ? "content__container--with-results"
              : ""
          }`}
        >
          <h1>
            Show Your Support for <br />
            J.D. Scholten
          </h1>
          <h2>Find the nearest location to pickup a yard sign.</h2>
          <SearchBox
            searchForNearestPickup={(i) => this.searchForNearestPickup(i)}
            hasResults={this.state.results != null}
          />
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Main;
