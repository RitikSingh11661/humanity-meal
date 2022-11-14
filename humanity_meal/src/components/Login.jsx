import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

// login credential =>username = Ritik & passoword = gopu

export default function Login() {
    const { handleLogin, isLogin, onChangeLoginDetails, loginUser, adminLogin } = useContext(AppContext);
    if (isLogin) {
        return <Navigate to="/mealdeals" />;
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Login here for use this page</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '30vw', margin: 'auto', height: '40vh', textAlign: 'center', marginBottom: '5vh', background: 'blue', color: 'white' }}>
            <div>
                <h1>Login</h1>
                <label htmlFor="">Username : </label>
                <input type="text" name="username" onChange={(e) => onChangeLoginDetails(e)} placeholder="Enter your username" /><br />
                <label htmlFor="">Password : </label>
                <input type="password" name="password" onChange={(e) => onChangeLoginDetails(e)} placeholder="Enter your password" />
            </div>
            <div>
                <label htmlFor="">Login as User  &rarr;</label>
                <button onClick={loginUser}>Login</button>
            </div>
            <div>
                <label htmlFor="">Login as Admin &rarr;</label>
                <button onClick={adminLogin}>Login</button>
            </div>
            <div>
                <button onClick={<Navigate to='/signup' />} >Signup</button>
            </div>
        </div>
        </div>
        
    )
}
