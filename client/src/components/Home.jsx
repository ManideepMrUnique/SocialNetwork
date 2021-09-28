import {  useState } from 'react';
import Login from './Login';
import Typed from "react-typed";
import SignUp from './SignUp';

import { createContext } from 'react';
const funCPassed=createContext();
const Home=()=>{
    const [val,setVal]=useState(true);
    return (
        <>
            <div className="content-wrapper">
            <div className="introduction">
            <Typed
                    className="NotTyped-text"
                    strings={["Dear","User"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
            <br/>
            {val?<h2>Register</h2>:<h2>Login</h2>}
            <br/>
            <br/>
            <br/>
            </div>
            <funCPassed.Provider value={setVal}>
                <div className="main-content">
                    {val?<SignUp/>:<Login/>}
                </div>
            </funCPassed.Provider>
            </div>
        </>
    );
}

export default Home;

export {funCPassed};