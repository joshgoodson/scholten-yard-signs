import React from 'react'
import { ReactComponent as ArrowIcon } from "img/arrow.svg"
import { ReactComponent as LocationIcon } from 'img/location.svg'

const requestForm = "https://docs.google.com/forms/d/e/1FAIpQLSdr-rcQzWSHVwGhlR2zyNzp2enVdzkpKYa_-2NYU9EtQcL3YQ/viewform"

const Result = (props) => {
    if (!!props.result) {
        return (
            <div 
                id={props.result.location_id}
                className={`result ${props.resultIsSelected ? "result--selected" : ""}`}
                onClick={props.onClick}
            >
                <div className="result__content">
                    <p className="location location__remaining-signs">{props.result.signs} signs remaining</p>
                    <p className="location location__address">
                        {props.result.address}<br/>
                        {props.result.city}, {props.result.state_code} {props.result.zip}
                    </p>
                    <p className="location location__hours">{props.result.dates_hours}</p>
                    <a className="directions-button" 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.google.com/maps/dir/?api=1&destination=${
                            encodeURIComponent(`${props.result.address} ${props.result.city} ${props.result.state_code} ${props.result.zip}`)}`
                        }
                    >
                        Get Directions
                        <ArrowIcon className="directions-button__icon"/>
                    </a>
    
                </div>
                <div className="result__distance-graphic">
                    <LocationIcon className="result__location-icon"/>
                    <p className="result__distance-calculation">{props.result.distance} mi</p>
                </div>
    
            </div>
        )
    } else {
        return (
            <div className={`result ${props.resultIsSelected ? "result--selected" : ""}`} onClick={props.onClick}>
                <p className="result__none-of-the-above">None of these locations work for you?</p>
                <a className="result__request-form" href={requestForm} target="_blank">Request a yard-sign delivery</a>
            </div>
        )
    }
}

export default Result