import React,{useState} from 'react'
import {postSubmission} from '../../API/AllData'
import Loading from '../../Components/Loading'

export default function FormApply() {


    const [values, setValues] = useState({
        title:'',
        email:'',
        phone_no:'',
        type:'',
        file:null
    })
    const [loading,setLoading]=useState(false)
    const [response,setResponse]=useState('')
    const {title,email,phone_no,type,file}=values
    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setValues({
            ...values,
            [name]:value
        })
        
    }
    const handleSubmit=(event)=>{
        setLoading(true)
        event.preventDefault()
        const data = new FormData() 
        data.append("title",title );
        data.append("type", type);
        data.append("email", email);
        data.append("phone_no", phone_no);
        data.append('file', file)
        postSubmission(data)
        .then(
            response=>{
                setResponse(response.message)
            }
        )
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    }

    const handleFile=(event)=>{
        setValues({...values,file:event.target.files[0]})
    }


    return (
        <div className="container">
            <form onSubmit={(event)=>handleSubmit(event)} encType = "multipart/form-data">
                {response ? (<div className="row center green-text">{response}</div>) : ( null )}
                <div className="row">
                <div className="col s12 l6">
                    <div className="input-field">
                    <input  id="title" type="text" className="validate" name="title" value={values.title} onChange={handleChange} />
                    <label htmlFor="title">Name</label>
                    </div>
                </div>
                <div className="col s12 l6">
                    <div className="input-field">
                    <input  id="email" type="email" className="validate" name="email" value={values.email} onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="col s12 l6">
                    <div className="input-field">
                    <input  id="phone_no" type="tel" className="validate" name="phone_no"  value={values.phone_no} onChange={handleChange}/>
                    <label htmlFor="phone_no">Phone Number</label>
                    </div>
                </div>
                <div className="col s12 l6">
                <div className="input-field col s12">
                <select 
                onChange={handleChange}
                name="type"
                value={values.type}>
                <option value="" disabled selected>Choose your option</option>
                <option value="student">Student</option>
                <option value="non-student">Non-Student</option>
                </select>
                <label>Select Type</label>
                </div>
                </div>
                    <div className="col l12 s12">
                    <div className="file-field input-field">
                <div className="btn deep-purple">
                    <span>File</span>
                    <input type="file" onChange={handleFile} name='file' />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
                </div>
                    </div>
                </div>
                <div className="container center">
                    {loading ? (<Loading /> ) : (
                    <button className="btn deep-purple" type="submit">Submit</button>

                      )}
                </div>
            </form>
            
        </div>
    )
}
