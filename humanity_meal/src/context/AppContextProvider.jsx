import { createContext, useState } from "react";
import axios from "axios";
export const AppContext=createContext()
export default function AppContextProvider({children}){
    // const types={}
    const initState={data:[],login:false}
    const [data,setData]=useState([])
    const [isLogin,setIsLogin]=useState(false)
    const getData=()=>{
        let api='http://localhost:4000/api/humanityMeals'
        return axios.get(api).then(res=>setData(res.data))
    }
    const handleLogin=()=>{
        setIsLogin(!isLogin)
    }

    let value={data,isLogin,getData,handleLogin}
    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}