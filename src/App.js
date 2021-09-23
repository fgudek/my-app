import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>

        <Route path="/home" exact component={Homescreen} />

        </BrowserRouter>
    </div>
  );
}

export default App;
