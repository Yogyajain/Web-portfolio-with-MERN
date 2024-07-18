import React,{ useState } from "react"
import axios from 'axios';


export default function Login() {
    const [data, setData]=useState({
        email:'',
        password:'',
    })
    const loginUser = (e) => {
        console.log(e)
        e.preventDefault()
        const data = JSON.stringify({
            "email": e.target[0].value,
            "password": e.target[1].value
          });
          
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
          
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });
          
          xhr.open("POST", "http://localhost:5000/api/user/login");
          xhr.setRequestHeader("Content-Type", "application/json");
          
          xhr.send(data);
    }
    return(
        <div>
            <form onSubmit={loginUser}>
            <label>email</label>
            <input type="email" placeholder='enter email'value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
            <label>password</label>
            <input type="password" placeholder='enter password'value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
            <button type="submit">login</button>
            </form>
        </div>
    )   
}