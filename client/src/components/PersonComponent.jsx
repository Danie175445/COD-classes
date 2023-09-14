import axios from 'axios'
import React,{useEffect, useState} from 'react'

const PersonComponent = () =>{
    const [message, setMessage] = useState("Loading....")
    useEffect(() =>{
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err))
    },[])
    return(
        <div>
            <h1>message from the back end is: {message}</h1>
        </div>
    )
}

export default PersonComponent