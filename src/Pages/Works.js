import React from 'react'
import Heading from '../Components/Heading'
import Card from '../Components/Card'
import Quality from '../Images/qualtiy.jpg'

export default function Works() {
    return (
        <div className="container-fluid">
            <Heading title="Softwares Systems we created" />
            <div className="row">
                <div className="col s12 l4">
                    <Card title="Quality Management System" footerText="Technology: NodeJS, ReactJS, Python & Android along with GCP AWS Cloud, Python" text="The Quality Management engineered by our team is capable of handling Raw Material to finish good quality test along with recipe management for production in real time, following the organisational workflow">
                    <img alt="qulaity " className="" src={Quality}  ></img>
                    </Card> 
                     
                </div>
                <div className="col s12 l4">
                    <Card title="Quality Management System" footerText="Technology: NodeJS, ReactJS, Python & Android along with GCP AWS Cloud, Python" text="The Quality Management engineered by our team is capable of handling Raw Material to finish good quality test along with recipe management for production in real time, following the organisational workflow">
                    <img alt="qulaity " className="" src={Quality}  ></img>
                    </Card> 
                     
                </div>                <div className="col s12 l4">
                    <Card title="Quality Management System" footerText="Technology: NodeJS, ReactJS, Python & Android along with GCP AWS Cloud, Python" text="The Quality Management engineered by our team is capable of handling Raw Material to finish good quality test along with recipe management for production in real time, following the organisational workflow">
                    <img alt="qulaity " className="" src={Quality}  ></img>
                    </Card> 
                     
                </div>                <div className="col s12 l4">
                    <Card title="Quality Management System" footerText="Technology: NodeJS, ReactJS, Python & Android along with GCP AWS Cloud, Python" text="The Quality Management engineered by our team is capable of handling Raw Material to finish good quality test along with recipe management for production in real time, following the organisational workflow">
                    <img alt="qulaity " className="" src={Quality}  ></img>
                    </Card> 
                     
                </div>
            </div>
            {/* <div className="row">
                <div className="col s12">
                    <BlockQuote title="Brands we developed" />
                </div>
            <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car1} alt="Brands" width="100%" height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car2} alt="Brands" width="100%"  height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car3} alt="Brands" width="100%" height="100px" />
                        </Card>
                    </div>
                </div>         
                <div className="row">
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car4} alt="Brands" width="100%" height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car5} alt="Brands" width="100%"  height="100px"/>
                        </Card>
                    </div>
                    <div className="col l4 s6">
                        <Card mystyle="grey lighten-4 z-depth-1">
                            <img src={Car6} alt="Brands" width="100%" height="100px" />
                        </Card>
                    </div>
            </div> */}
        </div>
    )
}
