export default function HomePage() {
    // https://www.kindmeal.my/images/deal-feature-vignette.png
    // https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg , https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg

    const imageStyle = {
        width: '10%'
    }
    return (
        <div>
            <div style={{ marginBottom: '10', background: '#f3f3f3', paddingBottom: '10vh' }}>
                <div style={{ width: '81vw', margin: 'auto', display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px' }}>
                    <img width={'70%'} height={'406px'} src="https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg" alt="daal" />
                    <img width={'30%'} height={'406px'} src="https://www.kindmeal.my/photos/shop/5/570-4268-m.jpg" alt="food" />
                </div>
                <div style={{ width: '81vw', margin: 'auto', background: 'white', display: 'flex', justifyContent: 'space-evenly',height: '25vh', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px' }}>
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/6/687-4507-m.jpg" alt="food" />
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg" alt="food" />
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg" alt="food" />
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/1/177-1118-m.jpg" alt="food" />
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/6/686-4475-m.jpg" alt="food" />
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg" alt="food" />
                    <img width={'12%'} height='75%' src="https://www.kindmeal.my/photos/deal/7/716-5042-m.jpg" alt="food" />
                </div>
                <div style={{ width: '81vw', margin: 'auto', background: 'white', marginTop: '7vh', alignItems: 'center', boxSizing: 'border-box', padding: '0 2vw', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7vh', alignItems: 'center' }}>
                        <h2 style={{ color: '#666666' }}>Latest News & Videos</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'blue', fontSize: '23px' }}>
                            <p>Save Lives with Your Blog</p>
                            <p>News & Articles</p>
                            <p>Follow Our Facebook</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://scontent-sin6-2.xx.fbcdn.net/v/t15.5256-10/298969854_601112454850438_5265806124209675410_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=WZDVFJjewEIAX9CbLYZ&_nc_ht=scontent-sin6-2.xx&edm=ALdPpPkEAAAA&oh=00_AfCPhVbU372ZTI_eG36g5PH099gSzR2kNc5vIoaCU2uIsg&oe=6370D918" alt="" />
                            <p>Mama And Baby Elephant Get Stuck In 7 Foot Hole</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://scontent-sin6-4.xx.fbcdn.net/v/t15.5256-10/271582707_265022372394889_56974782009965446_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=AvnOZmUGPm4AX9yLKFO&_nc_ht=scontent-sin6-4.xx&edm=ALdPpPkEAAAA&oh=00_AfAztj_7rPeAb9ufMMKe0S4n-Y7tOXrT4TMqEUunQbwiCg&oe=6370EA63" alt="" />
                            <p>Watch These White Fluffy Babies Turn Into The Most Gorgeous ..</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://scontent-sin6-3.xx.fbcdn.net/v/t15.5256-10/117878469_336434917736037_3866333495709289709_n.jpg?stp=dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=LJ4Mzxi0yckAX9Yttmo&_nc_ht=scontent-sin6-3.xx&edm=ALdPpPkEAAAA&oh=00_AfALAyKq-byoZRN9Umz3kmnw9y_L0nxRhfeNOHaoTL7OMg&oe=63721345" alt="" />
                            <p>Goulash & Dumplings From Speedy Bosh!</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://scontent-sin6-4.xx.fbcdn.net/v/t15.5256-10/289716764_300414298892410_2889986081793667301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RwwitqaIrFQAX8XdIRZ&_nc_ht=scontent-sin6-4.xx&edm=ALdPpPkEAAAA&oh=00_AfC99hkji_eJ-jZ4q1Bx_ogMD2GOeBpDB6UtfEzDxoT2hQ&oe=6370DF70" alt="" />
                            <p>Best Friends At Off The Plate Sanctuary</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://scontent-sin6-3.xx.fbcdn.net/v/t15.5256-10/291422646_573014587525199_3892685742425568101_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=pshf3n2STnkAX-cNyKG&_nc_ht=scontent-sin6-3.xx&edm=ALdPpPkEAAAA&oh=00_AfCc8oBZn6JwfRV4qwNYreGvJkO7rWBCGQ8c5wml7zl6RQ&oe=637219FF" alt="" />
                            <p>A Sealabration Of Ocean Pups</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '81vw', margin: 'auto', background: 'white', marginTop: '7vh', alignItems: 'center', boxSizing: 'border-box', padding: '0 2vw', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7vh', alignItems: 'center' }}>
                        <h2 style={{ color: '#666666' }}>Yummylicious Moments</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'blue', fontSize: '23px' }}>
                            <p>Secret Recipes</p>
                            <p>Member Hot Picks</p>
                            <p>Photo Moments</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24604-47676-s.jpg" alt="" />
                            <p>Seed Organic Farm & Wholesome Dining</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24597-47663-s.jpg" alt="" />
                            <p>Malaysian Favorites & Ramen</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24596-47660-s.jpg" alt="" />
                            <p>Malaysian Favorites & Ramen</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24595-47657-s.jpg" alt="" />
                            <p>Best Friends At Off The Plate Sanctuary</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24594-47652-s.jpg" alt="" />
                            <p>A Sealabration Of Ocean Pups</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '81vw', margin: 'auto', background: 'white', marginTop: '7vh', alignItems: 'center', boxSizing: 'border-box', padding: '0 2vw', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7vh', alignItems: 'center' }}>
                        <h2 style={{ color: '#666666' }}>Discover Restaurants</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'blue', fontSize: '23px' }}>
                            <p>Vegetarian Directory</p>
                            <p>Restaurant Menu</p>
                            <p>Food Map</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24604-47676-s.jpg" alt="" />
                            <p>Seed Organic Farm & Wholesome Dining</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24597-47663-s.jpg" alt="" />
                            <p>Malaysian Favorites & Ramen</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24596-47660-s.jpg" alt="" />
                            <p>Malaysian Favorites & Ramen</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24595-47657-s.jpg" alt="" />
                            <p>Best Friends At Off The Plate Sanctuary</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/moment/24/24594-47652-s.jpg" alt="" />
                            <p>A Sealabration Of Ocean Pups</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '81vw', margin: 'auto', background: 'white', marginTop: '7vh', alignItems: 'center', boxSizing: 'border-box', padding: '0 2vw', boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7vh', alignItems: 'center' }}>
                        <h2 style={{ color: '#666666' }}>Amazing Superheroes</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'blue', fontSize: '23px' }}>
                            <p>Latest Buzz</p>
                            <p>Lifestyle</p>
                            <p>Animals Heros</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/member/15/15988-m.jpg" alt="" />
                            <p>ThongKar San</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/member/13/13310-m.jpg" alt="" />
                            <p>Katie Chong</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/member/32/32883-m.jpg" alt="" />
                            <p>Dakshan Krishnamurthy</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/member/38/38007-m.jpg" alt="" />
                            <p>Minhann Choong</p>
                        </div>
                        <div style={{ width: '14vw', lineGap: '1vh' }}>
                            <img style={{ width: '14vw', height: '32vh', borderRadius: '3%' }} className="imageStlye" src="https://www.kindmeal.my/photos/member/13/13208-m.jpg" alt="" />
                            <p>Vv Viyan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{textAlign:'center'}}>
                    <p style={{ fontSize: '30px', color: '#666666' }}>Introducing India's Pioneering Meat-Free Lifestyle Platform</p>
                    <div style={{ display: 'flex', width: '35vw', margin: 'auto', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontSize: '20px', color: 'grey' }}>Brought to you by</p>
                        <img width={'65%'} src="https://www.kindmeal.my/images/logo-petfinder-v2.png" alt="logo" />
                    </div>
                    <p style={{ fontSize: '22px', color: '#666666' }}>Instant coupon & dining. No upfront coupon payment, booking or printing.</p>
                    <div style={{ width: '81vw', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', width: '17vw', height: '35vh', borderRadius: '5%', padding: '2vw  1vw', }}>
                            <img src="https://www.kindmeal.my/images/intro_deal.png" alt="" />
                            <p>Get Great Deals</p>
                            <p>Show our FREE digital coupons to instantly enjoy exciting deals</p>
                        </div>
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', width: '17vw', height: '35vh', borderRadius: '5%', padding: '2vw  1vw', }}>
                            <img src="https://www.kindmeal.my/images/intro_kindmoment.png" alt="" />
                            <p>Share KindMoments</p>
                            <p>Spread the joy by sharing your yummy dining moments</p>
                        </div>
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', width: '17vw', height: '35vh', borderRadius: '5%', padding: '2vw  1vw', }}>
                            <img src="https://www.kindmeal.my/images/intro_menu.png" alt="" />
                            <p>Discover Delicious Food</p>
                            <p>Explore the latest exquisite offerings and creative menus</p>
                        </div>
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16)0px 1px 4px', width: '17vw', height: '35vh', borderRadius: '5%', padding: '2vw  1vw', }}>
                            <img src="https://www.kindmeal.my/images/intro_friends.png" alt="" />
                            <p>Meet Food Lovers</p>
                            <p>Make new, compassionate friends and share great food tips</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '21px', color: '#666666', width: '75vw', margin: '15vh auto auto auto' }}>Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free. Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</p>
                    <div style={{ width: '35vw', height: '17vh', margin: '10vh auto auto auto', background: 'red', color: 'white', borderRadius: '5%'}}>
                        <p style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '0' }}>Join HumanityMeal Now</p>
                        <p style={{ fontSize: '17px', fontWeight: 'bold' }}>Your tasty journey begins here</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'grey', fontSize: '27px' }}>Featured On</h3>
                        <img style={{ width: '81vw' }} src="https://www.kindmeal.my/images/media-feature2.png" alt="" />
                    </div>
                    <div style={{ background: '#f3f3f3', marginTop: '15vh' }}>
                        <img style={{ width: '81vw' }} src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt="last" />
                    </div>
                </div>
            </div>
        </div>
    )
}
