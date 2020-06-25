import React from 'react'
import Heading from '../Components/Heading'
import Panel from '../Components/Panel'
import { FaRocket } from 'react-icons/fa'

export default function ManagementSystems() {
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
                <div className="container p-t-100 center">
                <strong><h1>DISTRIBUTION MANAGEMENT SYSTEM</h1></strong>
                </div>
            </div>
            <section className="section white ">
                <div className="row">
                    <Heading title="Features" />
                    <div className="container">
                        <div className="row">
                            <div className="col l4 s12">
                                <Panel title="Easy to Configure Workflow" text="Distribution Management System is a flexible and easy to deploy system for your business. A flexible workflow system enable and provides an end to end contribution with real time updates by all stakeholders.">
                                    <FaRocket className="center display-2 deep-purple-text" />
                                </Panel>
                            </div>
                            <div className="col l4 s12">
                                <Panel title="Easy to Configure Workflow" text="Distribution Management System is a flexible and easy to deploy system for your business. A flexible workflow system enable and provides an end to end contribution with real time updates by all stakeholders.">
                                    <FaRocket className="center display-2 deep-purple-text"/>
                                </Panel>
                            </div>
                            <div className="col l4 s12">
                                <Panel title="Easy to Configure Workflow" text="Distribution Management System is a flexible and easy to deploy system for your business. A flexible workflow system enable and provides an end to end contribution with real time updates by all stakeholders.">
                                    <FaRocket className="center display-2 deep-purple-text"/>
                                </Panel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
            <div className="container">
                <Heading title="Key Features" />
            <ul className="collapsible">
    <li>
      <div className="collapsible-header"><i className="material-icons">tag_faces</i>Easy Processing and Robust Work</div>
      <div className="collapsible-body"><span>Faster processing,robust working and distribution of goods without damage.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>Fast and quick Delivery</div>
      <div className="collapsible-body"><span>Faster delivery in minimal time of your purchasing goods and reliability.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">local_grocery_store</i>Supply Catalog</div>
      <div className="collapsible-body"><span>Locating items and their source information for the purpose of creating purchase order and requisition lines.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">assignment</i>Vendor scorecard</div>
      <div className="collapsible-body"><span>Our software can give you quick and genuine score's to your vendors.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">card_membership</i>Contract Management</div>
      <div className="collapsible-body"><span>Easily manage your big contracts and compliances in th</span></div>
    </li>
  </ul>
        
            </div>
            </section>
        </div>
    )
}
