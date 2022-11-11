import './App.css';
// import { useEffect,useState} from 'react';
import googleOneTap from 'google-one-tap'
import Navbar from './components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './components/Footer';


// const options = {
//   client_id: process.env.HUMANITYMEALS_APP_GOOGLE_CLIENT_ID, // required
//   auto_select: false, // optional
//   cancel_on_tap_outside: false, // optional
//   context: "signin", // optional
// };
//   function App() {
    
//     const [loginData, setLoginData] = useState(localStorage.getItem("loginData")
//         ? JSON.parse(localStorage.getItem("loginData")): null);
    
//     useEffect(() => {
//       if (!loginData) {
//         googleOneTap(options, async (response) => {
//           console.log(response);
//           const res = await fetch("/api/google-login", {
//             method: "POST",
//             body: JSON.stringify({
//               token: response.credential,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
    
//           const data = await res.json();
//           setLoginData(data);
//           localStorage.setItem("loginData", JSON.stringify(data));
//         });
//       }
//     }, [loginData]);
    
//     const handleLogout = () => {
//       localStorage.removeItem("loginData");
//       setLoginData(null);
//     }
//   console.log(' ', process.env.HUMANITYMEALS_APP_GOOGLE_CLIENT_ID);
//   console.log(' ',process.env.RITIK);
//   return (
//     <div className="App">
//       <h1>Implement "Google One-Tap Login" In React and Node.js</h1>
//       {!loginData ? (
//             <div>
//               <h3>
//                 You "Basir Jafarzadeh" logged in as basir.jaarzadeh@gmail.com
//               </h3>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <div>Not logged in</div>
//           )}     
//     </div>
//   );
// }

function App(){
  return(
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
