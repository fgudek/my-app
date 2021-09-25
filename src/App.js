import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen.js';
import Reservationscreen from './screens/Reservationscreen';
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'
import BookACourtSummary from "./components/BookACourtSummary";



function App() {
  return (
    <div className="App">
        <Navbar/>
        
        <BrowserRouter>
        <BookACourtSummary />

        <Route path="/home" exact component={Homescreen} />
        <Route path="/reservation/:terenid/:stime/:etime" exact component={Reservationscreen} />
        <Route path ="/login" exact component = {Loginscreen} />
        <Route path ="/register" exact component = {Registerscreen} />
        </BrowserRouter>



    </div>




  );
}

export default App;
