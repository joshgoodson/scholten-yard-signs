import React from 'react'
import SearchBox from '../searchbox/searchbox'
import Results from '../results/results'
import PICKUP_LOCATIONS from '../../constants/ysPickupLocations'

export class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: null
        };

        this.searchForNearestPickup = function (location) {
            console.log(location)
            // To Do: Make Google Maps call to get results and replace PICKUP_LOCATIONS below

            this.setState({
                results: PICKUP_LOCATIONS
            })
        }
    }

    render() {
        return (
            <div className="main__container">
                <SearchBox searchForNearestPickup={(i) => this.searchForNearestPickup(i)}/>
                <Results results={this.state.results}/>
            </div>
        )
    }
}

export default Main