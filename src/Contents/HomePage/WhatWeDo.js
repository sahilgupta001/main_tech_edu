import React from 'react'
import Heading from '../../Components/Heading'
import HalfBlock from '../../Components/HalfBlock'

export default function WhatWeDo() {
    return (
        <section id="whatwedo" className="section scrollspy">
            <Heading title="What we Do?"/>
            <div className="container">
            <div className="row">
                <HalfBlock
                title="Custom Software Development"
                text="We listen to your ideas and create custom software solutions from the ground, designed especially for your business. Edunomics customers agree that our engineers and executive team are some of the best. You can trust that we'll do it right in the first place."
                />
                <HalfBlock 
                title="Quality Assurance"
                text="We believe in doing it right every time - that's why our Quality Assurance and Production teams work separately. We conduct thorough and rigorous QA checks on all of our projects. We can also check third-party products to ensure you're getting what you expect."
                />
            </div>
            <div className="row">
                <HalfBlock
                title="Product Development"
                text="We've created, engineered, and delivered software solutions for companies in almost every industry. Edunomics customers get the best results every time because of our passion, expertise, and experience."
                />
                <HalfBlock
                title="Business Analysis"
                text="Before Edunomics actually engineers a product, we always talk to our customers to understand their needs. Our team can analyze your project's functionality, business logic, software architecture, and future user scenarios. We'll sweat the small stuff so you can focus on the big picture."
                />
            </div>
            <div className='row'>
                <HalfBlock
                title='Legacy Software Modernization'
                text="Edunomics offers a service to update or replace your outdated legacy systems with cutting-edge new technologies and efficient custom software systems. We will bring back the efficiency of your business and get it to the new level to outrun your competition."
                />
                <HalfBlock
                title="Leveraging your Resource"
                text="Each Edunomics client works with a handpicked team of our experts. From idea to implementation, we can leverage your existing resources or become your new IT crew."
                />
            </div>
            </div>
        </section>
    )
}
