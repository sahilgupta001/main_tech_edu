import React from 'react'
import Avatar from '../Images/careeravatar.jpg'


export default function CareerCard({job}) {
    return (
        <div className="col l4 s6">
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator circle" src={Avatar} alt="Avatar of Career"  height="200px"/>
            </div>
            <div className="card-content center">
    <span className="card-title activator grey-text text-darken-4">{job.title}</span>
            <a className="btn center blue " target = "_blank" href={job.form}>Apply Now</a>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4" > {job.title}<i className="material-icons right">close</i></span>
            <p className=""><u>Description</u>:<span className="green-text"> {job.description}</span></p>
            <p><u>Duration</u>:<span className="green-text"> {job.duration}</span></p>
            <p><u>Perks</u>:<span className="green-text"> {job.perks}</span></p>
            <p><u>Stipend</u>:<span className="green-text"> {job.stipend}</span></p>
            <p><u>Type</u>:<span className="green-text "> {job.type}</span></p>
            <a className="btn center blue" target = "_blank" href={job.form}>Apply Now</a>
            
            </div>
        </div>
        </div>
    )
}
