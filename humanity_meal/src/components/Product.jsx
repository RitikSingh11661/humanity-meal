import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";

export default function Product({id,image,name,description,price}){
    const {handleCart,isAdmin,deleteMeal}=useContext(AppContext);
    return(
        <div style={{borderRadius:'3%', background: 'white',height:'82vh'}}>
            <img style={{width:'37vw',height:'50vh',borderRadius:'3% 0 0'}} src={image} alt="" />
            <p style={{color:'grey'}}>{name}</p>
            <p>Description :- {description}</p>
            <p style={{fontSize:"20px"}}>Price : ₹{price}</p>
            {isAdmin?<button onClick={()=>deleteMeal(description)} style={{background:'red',color:'white',width:'7vw',height:'5vh',cursor:'pointer'}}>Remove</button>:<button style={{background:'green',color:'white',width:'7vw',height:'5vh',cursor:'pointer'}} onClick={()=>handleCart({image,name,description,price})}>Add to Basket</button>}
        </div>
    )
}