import React from 'react'
import Heading from '../../Components/Heading'
import {GiModernCity} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Panel from '../../Components/Panel'

export default function AboutUs() {
    return (
        <div className="container-fluid">
            <section className="section">
                <Heading title="About Us" />
            <div className="container">
            <p>Let’s face it. Most people hate the software they use at work.
            Business software is clunky, expensive, hard to setup and frustrating to use. Countless hours are wasted trying to customize these solutions and they often require expensive professional services to get everything to work. In the end, the solution becomes so complex that businesses need to hire full-time employees to babysit the software.
            At Edunomics, we believe your business deserves better software - software that’s ready to go, easy to setup and use, and requires minimal customization. All of our products live up to this promise and are backed by our world-class support. And the best part is, you don’t have to break the bank to get them working.
            Today, over 150,000 companies trust our software to run their business. We believe it’s just the beginning</p>
            </div>
            <div className="container center">
                <button className="btn deep-purple white-text"><Link className="white-text" to="/services" >About Our Work</Link></button>
            </div>
            <Heading title="Our Advantages" />
            <div className="row center-align">
                <div className="col s12 l4 offset-l4">
                    <Panel title="Technical partners" text="We rely to specific business needs of our clients and support them throughout the whole way: from an idea to its implementation.">
                        <GiModernCity className="display-2 deep-purple-text"/>
                    </Panel>
                </div>
            </div>
        </section>
        </div>
    )   
}
