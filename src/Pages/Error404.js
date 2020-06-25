import React from 'react'
import error from '../Images/404error.svg'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="s12">
                        <Link to="/"><img alt="404 error" src={error} className="responsive-img" /></Link>
                    </div>
                </div>
                <div className="row center-align">
                    <button className="button-primary white-text">Back to Home</button>
                </div>
            </div>
        </div>
    )
}
