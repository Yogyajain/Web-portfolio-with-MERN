import {useState} from 'react'
import axios from 'axios'

export default function Register() {

    const [data, setData]=useState({
        name:'',
        email:'',
        password:'',
    })

    const registerUser = async (e) => {
        
        e.preventDefault()
        const data = JSON.stringify({
            "username":e.target[0].value,
            "email":e.target[1].value,
            "password":e.target[2].value
          });
          
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
          
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });
          
          xhr.open("POST", "http://localhost:5000/api/user/register");
          xhr.setRequestHeader("Content-Type", "application/json");
          
          xhr.send(data);
    }

    return(
        <div>
            <form onSubmit={registerUser}> 
                <label>name</label>
                <input type="text" placeholder='enter name' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
                <label>email</label>
                <input type="email" placeholder='enter email'value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
                <label>password</label>
                <input type="password" placeholder='enter password'value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}