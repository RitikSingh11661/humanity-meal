import './App.css';
import Navbar from './components/Navbar';
import Hompage from './components/Homepage';
import MealDeals from './components/MealDeals';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Hompage/> */}
      <MealDeals/>
      <Footer/>
    </div>
  );
}

export default App;
