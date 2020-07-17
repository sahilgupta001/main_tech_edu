import React, { useEffect, useState } from 'react'
import CareerImg from '../Images/Career.svg'
import Heading from '../Components/Heading'
import CareerCard from '../Components/CareerCard'
import {getAllJobs} from '../API/AllData'
import Loading from '../Components/Loading'

export default function Career() {

    const [jobs, setJobs] = useState({})
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        getAllJobs()
        .then(response=>{
            console.log(response)
            if(response.success){
                setJobs(response.data)
            }
            else{
                setJobs({})
            }})
        .catch(error=>console.log(error))
        .finally(()=>(setLoading(false)))
    },[])

    return (
        <div className="container-fluid">
            <Heading title="Career at Edunomics" />
            <div className="row">
            <div className="col s12 l6">
                <ul className="list-promise">
                    <li className=""><p>
                    At Edunomics, we pride ourselves on building powerful, sophisticated software that’s fun and easy to use.
                    </p>
                    <div className="divider"></div></li>
                    <li className=""><p>We believe that customers are the foundation of a successful business and we want to enable every team to deliver moments of wow to them.</p><div className="divider"></div></li>
                    <li className=""><p>We are constantly on the lookout for smart people who are passionate about building great products, designing great experiences, building scalable platforms, and making customers happy.</p><div className="divider"></div></li>
                    <li className=""><p>If this describes you, feel free to take a look at our openings below and apply!</p><div className="divider"></div></li>
                </ul>
            </div>
            <div className="col l6 s12">
                <img src={CareerImg} className="responsive-img" alt="Technical Career"/>
            </div>
            </div>
        <div className="container">
            <div className="row">
                <Heading title="Career Openings at Edunomics" />
            </div>

                {loading ? 
                (<Loading />):
                (jobs ? (
                    <div className="row">
                {jobs.map((item)=>(<CareerCard job={item} key={item._id} />))}
            </div>
                ):(
                    <div className="container center "><h4>No jobs found</h4></div>
                ))}
                

        </div>
        </div>
    )
}
