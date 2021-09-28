import { useContext } from "react";

import { funCPassed } from "./Home";
const Buttons=()=>{
    const setVal=useContext(funCPassed);
    return (
        <>
             <div className="btn-content">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        setVal(false);
                    }}>Login</button>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        setVal(true);
                    }}>SignUp</button>
                </div>
        </>
    );
}

export default Buttons;