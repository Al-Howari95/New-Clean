import "./App.css";
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ContactUs from "./Pages/ContactUs";
import Categores from "./Pages/Categores";
import Detelis from "./Pages/Detelis1";
import BookNow from "./Pages/BookNow";
import Detelis1 from "./Pages/Detelis1";
import Profile from "./Pages/Profile";
import Admin from "./Admim/Admin";
import Adminlogin from "./Admim/Adminlogin";





function App() {

  const [role, setRole] = useState(0);

  useEffect(() => {
    if (localStorage) {
      const storedRole = localStorage.getItem('role');
      setRole(parseInt(storedRole, 10));
    }
  }, []);


  console.log(role);




  return (
    <div className="App">

{role !== 1 && role !==2 &&

      <Router>
        <Header/>

        <Routes> 
        <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Adminlogin" element={<Adminlogin/>} />
          
    
        </Routes>

        <Footer />
      </Router>

}

{role === 1 &&
      <Router>

      <Routes> 

<Route path="/Admin" element={<Admin/>} />
<Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Adminlogin" element={<Adminlogin/>} />


</Routes>

</Router>

}


{role === 2 &&

<Router>
<Header/>

<Routes> 

<Route path="/" element={<Home/>} />
<Route path="/AboutUs" element={<AboutUs />} />
<Route path="/ContactUs" element={<ContactUs/>} />
<Route path="/Categores" element={<Categores/>} />
<Route path="/Detelis/:id" element={<Detelis/>} />
<Route path="/BookNow" element={<BookNow/>} />
<Route path="/Detelis1" element={<Detelis1/>} />
<Route path="/Profile" element={<Profile/>} />
<Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Adminlogin" element={<Adminlogin/>} />


</Routes>

<Footer />
</Router>


}






      {/* <Router>

      <Routes> 

      <Route path="/Admin" element={<Admin/>} />
      </Routes>
      </Router> */}
    </div>
  );
}

export default App;


