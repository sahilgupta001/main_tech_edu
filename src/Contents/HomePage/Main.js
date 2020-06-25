import React from 'react'
import Landing from '../../Images/landing3.svg'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className="container-fluid">
            <div className="row">
           <div className="">
           <div className="col l6 s12 p-t-100" data-aos="fade-up">
            <h4>Edunomics Tech Solutions is a custom software development company</h4>
            <p className="grey-text darken-4">Edunomics provides turn-key software development services that add value to your business.</p>
            <p>Contact us today and transform your ideas into solutions!</p>
            <Link className="button-secondary deep-purple darken-4  " to="/contact">Contact Us</Link>
            </div>
            <div className="col l6 s12">
                <img data-aos="fade-down" src={Landing} alt="Landing Page" height="100%" width="100%"/>
            </div>
           </div>
        
        </div>
        </div>
    )
}
