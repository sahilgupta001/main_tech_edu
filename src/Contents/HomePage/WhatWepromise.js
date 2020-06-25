import React from 'react'
import Heading from '../../Components/Heading'
import Promise from '../../Images/promise2.svg'

export default function WhatWepromise() {
    return (
        <section className="section">
            <Heading title="What we Promise" />
            <div className="row">
            <div className="container-fluid">
                <div className="col s12 l6">
                    <img src={Promise} alt="promise"  data-aos="fade-up" ></img>
                </div>
                <div className="col s12 l6">
                    <ul className="list-promise"  data-aos="fade-down">
                        <li><p>Edunomics biggest concern when choosing a technology is how it fits our customer's needs. </p>
                        <div className="divider"></div></li>
                        <li><p>Edunomics does not resell any platforms or technologies of the third party vendors. We promise that we never have any commercial incentive while choosing a technology or approach, we base our decision only on the fact how our customers would benefit from it. </p>
                        <div className="divider"></div></li>
                        <li><p>Our customers' time is their money, so completing every project on time is one of Edunomics biggest priorities. </p>
                        <div className="divider"></div></li>
                        <li><p>Edunomics values their customers, so that we provide fair and transparent pricing. </p></li>
                    </ul>
                    
                    
                    
                  
                </div>
            </div>
            </div>
        </section>
    )
}
