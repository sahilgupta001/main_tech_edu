import React from 'react'
import Heading from '../Components/Heading'
import { Link } from 'react-router-dom'
import Panel from '../Components/Panel'
import {FaMoneyCheckAlt,FaAdversal} from 'react-icons/fa'
import {MdPayment} from 'react-icons/md'
import {RiProfileLine} from 'react-icons/ri'
import {BsLink45Deg,BsWallet} from 'react-icons/bs'
import Program1 from '../Images/program1.png'
import Program2 from '../Images/program2.png'


export default function Program() {
    return (
        <div className="p-t-100"> 
            <section>
                <div className="container center">
                <Heading title="Edunomics Affiliate Program" />
               <p>Join the leading SaaS affiliate program to earn 15% of every sale</p>
               <a className="btn btn-large deep-purple" href="">Become an Edunomics Affiliate</a> 
                </div>
            </section>
                <div className="row">
                    <div className="container-fluid">
                        <div className="col l6 s12">
                            <h3>Why should you join the Edunomics Affiliate program?</h3>
                            <p>Edunomics Affiliate Program is a leading B2B affiliate program which will help you earn a passive income by promoting one of the fastest growing companies worldwide.</p>
                        </div>
                        <div className="col l6 s12">
                            <img src={Program1} className="responsive-img" alt="Affilaite program" />
                        </div>    
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col l4 s12">
                            <Panel title="Easy money" text="Every time you bring in a lead who is happy to sign a contract with us, we are twice as happy to share a part of the deal value with you. You get paid $5 every time you bring in a lead and 15% of the deal value when the lead becomes a paying customer." >
                                <FaMoneyCheckAlt  className="display-2 deep-purple-text"/>
                            </Panel>
                        </div>
                        <div className="col l4 s12">
                            <Panel title="On-time Payment" text="It cannot get sweeter than this. You just take care of spreading the word about Edunomics and leave the rest to us. We will ensure you are paid on-time for your efforts and in your local currency, for your convenience." >
                                <MdPayment className="display-2 deep-purple-text" />
                            </Panel>
                        </div>
                        <div className="col l4 s12">
                            <Panel title="Promoting made easy" text="Promoting the products has never been easier. All you need to do from your end is let the world know about our amazing products and share a referral link with them. We will provide all the support you need, to be successful, from our end." >
                                <FaAdversal className="display-2 deep-purple-text" />
                            </Panel>
                        </div>
                    </div>
                </div>
                <div className="row deep-purple white-text p-10 " style={{paddingBottom:50}}>
                    <div className="container center">
                    <h3>How to become a part of Edunomics Affiliate Program</h3>
                    </div>
                    <div className="row container">
                        <div className="col l4 s4">
                            <div className="white-text">
                                <RiProfileLine className="display-2 white-text" />
                                <h5>Step 1</h5>
                                <p className="white-text">Signup for the program</p>
                            </div>
                        </div>
                        
                        <div className="col l4 s4">
                            <div  className="white-text">
                                <BsLink45Deg className="display-2 white-text" />
                                <h5>Step 2</h5>
                                <p className="white-text">Share your unique link</p>
                            </div>
                        </div>
                        <div className="col l4 s4">
                            <div  className="white-text">
                                <BsWallet className="display-2 white-text" />
                                <h5>Step 3</h5>
                                <p className="white-text">Sit back and watch money pour into your account</p>
                            </div>
                        </div>
                    </div>
                    <div className="container center mt-5">
                        <a href="" className="btn white deep-purple-text  hoverable">Start Your Journey Now !</a>
                    </div>
                </div>
                <section>
                    <div className="row center">
                        <h2>Become a part of Edunomics!</h2>
                        <p>With Edunomics, you don't sell a product, you sell an experience!</p>
                    </div>
                <div className="row container-fluid">
                    <div className="col l6 s12" >
                        <img src={Program2} className="responsive-img" alt="progarm 2" />
                    </div>
                    <div className="col l6 s12">
                        <p>Edunomics Affiliate program is an opportunity for you to make
                        money by promoting business software. The list of products includes, but not limited to:</p>
                        <ul className="footer-list">
                        <li><a href="http://distribution.edunomics.in/" target="_blank" rel="noopener noreferrer">Distribution Management System</a></li>
                        <li><a href="http://service.edunomics.in/"  target="_blank" rel="noopener noreferrer">Service Management System</a></li>
                        <li><a href="http://procure.edunomics.in/"  target="_blank" rel="noopener noreferrer">Procurement Management System</a></li>
                        <li><a href="http://invoice.edunomics.in/"  target="_blank" rel="noopener noreferrer">Invoice Management System</a></li>
                        <li><a href="http://interactive.edunomics.in/"  target="_blank" rel="noopener noreferrer">Interactive Marketing System</a></li>
                        <li><a href="http://fleet.edunomics.in/"  target="_blank" rel="noopener noreferrer">Fleet Management System</a></li>
                    
                        </ul>
                    </div>
                </div>
                </section>
        </div>
    )
}
