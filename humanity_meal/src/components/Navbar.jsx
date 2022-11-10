import {Facebook, Twitter, Link45deg} from 'react-bootstrap-icons';
export default function Navbar() {
    const icon_styles = {
        width: "5vw",
        height: "6vh",
        color: "grey",
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center' }}>
                <div>
                    <img style={{width:"30vw"}} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-11-09/navbar_logo_582569.png" alt="nav_logo" />
                </div>
                <div>
                   <a href="https://www.kindmeal.my/widget.htm"><Link45deg style={icon_styles} /></a> 
                   <a href="https://www.facebook.com/KindMeal.my"><Facebook  style={icon_styles} /></a> 
                   <a href="https://twitter.com/KindMeal"><Twitter style={icon_styles} /></a> 
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", width: "25vw" }}>
                    <p>Login</p>
                    <button style={{ backgroundColor: "#4267B2", height: '2vw', width: '7vw', color: '#ffffff', fontSize: '16px' }}>Facebook</button>
                    <button style={{ backgroundColor: "#918989", height: '2vw', width: '7vw', color: '#ffffff', fontSize: '16px' }}>Email</button>
                    <p style={{ borderLeft: "1px solid", paddingLeft: "0.3vw" }}>Sign Up</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center', background: "#2bb673",color:'#ffffff',fontSize:'20px',padding:'0 3vw',height:'8vh'}}>
                <p>Home</p>
                <p>Meal Deals</p>
                <p>KindMoments</p>
                <p>Hot Picks</p>
                <p>Recipes</p>
                <p>Directory</p>
                <p>Articles</p>
                <p>Help</p>
            </div>
        </div>

    )
}