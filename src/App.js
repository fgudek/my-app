import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen.js';
import Reservationscreen from './screens/Reservationscreen';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>

        <Route path="/home" exact component={Homescreen} />
        <Route path="/reservation/:terenid" exact component={Reservationscreen} />

        </BrowserRouter>
    </div>
  );
}

export default App;
