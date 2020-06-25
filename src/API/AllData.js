import axios from 'axios'

//for getting the list of team members
export const getOurTeam=()=>{
        return axios.get("https://edunomics.in/api/tech/aboutus")
                .then(response=>{return response.data})
                .catch(error=>{return error})
}

//for getting all solutions 
export const getAllSolutions=async()=>{
        try{
              const res=await axios.get('https://edunomics.in/api/tech/solutions')  
                return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}

//for getting business 
export const getAllBusiness=async()=>{
        try{
              const res=await axios.get('https://edunomics.in/api/tech/business')  
              return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}

//for getting all services
export const getAllServices=async()=>{
        try{
              const res=await axios.get('https://edunomics.in/api/tech/service')  
                return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}



//for getting all blogs
export const getAllBlogs=async()=>{
        try{
              const res=await axios.get('https://edunomics.in/api/tech/blogs')  
              
              return res.data
        }
        catch(error){
                console.log("error is ",error)
        }
}

//for getting all available job positions
export const getAllJobs=async()=>{
        try {
                const res=await axios.get('https://edunomics.in/api/tech/CareerOpenings')
                return res.data
        } catch (error) {               
                console.log(error)
        }
}



//for getting all data related to startup
export const getStartUp=async()=>{
        try {
                const res=await axios.get('https://edunomics.in/api/tech/StartUps')
                return res.data
        } catch (error) {               
                console.log(error)
        }
}

//post form for submission
export const postSubmission=async(body)=>{
        console.log(body)
        try {
                const headers ={
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    }
                
                const res=await axios.post('https://edunomics.in/api/tech/StartUps',body,{headers:headers})
                return res.data

        } catch (error) {
         console.log(error)       
        }
}