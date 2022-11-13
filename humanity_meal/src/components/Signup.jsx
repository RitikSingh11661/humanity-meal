import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

export default function Signup(){   
    const {onChangeSignupDetails,signupUser,isRegister} = useContext(AppContext);
    if(isRegister) {
        return <Navigate to="/login"/>;
      }
     return(
        <div style={{width:'30vw',margin:'auto',height:'40vh',textAlign:'center',marginBlock:'5vh',border:'1px solid blue'}}>
            <h1>SignUP</h1> 
            <div >
                <label htmlFor="">Name : &ensp;&ensp;&ensp;&ensp;&ensp;</label>
                <input type="text" name="name" onChange={(e)=>onChangeSignupDetails(e)} placeholder='Enter name'/><br/>
                <label htmlFor="">Email :&ensp; &ensp;&ensp;&ensp;&ensp;</label>
                <input type="email" name="email" onChange={(e)=>onChangeSignupDetails(e)} placeholder='Enter email'/><br/>
                <label htmlFor="">Mobile No. : </label>
                <input type="number" name="mobile" onChange={(e)=>onChangeSignupDetails(e)} placeholder='Enter mobile no'/><br/>
                <label htmlFor="">Username : &ensp;</label>
                <input type="text" name="username" onChange={(e)=>onChangeSignupDetails(e)} placeholder="Enter your username" /><br />
                <label htmlFor="">Password : &ensp;&ensp;</label>
                <input type="text" name="password" onChange={(e)=>onChangeSignupDetails(e)} placeholder="Enter your password" />
            </div>
            <button onClick={signupUser}>SignUp</button>
        </div>
    )
}