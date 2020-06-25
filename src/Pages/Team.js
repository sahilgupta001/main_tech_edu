import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import Panel from '../Components/Panel'
import Loading from '../Components/Loading'
import {getOurTeam} from '../API/AllData'
import Avatar from '../Images/avatar.jpg'


export default function Team() {


    const [team,setTeam]=useState([])
    const [loading, setLoading] = useState(true)

    const fetchData=()=>{
        getOurTeam()
        .then(response=>{
            if(response.success){
                setTeam(response.data)
                setLoading(false)
            }
            else{
                console.log("error occured")
            }
        })
        .catch(error=>console.log(error))
     
    }

    useEffect(()=>{
        fetchData()
    },[])


    return (
        <div className="container-fluid">
          <Heading title="Meet Our Team"/>
            <div className="row">
                <div className="container center">
                    <h4 className="deep-purple-text">An Organisation is made by its team.</h4>
                    <p>Meet our rockstars. Working across various parts of group-who have truly made it one of the most exciting place to work and create a differnce!</p>
                </div>
                <div className="container">
                    
                    
                <div className="row ">
                {loading ? 
                (
                    <Loading />
                ): (
                        team.map(member=>(
                    <div className="col l3 s6 m4 ">

                            <Panel title={member.name} alignment="center" key={member._id}>
                            <img 
                            alt={'Member'}
                            className="responsive-img circle hoverable"
                            src={`https://edunomics.in/api/tech/aboutus/getpic/${member.picUrl}`}
                            // src={Avatar}
                            width="80%" />
                        </Panel> 
                        </div>
                        ))
                    )}
            </div>
                            </div>
            </div>
        </div>
    )
}
