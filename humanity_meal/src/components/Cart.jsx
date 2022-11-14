import { MDBBtn,MDBCard,MDBCardBody,MDBCardImage,MDBCol,MDBContainer,MDBIcon,MDBInput,MDBRow,MDBTypography} from "mdb-react-ui-kit";
import React from "react";
import { DeleteIcon, ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";
import { useRef} from "react";

export default function Cart() {
    const { cart,deleteMealById} = useContext(AppContext)
    const priceRef=useRef({totalPrice:0})
    const order=()=>{
      console.log(' ', 'ordering')
        setTimeout(()=>{
            alert('Your Order has been Placed Successfully')
        },1000)
        setTimeout(()=>{
            alert('Your Order has delieverd to you')
        },2000)
        setTimeout(()=>{
            alert('Thanks for shopping with us , Come Back soon')
        },3000)
    }

    return (
        <section style={{ backgroundColor: "#eee", width: '81vw', margin: 'auto', boxSizing: 'border-box', padding: '2vw' }}>
            <MDBContainer >
                <MDBRow>
                    <MDBCol >
                        <MDBCard>
                            <MDBCardBody>
                                <MDBRow style={{ display: 'flex', justifyContent: 'space-evenly', width: '70vw', background: 'white', borderRadius: '1%', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', padding: '2vw' }}>
                                    <MDBCol lg="7">
                                        <MDBTypography tag="h5">
                                            <p style={{ fontSize: '20px' }}>Continue Shopping</p>
                                        </MDBTypography>
                                        <hr />
                                        <div style={{ display: 'flex', fontSize: '18px' }}>
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have {cart.length} meals in your cart</p>
                                            </div>
                                        </div>
                                        {cart.map((meal) => {
                                            priceRef.current.totalPrice+=meal.price;
                                            return (
                                                <MDBCard key={meal.description}>
                                                    <MDBCardBody style={{ boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', padding: '2vw', borderRadius: '5%' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '40vw' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '60%', alignItems: 'center' }}>
                                                                    <MDBCardImage
                                                                        src={meal.image}
                                                                        fluid className="rounded-3" style={{ width: "6vw", height: '12vh', borderRadius: '10%', marginRight: '2vw' }}
                                                                        alt="Shopping item" />
                                                                <div className="ms-3">
                                                                    <MDBTypography style={{ fontSize: '20px', fontWeight: 'bold' }}>{meal.name}</MDBTypography>
                                                                    <p style={{ fontSize: '13px' }}>{meal.description}</p>
                                                                </div>
                                                            </div>
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div style={{ width: "50px" }}>
                                                                    <MDBTypography tag="h5" style={{ fontSize: '20px' }}>1</MDBTypography>
                                                                </div>
                                                                <div style={{ width: "80px" }}>
                                                                    <MDBTypography style={{ fontSize: '20px', fontWeight: 'bold' }}>₹{meal.price}</MDBTypography>
                                                                </div>
                                                                    <DeleteIcon style={{cursor:'pointer'}} onClick={()=>deleteMealById(meal.price)}/>
                                                                    <MDBIcon fas icon="trash-alt" />
                                                            </div>
                                                        </div>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            )
                                        })}
                                    </MDBCol>

                                    <MDBCol lg="5">
                                        <MDBCard className="bg-primary text-white rounded-3">
                                            <MDBCardBody style={{ borderRadius: '2%', marginTop: '3vh', background: '#1d9bf0', color: 'white', width: '20vw', padding: '1vw' }}>
                                                <MDBTypography style={{ fontSize: '20px', fontWeight: 'bold' }}>Card details</MDBTypography>
                                                <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '30vh' }}>
                                                    <MDBInput className="mb-4" type="text" style={{ width: '90%', height: '5vh' }}
                                                        placeholder="Cardholder's Name" contrast />
                                                    <MDBInput className="mb-4" type="text" size="lg"
                                                        minLength="19" style={{ width: '90%', height: '5vh' }} placeholder="1234 5678 9012 3457" contrast />

                                                    <MDBRow style={{ display: 'flex' }}>
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" type="text" style={{ width: '82%', height: '5vh' }} placeholder="MM/YYYY" contrast />
                                                        </MDBCol>
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" type="text" style={{ width: '82%', height: '5vh' }} placeholder="&#9679;&#9679;&#9679;" contrast />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>
                                                <hr />

                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', width: '90%' }}>
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">₹{cart.length>0?priceRef.current.totalPrice:0}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', width: '90%' }}>
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">₹{cart.length>0?50:0}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', width: '90%' }}>
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">₹{cart.length>0?priceRef.current.totalPrice+50:0}</p>
                                                </div>
                                                <MDBBtn onClick={()=>order()} className="checkout" color="info" block size="lg" style={{width: '95%', height: '5vh', border: 'none', padding: '0 1vw', background: '#39c0ed', color: "white", fontSize: '17px', fontWeight: 'bold',cursor:'pointer' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <span>₹{cart.length>0?priceRef.current.totalPrice+50+18:0}</span>
                                                            <span>
                                                                Checkout{" "}
                                                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                                                <ArrowForwardIcon />
                                                            </span>
                                                        </div>
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}