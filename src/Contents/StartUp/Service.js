import React from 'react'
import startup from '../../Images/Startup.svg'
import empower from '../../Images/empower.svg'

export default function Service() {
    return (
        <section  className="section">
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col l6 s12">
                            <img src={startup} alt=" The Zero Cost Service plan " className="responsive-img"></img>
                        </div>
                        <div className="col l6 s12">
                            {/* <BlockQuote title=" The Zero Cost Service plan " /> */}
                            <h4 className="deep-purple-text">The Zero Cost Service plan</h4>
                            <h6>Here, We present to you our zero-cost service plan !</h6>
                            <p>Come share the  idea and the vision behind your startup. We at Edunomics will explore your basic business principle ; If we discover your zeal to progress and the passion to grow a group of young potential leaders from our team will be assigned to help you through your journey .</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col l6 s12">
                        <h4 className="deep-purple-text">Empowering Student Entrepreneurs</h4>

                            <p>Our startup initiative is well-drafted to assist student entrepreneurs who possess the apt skill ,passion ,idea and the zeal to succeed. 

        We at edunomics especially guide aspiring young candidates with accurate proposals for the industry.
Young student entrepreneurs many a times possess everything required to grow in businesses yet due to a lack of funding and improper guidance fail , we with our initiative want to guide these visionaries with proper support and tech-help so that they learn the initials for their startup and have a strong base to create and work upon.
</p>
                        </div>
                        <div className="col l6 s12">
                        <img src={empower} alt=" The Zero Cost Service plan " className="responsive-img"></img>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
