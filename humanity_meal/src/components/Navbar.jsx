import { Facebook, Twitter, Link45deg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';
import { useContext } from 'react';
export default function Navbar() {
    const icon_styles = {
        width: "5vw",
        height: "6vh",
        color: "grey",
    }
    
    const {isLogin,handleLogin}=useContext(AppContext)
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center' }}>
                <div>
                    <img style={{ width: "30vw" }} src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-11-09/navbar_logo_582569.png" alt="nav_logo" />
                </div>
                <div>
                    <a href="https://www.kindmeal.my/widget.htm"><Link45deg style={icon_styles} /></a>
                    <a href="https://www.facebook.com/KindMeal.my"><Facebook style={icon_styles} /></a>
                    <a href="https://twitter.com/KindMeal"><Twitter style={icon_styles} /></a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", width: "25vw" }}>
                    {/* {isLogin?<button onClick={handleLogin}>Logout</button>}                  */}
                    <button onClick={handleLogin}>{isLogin?'Logout':'Login'}</button>
                    <button style={{ backgroundColor: "#4267B2", height: '2vw', width: '7vw', color: '#ffffff', fontSize: '16px' }}>Facebook</button>
                    <button style={{ backgroundColor: "#918989", height: '2vw', width: '7vw', color: '#ffffff', fontSize: '16px' }}>Email</button>
                    <p style={{ borderLeft: "1px solid", paddingLeft: "0.3vw" }}>Sign Up</p>
                </div>
            </div>
            <div className='nav' style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center', background: "#2bb673",fontSize: '20px', padding: '0 3vw', height: '8vh'}}>
                <Link to='/'>Home</Link>
                <Link to='/mealdeals'>Meal Deals</Link>
                <Link to='/kindmoments'>KindMoments</Link>
                <Link to='/hotpicks'>Hot Picks</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/directory'>Directory</Link>
                <Link to='/articles'>Articles</Link>
                <Link to='/help'>Help</Link>
            </div>
        </div>
    )
}