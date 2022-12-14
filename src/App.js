import { useRef , useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from "./Components/Header";
import Home from './Page/Home';
import Login from "./Page/Login";
import { GoogleMap } from "./Page/MapPage";
import OperatorDashboard from "./Page/OperatorDashboard";
import { Footer } from "./Components/Footer";
import Signup from './Page/Signup';
import Registration from './Components/Registration';
import UserDashboard from './Page/UserDashboard';
import Update from './Components/Update';
import DirectionMap from './Page/DirectionMap';
import OTP from './Components/OTP';
function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path = "/" element = {<Home />} />
    <Route exact path = "/Login" element = {<Login/>} />
    <Route exact path = "/Signup" element = {<Signup/>} />
    <Route exact path = "/Registration/Booking" element = {<GoogleMap/>} />
    <Route exact path = "/OperatorDashboard" element = {<OperatorDashboard/>} />
    <Route exact path = "/Login/UserDashboard" element = {<UserDashboard/>} />
    <Route exact path = "/Registration" element = {<Registration />} />
    <Route exact path = "/Update" element = {<Update />} />
    <Route exact path = "/DirectionMap" element = {<DirectionMap />} />
    
    <Route exact path = "/OTP" element = {<OTP />} />
    </Routes>
    <Footer/>
    </>
  );
}
export default App;
    

