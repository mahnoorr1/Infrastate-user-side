import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/landingPage";
import About from "../pages/AboutUs/about";
import ContactUs from "../pages/ContactUs/contactUs";
import Construction from "../pages/Construction/construction";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Contents/Footer/footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div style={{
        width: '99vw'
      }}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/construction" element={<Construction/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
