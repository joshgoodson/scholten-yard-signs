import React from 'react'
import Result from './result'
import './results.css'

function Results(props) {
    if (props.results) {
        return (
            <div className="results__container">
                <p className="results__header">Results:</p>
                {props.results.map(function(result) {
                    return <Result key={result.id} name={result.name} address={result.address}/>
                })}
            </div>
        )
    } else {
        return null
    }

}

export default Results