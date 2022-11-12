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
    const cart_icon_styles = {
        width: "2vw",
        height: "6vh",
    }

    const { isLogin, handleLogin } = useContext(AppContext)
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
                    <button onClick={handleLogin}>{isLogin ? 'Logout' : 'Login'}</button>
                    <button style={{ backgroundColor: "#4267B2", height: '2vw', width: '7vw', color: '#ffffff', fontSize: '16px' }}>Facebook</button>
                    <button style={{ backgroundColor: "#918989", height: '2vw', width: '7vw', color: '#ffffff', fontSize: '16px' }}>Email</button>
                    <p style={{ borderLeft: "1px solid", paddingLeft: "0.3vw" }}>Sign Up</p>
                </div>
                <Link to='/cart'><svg style={cart_icon_styles} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></Link>

            </div>
            <div className='nav' style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center', background: "#2bb673", fontSize: '20px', padding: '0 3vw', height: '8vh' }}>
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