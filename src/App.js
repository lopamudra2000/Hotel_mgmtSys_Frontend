import './App.css';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Customer from './Pages/Customer';
import Booking from './Pages/Booking';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>

      <Routes>
      <Route path="/signin" element={<SignIn/>} exact/>
      <Route path="/" element={<Home />} exact />
      <Route path="/customer" element={<Customer exact />} />
      <Route path="/booking" element={<Booking/>} exact/>
      </Routes>
      
    </Router>
   
  );
}

export default App;
