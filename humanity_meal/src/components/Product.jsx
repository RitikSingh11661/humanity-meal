export default function Product({image,name,description,price}){
    return(
        <div style={{borderRadius:'3%', background: 'white',height:'82vh'}}>
            <img style={{width:'37vw',height:'50vh',borderRadius:'3% 3% 0'}} src={image} alt="" />
            <p style={{color:'grey'}}>{name}</p>
            <p>Description :- {description}</p>
            <p style={{fontSize:"20px"}}>Price : ₹{price}</p>
            <button>Add to Basket</button>
        </div>
    )
}