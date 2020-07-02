import React from 'react'
import SearchBox from '../searchbox/searchbox'
import Results from '../results/results'
import PICKUP_LOCATIONS from '../../constants/ysPickupLocations'
import './main.css'

export class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: null
        };

        this.searchForNearestPickup = function(location) {
            // To Do: Make Google Maps call to get results and replace PICKUP_LOCATIONS below
            this.setState({
                results: PICKUP_LOCATIONS
            })
        }
    }

    render() {
        return (
            <div className="main__container">
                <div className={`content__container ${this.state.results?.length > 0 ? "content__container--with-results" : ""}`}>
                    <h1>Show Your Support for <br/>J.D. Scholten</h1>
                    <h2>Find the nearest location to pickup a yard sign.</h2>
                    <SearchBox searchForNearestPickup={(i) => this.searchForNearestPickup(i)} hasResults={this.state.results != null}/>
                    <Results results={this.state.results}/>
                </div>
            </div>
        )
    }
}

export default Main