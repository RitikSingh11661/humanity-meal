import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

export default function Signup() {
    const { onChangeSignupDetails, signupUser, isRegister } = useContext(AppContext);
    if (isRegister) {
        return <Navigate to="/login" />;
    }
    return (
        <div style={{ width: '30vw', margin: 'auto', height: '50vh', textAlign: 'center', marginBottom: '5vh', background: 'blue', color: 'white' }}>
            <h1>SignUP</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', margin: 'auto', height: '40vh', textAlign: 'center' }}>
                <div>
                    <label htmlFor="">Name : &ensp;&ensp;&ensp;&ensp;&ensp;</label>
                    <input type="text" name="name" onChange={(e) => onChangeSignupDetails(e)} placeholder='Enter name' /><br />
                </div>
                <div>
                    <label htmlFor="">Email :&ensp; &ensp;&ensp;&ensp;&ensp;</label>
                    <input type="email" name="email" onChange={(e) => onChangeSignupDetails(e)} placeholder='Enter email' /><br />
                </div>
                <div>
                    <label htmlFor="">Mobile No. : </label>
                    <input type="number" name="mobile" onChange={(e) => onChangeSignupDetails(e)} placeholder='Enter mobile no' /><br />
                </div>
                <div>
                    <label htmlFor="">Username : &ensp;</label>
                    <input type="text" name="username" onChange={(e) => onChangeSignupDetails(e)} placeholder="Enter your username" /><br />
                </div>
                <div>
                    <label htmlFor="">Password : &ensp;&ensp;</label>
                    <input type="password" name="password" onChange={(e) => onChangeSignupDetails(e)} placeholder="Enter your password" />
                </div>
                <div>
                <button onClick={signupUser}>SignUp</button>
                </div>
            </div>
        </div>
    )
}