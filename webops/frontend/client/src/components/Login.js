import React,{ useState } from "react"

export default function Login() {
    const [data, setData]=useState({
        email:'',
        password:'',
    })
    const loginUser = (e) => {
        e.preventDefault()
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