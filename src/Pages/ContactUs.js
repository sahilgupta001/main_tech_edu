import React from 'react'
import Heading from '../Components/Heading'
import Chat from '../Images/chat.svg'
import Mail from '../Images/mail.svg'
import Meeting from '../Images/meeting.svg'


export default function ContactUs() {
    return (
        <div className="container-fluid">
            <section className="section">
                <Heading title="Contact Us" />
                <p className="center">Take up your option to contact us!</p>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <img src={Chat} alt="Chat with us" className="responsive-img"  width="80%"/>
                        </div>
                        <div className="col l6 s12">
                            <h4 className="deep-purple-text">Live Chat</h4>
                            <h6>WAIT TIME :<span className="grey-text">less than 2 minutes</span></h6>
                            <h6>Working Hours : <span className="grey-text">8:00am to 3:00pm</span></h6>
                            <a className="btn btn-small deep-purple white-text" href="https://api.whatsapp.com/send?phone=9669911101" target="_blank" rel="noopener noreferrer"> Chat Now</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l6 s12">
                            <h4 className="deep-purple-text">Schedule a Meeting</h4>
                            <h6>Mail us at :<span className="grey-text">contact@tech.edunomics.in</span></h6>
                            <h6>Get a call within 24Hours</h6>
                            <a  className="btn btn-small deep-purple white-text" target="_blank" href="https://calendly.com/edunomics-chitransh/30min" rel="noopener noreferrer">Schedule a meeting?</a>

                        </div>
                        <div className="col l6 s12">
                            <img src={Mail} alt="Chat with us" className="responsive-img" width="80%"/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col l6 s12">
                            <img src={Meeting} alt="Chat with us" className="responsive-img" width="80%" />
                        </div>
                        <div className="col l6 s12 ">
                            <h4 className="deep-purple-text">Mail a Request</h4>
                            <h6>Maximum response time:<span className="grey-text">One working day.</span></h6>
                            <a  rel="noopener noreferrer" className="btn btn-small deep-purple white-text" href="mailto:contact@edunomics.in" target="_blank">Send a Mail</a>

                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}
