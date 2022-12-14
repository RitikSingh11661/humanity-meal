import { Routes,Route } from "react-router-dom";
import Cart from "../components/Cart";
import HomePage from "../components/HomePage";
import Signup from "../components/Signup";
import Login from "../components/Login";
import MealDeals from "../components/MealDeals";
import PrivateRoute from "../components/PrivateRoute";
import Admin from "../components/Admin";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/mealdeals" element={<PrivateRoute><MealDeals/></PrivateRoute>}/>
            <Route path="/kindmoments" element={<h1>Kind Moments</h1>}/>
            <Route path="/hotpicks" element={<h1>Hot Picks</h1>}/>
            <Route path="/Recipes" element={<h1>Recipes</h1>}/>
            <Route path="/Directory" element={<h1>Directory</h1>}/>
            <Route path="/Articles" element={<h1>Articles</h1>}/>
            <Route path="/Help" element={<h1>Help</h1>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
    )
}