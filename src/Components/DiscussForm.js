import React from 'react'

export default function DiscussForm() {
    return (
<section className="center grey lighten-5">
            <h2 className="">LET'S DISCUSS YOUR PROJECT</h2>
            <div className="row">
                <div className="container">
                <form >
                    <div className="row">
                    <div className="input-field col s12 l6">
                        <input className="validate" id="name" type="text"></input>
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="input-field col s12 l6">
                        <input className="validate" id="email" type="email"></input>
                        <label htmlFor="email">Your Email</label>
                    </div>
                    </div>
                    <div className="row">
                        <button className="btn deep-purple white-text">Submit Response</button>
                    </div>
                </form>
            
                </div>
            </div>
            
           
          </section>

    )
}
