import Buttons  from "./Buttons";

//import {useHistory} from 'react-router-dom';

import { useState ,useContext} from 'react';

import { funCPassed } from "./Home";

const SignUp=()=>{
    //const history=useHistory();
    const setVal=useContext(funCPassed);
    const [user,setUser]=useState({
        email:"",
        username:"",
        password:"",
        phone:""
    });
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({...user,[name]:value});
    }
    const postData=async (e)=>{
        console.log("here");
        e.preventDefault();
        const {email,username,password,phone}=user;
        const res = await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({email,username,password,phone})
        }).catch((err)=>{
            console.log(err);
            window.alert('fetch cant be performed for register');
        });
        const data=await res.json();
        console.log(data);
        if(res.status===422||!data)
        {
            window.alert("Registration Failed");
        }
        else
        {
            window.alert("Registration Success");
            setVal(false);
        }
    }
    return (
        <>
                <form className="form">
                    {/* <h2>Login</h2> */  }
                    <Buttons/>
                    <div className="input-group">
                        <input name="email" type="text" onChange={handleInput} required></input>
                        <label htmlFor="loginEmail">Email</label>
                    </div>
                    <div className="input-group">
                        <input name="username" type="text" onChange={handleInput} required></input>
                        <label htmlFor="loginUser">User Name</label>
                    </div>

                    <div className="input-group">
                        <input name="password" type="password" onChange={handleInput} required></input>
                        <label htmlFor="loginPassword">Password</label>
                    </div>
                    <div className="input-group">
                        <input name="phone" type="text" onChange={handleInput} required></input>
                        <label htmlFor="loginPassword">Phone</label>
                    </div>
                    <button onClick={postData} className="submit-btn">Register</button>
                </form>
        </>
    );
}

export default SignUp;