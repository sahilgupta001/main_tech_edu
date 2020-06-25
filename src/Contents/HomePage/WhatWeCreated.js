import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import Heading from '../../Components/Heading'
import {getAllBusiness} from '../../API/AllData'
import Loading from '../../Components/Loading'
import Card from '../../Components/Card'


export default function WhatWeCreated() {
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    
    useEffect(()=>{
        getAllBusiness()
        .then(response=>{
            if(response.success){
            setData(response.data)
            }
            else{
                setData({})
            }})
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))

    },[])
    
    
    return (
        <section id="whatwecreated" className="section scrollspy"> 
                <Heading title="What We Created?" />   
            <div className="container">
            <div className="row">

                    {loading ? 
                    ( <Loading /> ) 
                    :  
                    (
                        data===null ? (
                            <div className="container center">No data found</div>
                        ):(
                            data.map((item)=>(  
                                <div className="col l4 s12" key={item._id}>
                                    <Card mystyle="grey lighten-4 z-depth-1" title={item.projectName} text={item.brief}>
                                    <div className="card-image">
                                    {/*  */}
                                    <img src={`https://edunomics.in/api/getfile/${item.projectImgUrl}`}  alt="what we created"  height="200px" width="100%" />
                                    </div>
                                    </Card>
                                </div>
                                    ))
                        )
                    ) }

                </div>  
            
            </div>
            <div className="row center">
                {/* the initial idea is to make a seperate page here! Searching for some other idea */}
                <Link to="/works" className="white-text btn btn-large deep-purple hoverable">Know More</Link>
            </div>
        
        </section>
    )
}
