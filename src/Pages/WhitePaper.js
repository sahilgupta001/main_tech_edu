import React from 'react'
import Heading from '../Components/Heading'
import BlockQuote from '../Components/BlockQuote'

export default function WhitePaper() {
    return (
        <div className="container-fluid">
            <Heading  title="White Paper"></Heading>
            <div className="row">
                <div className="col s12">
                <BlockQuote title="The App Approach – How To Do It Best!" />
                <p>One of our clients, a trade association wanted an app for better personalization and smooth information delivery within their employees and business associates to integrate their processes further. The organized meetings and events could be viewed on Google Maps which helped the client.</p>
                </div>
                <div className="col s12">
                <BlockQuote title="The App Approach – How To Do It Best!" />
                <p>One of our clients, a trade association wanted an app for better personalization and smooth information delivery within their employees and business associates to integrate their processes further. The organized meetings and events could be viewed on Google Maps which helped the client.</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="row">
                <Heading title="Experience WOW" />
                <BlockQuote title="Get in touch with us" />
                <form>
                <div className="row">
                    <div className="col s12 l6 input-field" >
                    <i className="material-icons prefix">account_circle</i>
                    <input id="fullname" type="text" className="validate"   />
                    <label htmlFor="fullname">Full Name</label>

                    </div>
                    <div className="col s12 l6 input-field" >
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate"   />
                    <label htmlFor="email">Full Email</label>

                    </div>

                </div>
                <div className="row">
                    <div className="col s12 l6 input-field" >
                    <i className="material-icons prefix">phone</i>
                    <input id="phonenumber" type="tel" className="validate"   />
                    <label htmlFor="phonenumber">Full Number</label>

                    </div>
                    <div className="col s12 l6 input-field" >
                    <i className="material-icons prefix">location_city</i>
                    
                    <input id="cname" type="text" className="validate"   />
                    <label htmlFor="cname">Company Name</label>

                    </div>

                </div>
                <div className="row center-align">
                    <button className="btn btn-large deep-purple">Download WhitePaper<i className="material-icons right">cloud_download</i></button>
                </div>
            </form>

        </div>
        </div>
    )
}
