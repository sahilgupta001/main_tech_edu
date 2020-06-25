import React from 'react'
import BlockQuote from '../../Components/BlockQuote'
import Edunomics from '../../Images/edunomics.jpg'

export default function About() {
    return (
        <section className="section">
           
            <BlockQuote title="Our Intended Mission"/>
            <div className="container center">
              <div className="row"> 
              <img  alt="edunomics logo"  src={Edunomics} className="responsive-img" /></div>
            </div>
            <div className="row">
                <h6>An extensive segment of the Indian organisations work as startups. Our country is a land of hidden gems  .We through our initiative wish to hunt for the most exceptional brains who are in the need for a platform to showcase and kick-start their ideas and aim for the sky in life to succeed , excel and grow .

            Edunomics, An ed-tech platform that empowers fresh indistinguishable ideas .
The Edunomics startup is a campaign that offers the zero-cost service plan.
This initiative is well designed to help young entrepreneurs especially aspiring  student leaders who have a vision to build and grow their business.
We here with our team appreciate start-up ideas that want to grow yet lack the right guidance and direction for where to move forward in this chaotic tech-industry.
</h6>
            </div>
        </section>
    )
}
