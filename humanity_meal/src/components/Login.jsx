import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

// login credential =>username = Ritik & passoword = gopu

export default function Login(){   
    const {handleLogin,isLogin,onChangeLoginDetails,loginUser,adminLogin} = useContext(AppContext);
    if(isLogin) {
        return <Navigate to="/mealdeals"/>;
      }
     return(
        <div style={{width:'30vw',margin:'auto',height:'40vh',textAlign:'center',marginBlock:'5vh',border:'1px solid blue'}}>
            <h1>Login here for use this page</h1> 
            <div>
                <label htmlFor="">Username : </label>
                <input type="text" name="username" onChange={(e)=>onChangeLoginDetails(e)} placeholder="Enter your username" /><br />
                <label htmlFor="">Password : </label>
                <input type="password" name="password" onChange={(e)=>onChangeLoginDetails(e)} placeholder="Enter your password" />
            </div>
            <label htmlFor="">Login as User  &rarr;</label>
            <button onClick={loginUser}>Login</button><br />
            <label htmlFor="">Login as Admin &rarr;</label>
            <button onClick={adminLogin}>Login</button><br />
            <button onClick={<Navigate to='/signup'/>}>Signup</button>
        </div>
    )
}
