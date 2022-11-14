import { createContext, useState } from "react";
import axios from "axios";
export const AppContext = createContext()
export default function AppContextProvider({ children }) {
    const [data, setData] = useState([])
    const [isRegister,setIsRegister]=useState(false);
    const signupInitState = {name:"",email:"",mobile:"",description:"",username: "", password: "" };
    const [userSignupDetails, setUserSignupDetails] = useState(signupInitState)
    const loginInitState = { username: "", password: "" };
    const [userLoginDetails, setUserLoginDetails] = useState(loginInitState)
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin,setIsAdmin]=useState(false)
    const [username,setUsername]=useState('');
    const initSearchMeal = { name: "", category: "" }
    const [searchMeal, setSearchMeal] = useState(initSearchMeal)
    const [cart, setCart] = useState([]);
    const newMealInit={name:"",description:"",image:"",category:"",price:""};
    const [newMeal,setNewMeal]=useState(newMealInit)
    let api = 'http://localhost:4000/api/humanityMeals'
    const getData = () => {
        return axios.get(api).then(res => setData(res.data))
    }
    const handleLogin = () => {
        setIsLogin(!isLogin)
    }
    const onChangehandleSearch = (e) => {
        const { name, value } = e.target;
        setSearchMeal({ ...searchMeal, [name]: value })
    }
    const onClickhandleSearch = (searchMeal) => {
        return axios.get(api, {
            params: {
                name: searchMeal.name
            }
        }).then(res => setData(res.data))
    }

    const sortByPrice = (order) => {
        return axios.get(api, {
            params: {
                _sort: 'price',
                _order: order
            }
        }).then(res => setData(res.data))
    }

    // here I am adding products into cart
    const handleCart = (meal) => {
        setCart([...cart, meal])
        alert(`Hey ${meal.name} is added into your basket`)
    }
    const deleteMealById = (price) => {
        let new_cart = cart.filter((el) => {
            return el.price !== price
        })
        setCart(new_cart)
    }

    const onChangeSignupDetails = (e) => {
        const { name, value } = e.target;
        setUserSignupDetails({ ...userSignupDetails, [name]: value })
    }

    const signupUser = async() => {
        const url = "https://masai-api-mocker.herokuapp.com/auth/register";
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userSignupDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res=await res.json();
        if(res.error){
            alert('User already exist, Kindly try to change username or password')
        }else{
            alert('SignUP Successfully, Redirecting you to login');
            setUserSignupDetails(res.username)
            console.log(res)
            setIsRegister(true)
        }
    }

    const onChangeLoginDetails = (e) => {
        const { name, value } = e.target;
        setUserLoginDetails({ ...userLoginDetails, [name]: value })
    }

    const loginUser = async () => {
        const url = "https://masai-api-mocker.herokuapp.com/auth/login";
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userLoginDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res=await res.json();
       console.log(userLoginDetails)
        if(res.error){
            alert('Kindly Check your Username or Password, Its incorect')
        }else{
            alert('Login Successfully');
            console.log(res)
            setUsername(res.username)
            setIsLogin(true)
        }
    }

    // admin login
    const adminLogin=()=>{
        const username='Ritik',password='gopu'
        if(username===userLoginDetails.username && password===userLoginDetails.password){
            setIsAdmin(true)
            setIsLogin(true)
            alert(`Welcome again ${username} Admin`);
        }else{
            alert('Wrong Credentials');
        }
    }

    const newMealhandler=(e)=>{
        const {name,value}=e.target;
        name==='price'?setNewMeal({...newMeal,[name]:+value}):setNewMeal({...newMeal,[name]:value})
        ;
    }
    const addNewMeal=()=>{
        alert('New Meal has added')
        return axios.post(api,newMeal);
    }
    const deleteMeal=async(description)=>{
        let res= await fetch(`${api}?description=${description}`,{
            method:'DELETE'
        });
    }
    let value = { data,isRegister, isLogin,isAdmin, getData, handleLogin,adminLogin,deleteMealById,userSignupDetails,userLoginDetails,newMeal,newMealhandler,addNewMeal,signupUser,onChangeSignupDetails,onChangeLoginDetails, loginUser, searchMeal, cart, onChangehandleSearch, onClickhandleSearch, sortByPrice, handleCart,deleteMeal }
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}