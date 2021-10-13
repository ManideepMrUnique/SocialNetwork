import Buttons  from "./Buttons";

import { useState } from 'react';

import {useHistory} from 'react-router-dom';

const Login=()=>{

    const history=useHistory();

    const [user,setUser]=useState({
        email:"",
        password:""
    });

    const handleInput=(e)=>{
        let email=e.target.name;
        let value=e.target.value;
        setUser({...user,[email]:value});
    }

    const loginUser= async (e)=>{
        console.log("here");
        e.preventDefault();
        const {email,password}=user;


        const dat = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({ email,password})
            //or body:JSON.stringify({ email:email,password:password})
        });

        const data=dat.json(); // this data shows response eg:user exists

        if(dat.status===400||!data)
        {
            if(!window.alert('Login Failed')) window.location.reload();
        }
        else
        {
            window.alert('Login Success');
            history.push('/LoggenIn');
        }
    }

    return (
        <>
                <form className="form">
                    {/* <h2>Login</h2> */}
                    <Buttons/>
                    <div className="input-group">
                        <input name="email" type="text" onChange={handleInput} required></input>
                        <label htmlFor="loginEmail">Email</label>
                    </div>


                    <div className="input-group">
                        <input name="password" type="password" onChange={handleInput} required></input>
                        <label htmlFor="loginPassword">Password</label>
                    </div>
                    <button onClick={loginUser} className="submit-btn">Submit</button>
                    {/* <input type="submit" value="submit" className="submit-btn" onClick={loginUser}></input> */}
                </form>
        </>
    );
}

export default Login;