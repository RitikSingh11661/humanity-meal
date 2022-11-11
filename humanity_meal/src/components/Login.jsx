import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

export default function Login(){   
    const {handleLogin,isLogin} = useContext(AppContext);   
    if(isLogin) {
        return <Navigate to="/mealdeals"/>;
      }
     return(
        <div style={{textAlign:'center',marginBlock:'5vh'}}>
            <h1>Login here for use this page</h1> 
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
