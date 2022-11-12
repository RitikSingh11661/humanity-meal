import { createContext, useState } from "react";
import axios from "axios";
export const AppContext=createContext()
export default function AppContextProvider({children}){
    // const types={}
    // const initState={data:[],login:false}
    const [data,setData]=useState([])
    const [isLogin,setIsLogin]=useState(false);
    const initSearchMeal={name:"",category:""}
    const [searchMeal,setSearchMeal]=useState(initSearchMeal)
    let api='http://localhost:4000/api/humanityMeals'
    const getData=()=>{
        return axios.get(api).then(res=>setData(res.data))
    }
    const handleLogin=()=>{
        setIsLogin(!isLogin)
    }
    
    const onChangehandleSearch=(e)=>{
        const {name,value}=e.target;
        setSearchMeal({...searchMeal,[name]:value})         
    }
    const onClickhandleSearch=(searchMeal)=>{
        return axios.get(api,{
            params:{
                name:searchMeal.name
            }
        }).then(res=>setData(res.data))
    }

    const sortByPrice=(order)=>{
      console.log(' ', order)
        return axios.get(api,{
            params:{
                _sort:'price',
                _order:order
            }
        }).then(res=>setData(res.data))
    }
    let value={data,isLogin,getData,handleLogin,searchMeal,onChangehandleSearch,onClickhandleSearch,sortByPrice}
    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}