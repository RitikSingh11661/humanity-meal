import { useContext,useEffect} from "react"
import { AppContext } from "../context/AppContextProvider"
import Product from "./Product";

export default function MealDeals() {
    const {data,isLogin,getData}=useContext(AppContext);
    useEffect(() => {
       getData()
    }, [])
    console.log(data)
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
                        <input type="text" placeholder="Seach Shop or Deal Name" style={{ height: '5vh', width: '20vw', fontSize: '17px' }} />
                        <select name="category" style={{ height: '6vh', width: '13vw', fontSize: '17px' }}>
                            <option value="Pasta">All Categories</option>
                            <option value="Burger">Burger</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Salad">Salad</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Indian">Indian</option>
                        </select>
                        <button style={{ width: "13vw", height: '6vh', color: 'white', fontSize: '17px', fontWeight: 'bold', border: 'none', borderRadius: '5%', background: 'red' }}>Search Deals</button>
                    </div>
                </div>
            </div>
            <div>
                <img style={{ width: '81vw', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', margin: '10vh 0' }} src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" alt="ad" />
            </div>
            <div id="meal-deals" style={{width: '81vw',margin: 'auto' }}>
                <div style={{display:"grid",gridTemplateColumns:'repeat(2,37vw)',gap:'4vw'}}>
                   {data.map(item=><Product key={item.name} name={item.name} image={item.image} description={item.description} price={item.price}/>)}
                </div>
            </div>
            <div style={{ background: '#f3f3f3', marginTop: '15vh' }}>
                <img style={{ width: '81vw' }} src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="last" />
            </div>
        </div>
    )
}