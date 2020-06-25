import React, { useState, useEffect } from 'react'
import Heading from '../Components/Heading'
import BlockQuote from '../Components/BlockQuote'
import Card from '../Components/Card'
import DiscussForm from '../Components/DiscussForm'
import {getAllServices} from '../API/AllData'
import Loading from '../Components/Loading'

export default function Services() {

    const [loading,setLoading] =useState(true)
    const [data,setData]=useState([])

    useEffect(()=>{
        getAllServices()
        .then(res=>{
            if(res.success){
                setData(res.data)
            }
        }
            )
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])

    return (
        <>
         <section>
            <Heading title="Development Services"></Heading>
            <div className="container">
            <BlockQuote title="Our Services,Packed or Seperate" />
            <div className="row">
                    {loading ?  
                    (<Loading />) 
                    : 
                    (data.map((item)=>(
                    <div className="col l4 s6 m6" key={item._id}>
                    <Card   mystyle="card-height" title={item.serviceName} text={item.brief} >
                    <div className="card-image">
                    <img alt="service" src={`https://edunomics.in/api/getfile/${item.serviceImgUrl}`} height="200px" width="100%" />
                    </div>
                    </Card>
                    </div>
                    ))) 
                    }
              </div>                
            </div>
         </section> 
         <DiscussForm />  
        </>
    )
}

