import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import {FaCity} from 'react-icons/fa'
import Card from '../Components/Card'
import DiscussForm from '../Components/DiscussForm'
import {getAllSolutions} from '../API/AllData'
import Loading from '../Components/Loading'


export default function Solutions() {
    
    const [loading,setLoading]= useState(true)
    const [data,setData]= useState([])
    

    useEffect(()=>{
        getAllSolutions()
        .then(response=>{
            if(response.success){
            setData(response.data)
            }
            else{
                setData({})
            }
        })
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])
    


    return (
        <>
        <section>
          <Heading title="Building Innovative Software Solutions for Business" />
          <div className="row">
              <div className="container mt-5">
                  
            <blockquote><h4>Software Solutions that we Built</h4></blockquote>
            <p>We create high-performance, interactive, user-friendly applications helping companies bring their business to a whole new level.
Software focuses on the delivery of the apps designed to enhance the clients' business.</p>
<div className="row">
                {loading ? (<Loading></Loading>)
                :
                (data===null? (<div className="container center"><h4>NO DATA FOUND</h4></div>):
                (data.map(((item)=>(
                    <div className="col s6 l4 m6" key={item._id}>
                <Card title={item.solutionName} text={item.brief} mystyle="white lighten-4 z-depth-1">
                    <div className="card-image no-pad">
                    <img src={`https://edunomics.in/api/getfile/${item.solutionImgUrl}`}  className="w-100" alt="solution" height="200px" width="100%" />
                    </div>
                </Card>
            </div>
                )))))}
                
                
                    
                   </div>
              </div>
          </div>
          </section>
          <DiscussForm />
          
                    <div className="mt-5">
                <div className="row">
                <div className="container left-align">
            <blockquote><h4>Latest Tech we apply!</h4></blockquote>
            </div>
                    <div className="col l4 s6 m6 offset-l4">
                        <Card title="Enterprise Application" mystyle="white lighten-4 z-depth-1">
                            <FaCity  className="display-2 deep-purple-text" />
                        </Card>
                    </div>
                </div>
            </div>  
        </>
    )
}
