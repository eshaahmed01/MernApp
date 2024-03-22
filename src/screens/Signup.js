import React, { useState } from 'react'
import {Link } from 'react-router-dom';

export default function Signup() {
    const [ credentials, setCredentials] = useState({name: "", email:"",password:"",geolocation:""})

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name: credentials.name, email:credentials.name, password: credentials.password, location: credentials.geolocation})
       
    })
    const json = await response.json()
    console.log(json)
    if(!json.success){
    alert("Enter valid crdentials")
    }
}
const onChange = (event)=>{
    setCredentials({...credentials, [event.target.name]: event.target.value})
}
  return (
    <div>
        <div className='container'> 
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="htmlForm-label">Name</label>
    <input type="text" className="htmlForm-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
    <input type="email" className="htmlForm-control" name='email' value={credentials.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
    <input type="password" className="htmlForm-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="address" className="htmlForm-label">Address</label>
    <input type="text" className="htmlForm-control" name='geolocation' onChange={onChange} value={credentials.geolocation} id="address"/>
  </div>
  
  <button type="submit" className="btn options">Submit</button>
   <Link to="/login" className="m-3 btn btn-danger"> Already a user</Link>
</form>
</div> 
    </div>
  )
}
