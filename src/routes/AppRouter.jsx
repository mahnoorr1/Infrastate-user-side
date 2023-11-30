import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "../pages/AboutUs/about";
import Construction from "../pages/Construction/construction";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Contents/Footer/footer";
import LandingPageRouter from "./LandingPageRouter";
import ContactPageRouter from "./ContactRouter";
import RulesScreen from "../pages/ConstructionRules/rules";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Navbar/>
        <Routes>
          <Route exact path="/*" element={<LandingPageRouter/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/rules" element={<RulesScreen/>}/>
          <Route path="/contact/*" element={<ContactPageRouter/>} />
          <Route path="/construction" element={<Construction/>} />
        </Routes>
        <div style={{
          marginTop: 'auto', 
        }}>
          <Footer/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
