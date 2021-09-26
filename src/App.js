import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen.js';
import Reservationscreen from './screens/Reservationscreen';
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'
import BookACourtSummary from "./components/BookACourtSummary";
import background from "./img/placeholder.png";
import Profilescreen from './screens/Profilescreen';
import Profile from './screens/Profile';
import MojeRezervacije from './screens/MojeRezervacije';


function App() {

  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
       
        <Route path="/" exact component={BookACourtSummary} />

        <Route path="/home" exact component={Homescreen} />
        <Route path="/reservation/:terenid/:stime/:etime" exact component={Reservationscreen} />
        <Route path ="/login" exact component = {Loginscreen} />
        <Route path ="/register" exact component = {Registerscreen} />
        <Route path ="/profile" exact component = {Profilescreen} />
        <Route path ="/Pro" exact component = {Profile} />
        <Route path ="/Rezervacije" exact component = {MojeRezervacije} />

        </BrowserRouter>

       

        <div style={{ backgroundImage: `url(${background})` }}>
    </div>


    </div>
    



  );
}

export default App;
