import React from 'react'
import './loadingindicator.css'


const LoadingIndicator = (props) => {
    const classNames = `loading-container ${props.isLoading ? 'loading-container--visible' : ''}`

    return (
        <div className={classNames}>
            <div className="loading-content-container">
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className="loading-header">Searching</p>
            </div>
        </div>
    )

}

export default LoadingIndicator

