import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "../pages/AboutUs/about";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Contents/Footer/footer";
import LandingPageRouter from "./LandingPageRouter";
import ContactPageRouter from "./ContactRouter";
import RulesScreen from "../pages/ConstructionRules/rules";
import SubscriptionPlanScreen from "../pages/Payment/subscribePlan";
import ProfileScreen from "../pages/Profiling/profileDetails";
import ConstructionPageRouter from "./ConstructionRoutes";

const  Routing = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
          <Route path="/" element={<LandingPageRouter/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/rules" element={<RulesScreen/>}/>
          <Route path="/contact/*" element={<ContactPageRouter/>} />
          {/* temporary set to image list component */}
          <Route path="/construction/*" element={<ConstructionPageRouter/>} />  
          <Route path="/subscription" element={<SubscriptionPlanScreen/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>
      </Routes>
      <div style={{
          marginTop: 'auto', 
        }}>
          <Footer/>
        </div>
    </div>
  );
};

export default Routing;