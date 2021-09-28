import Buttons  from "./Buttons";

const Login=()=>{
    return (
        <>
                <form className="form">
                    {/* <h2>Login</h2> */}
                    <Buttons/>
                    <div className="input-group">
                        <input type="text" required></input>
                        <label htmlFor="loginEmail">Email</label>
                    </div>


                    <div className="input-group">
                        <input type="password" required></input>
                        <label htmlFor="loginPassword">Password</label>
                    </div>

                    <input type="submit" value="submit" className="submit-btn"></input>
                </form>
        </>
    );
}

export default Login;