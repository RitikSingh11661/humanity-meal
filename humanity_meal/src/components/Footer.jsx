export default function Footer() {
    return (
        <div style={{ background: "#2bb673",paddingTop: '3vh',textAlign:'center'}}>
            <table style={{ color: 'white', marginBottom: '10vh', margin: 'auto' }}>
                <thead>
                <tr style={{ color: '#ffffff', fontSize: '18px' }}>
                    <th>General</th>
                    <th>Features</th>
                    <th>Social Media</th>
                    <th>Media</th>
                    <th>PetFinder.my</th>
                </tr>
                </thead>
                <tbody>
                    <tr style={{ margin: '5vw' }}>
                        <td>Home</td>
                        <td>Meal-Free Deals</td>
                        <td>HumanityMeal Widget</td>
                        <td>iPhone & iPod App</td>
                        <td>Adopt A Pet</td>
                    </tr>
                    <tr style={{ margin: '5vw' }}>
                        <td>Sign Up</td>
                        <td>Tasty Menus</td>
                        <td>Facebook</td>
                        <td>Android App</td>
                        <td>Smartphone Apps</td>
                    </tr>
                    <tr style={{ margin: '5vw' }}>
                        <td>Businessess / Restaurants</td>
                        <td>Meat-Free Recipes</td>
                        <td>Twitter</td>
                        <td>WAGazine</td>
                    </tr>
                    <tr style={{ margin: '5vw' }}>
                        <td>Advertising</td>
                        <td>Meat-Free Recipes</td>
                        <td>Member-Free Recipes</td>
                        <td>Discusssion Fund</td>
                    </tr>
                    <tr style={{ margin: '5vw' }}>
                        <td>About HumanityMeal</td>
                        <td>Member Recommendation</td>
                        <td>Instagram</td>
                        <td>Medical Fund</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p style={{ color: 'white', marginTop: '5vh' }}>Copyright &copy; HumanityMeal.my, 2014 - 2022. All rights reserved.</p>
                <p style={{ color: 'white', marginTop: '-2vh' }}>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</p>
            </div>
        </div>
    )
}