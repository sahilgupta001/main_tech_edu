import React, { useState,useEffect } from 'react'
import Heading from '../Components/Heading'
import BlogCard from '../Components/BlogCard'
import Loading from '../Components/Loading'
import {getAllBlogs} from '../API/AllData'


export default function Blog() {

    const [loading,setLoading] =useState(true)
    const [data,setData]=useState([])

    useEffect(()=>{
        getAllBlogs()
        .then(res=>setData(res.blogs))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])

    return (
        <>
          <div className="container-fluid">
            <Heading title="Blog" />
            <div className="row">

            {loading ?  
                (<Loading />) 
                    : 
                (
                    data.map((item)=>(
                        <div className="col s12 l4 m6" key={item._id}>
                        <BlogCard  item={item}  />
                        </div> 
                    ))

                )}
                
            </div>
            </div>  
        </>
    )
}
