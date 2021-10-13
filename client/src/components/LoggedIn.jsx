//overwritten Css
const loggedinStyle={
    backgroundColor:"black",
    height:"100vh",
    width:"100%"
}


//overwritten Css


const LoggedIn=()=>{
    return(
        <>
        <div style={loggedinStyle} className="loggedin">
            <h1 style={{color:"white"}}>Yes boys</h1>
        </div>
        </>
    );
}

export default LoggedIn;