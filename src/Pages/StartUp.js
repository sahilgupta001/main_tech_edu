import React from 'react'
import About from '../Contents/StartUp/About'
import Heading from '../Components/Heading'
import Service from '../Contents/StartUp/Service'
import Plan from '../Contents/StartUp/Plan'
import FormApply from '../Contents/StartUp/FormApply'

function StartUp() {

    return (
        <div className="container-fluid">
            
                <div className="container">
                <Heading title=" Welcome to the Edunomics Startup initiative !" />
                <FormApply />
                <h3 className="center">  A step to revolutionize and empower Startups !</h3>
                </div>
                <About />
                <Service />
                <Plan />
                

        </div>
    )
}

export default StartUp
