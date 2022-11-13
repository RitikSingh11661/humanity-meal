import { useContext,useEffect} from "react"
import { AppContext } from "../context/AppContextProvider"
import Product from "./Product";

export default function Admin() {
    const {data,getData,searchMeal,onChangehandleSearch,onClickhandleSearch,sortByPrice,newMeal,newMealhandler,addNewMeal}=useContext(AppContext);
    useEffect(() => {
       getData()
    }, [])

    return (
        <div style={{ background: '#f3f3f3',textAlign:'center'}}>
            <div style={{ background: '#ebebeb' }}>
                <div style={{ width: '81vw', margin: 'auto', paddingBottom: '6vh' }}>
                    <div style={{ width: '37vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontSize: '30px', borderRight: '1px solid', paddingRight: '2vw', }}>Meat-Free Deals</p>
                        <p style={{ fontSize: '30px', color: 'grey' }}> Restaurants In India</p>
                    </div>
                    <p style={{ textAlign: 'start' }}>Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!</p>
                    <p style={{ textAlign: 'start' }}>Download our <a href="https://apps.apple.com/app/kindmeal-my/id857891884?ls=1">mobile app</a> now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '5vh' }}>
                        <input name="name" onChange={(e)=>onChangehandleSearch(e)} type="text" placeholder="Seach Shop or Deal Name" style={{ height: '5vh', width: '20vw', fontSize: '17px' }} />
                        <select name="category" onChange={(e)=>onChangehandleSearch(e)} style={{ height: '6vh', width: '13vw', fontSize: '17px' }}>
                            <option >All Categories</option>
                            <option value="Burger">Burger</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Salad">Salad</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinees">Chinees</option>
                        </select>
                        <button onClick={()=>onClickhandleSearch(searchMeal)} style={{ width: "13vw", height: '6vh', color: 'white', fontSize: '17px', fontWeight: 'bold', border: 'none', borderRadius: '5%', background: 'red' }}>Search Deals</button>
                        <div style={{display:"flex"}}>
                        <button onClick={()=>sortByPrice('asc')} style={{height:'4vh',width:'8vw',background:'yellow'}}>Price low to high</button>
                        <button onClick={()=>sortByPrice('desc')} style={{height:'4vh',width:'8vw',background:'lightyellow'}}>Price hight to low</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '5vh' }}>
                        <label style={{fontSize:'20px'}}>Add Meal : </label>
                        <input name="name" onChange={(e)=>newMealhandler(e)} type="text" placeholder="Meal Name" style={{ height: '5vh', width: '10vw', fontSize: '17px' }} />
                        <input name="description" onChange={(e)=>newMealhandler(e)} type="text" placeholder="Description" style={{ height: '5vh', width: '10vw', fontSize: '17px' }} />
                        <input name="price" onChange={(e)=>newMealhandler(e)} type="text" placeholder="Price" style={{ height: '5vh', width: '10vw', fontSize: '17px' }} />
                        <input type="url" name="image" onChange={(e)=>newMealhandler(e)} placeholder="Image link" style={{ height: '5vh', width: '10vw', fontSize: '17px' }}/>
                        <select name="category" onChange={(e)=>newMealhandler(e)} style={{ height: '6vh', width: '10vw', fontSize: '17px' }}>
                            <option >All Categories</option>
                            <option value="Burger">Burger</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Salad">Salad</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinees">Chinees</option>
                        </select>
                        <button onClick={addNewMeal} style={{background:'green',cursor:'pointer',fontWeight:'bold',height: '5vh', width: '10vw', fontSize: '17px' }}>Add Meal</button>
                    </div>
                </div>
            </div>
            <div>
                <img style={{ width: '81vw', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', margin: '10vh 0' }} src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" alt="ad" />
            </div>
            <div id="meal-deals" style={{width: '81vw',margin: 'auto' }}>
                <div style={{display:"grid",gridTemplateColumns:'repeat(2,37vw)',gap:'4vw'}}>
                   {data.map(item=><Product key={item.description} name={item.name} image={item.image} description={item.description} price={item.price}/>)}
                </div>
            </div>
            <div style={{ background: '#f3f3f3', marginTop: '15vh' }}>
                <img style={{ width: '81vw' }} src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="last" />
            </div>
        </div>
    )
}