import React from 'react'
import Heading from '../../Components/Heading'

export default function About() {
    return (
        <section>
            <Heading title="Why Choose Edunomics?"></Heading>
            <div className="container center">
            <h5>Lets evolve the answer/journey</h5>
            <p>Edunomics offers customers a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any business need. Our knowledge and experience add value and peace of mind to our customers. With Edunomics you get quality software and perfect service every time.</p>
            <div className="row">
                <div className="container mt-5">
                    <div className="col s6"> 
                        <a href="#whatwedo" data-aos="fade-right" className="button-primary">What we do?</a>
                    </div>
                    <div className="col s6"> 
                        <a data-aos="fade-left"  href="#whoweserve" className="button-primary">Who we serve?</a>
                    </div>
                
                </div>
            </div>
            </div>
        </section>
    )
}
