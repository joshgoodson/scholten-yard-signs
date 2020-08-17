import React from 'react'
import Result from './result'
import './results.css'
import MapsPage from '../map'

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.selectPlace = this.selectPlace.bind(this);
        this.state = {
            selectedPlace: null
        };
    }

    componentDidUpdate() {
        // if selected component is out view in list, scroll to it. 
        if (this.state.selectedPlace != null && this.state.selectedPlace != {}) {
            const selectedResult = document.getElementById(this.state.selectedPlace.location_id)
            if (this.state.selectedResult === this.props.results[0]) {
                selectedResult.parentElement.scrollTo(0)
            } else if (selectedResult != null) {
                selectedResult.scrollIntoView(false, {behavior: "smooth"})
            }
        }
    }

    selectPlace = (place) => {
        if (place != this.state.selectedPlace) {
            this.setState({ selectedPlace: place })
        } else {
            this.setState({selectedPlace: null})
        }
    }

    render() {
        if (this.props.results) {
            return (
                <div className="results__container">
                    <div className="results__list" >
                        <div className="results__header-wrapper">
                            <p className="results__header">Nearest locations for pickup </p>
                            <div className="results__linebreak"></div>
                        </div>
                        {this.props.results.map((result, index) => {
                            return <Result
                                    key={index}
                                    index={index}
                                    result={result}
                                    onClick={i => this.selectPlace(result)}
                                    resultIsSelected={this.state.selectedPlace === result}
                                />
                        })}
                    </div>
                    <MapsPage results={this.props.results} selectPlace={this.selectPlace} selectedPlace={this.state.selectedPlace}/>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Results