import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import About from "../pages/AboutUs/about";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Contents/Footer/footer";
import LandingPageRouter from "./LandingPageRouter";
import ContactPageRouter from "./ContactRouter";
import RulesScreen from "../pages/ConstructionRules/rules";
import SubscriptionPlanScreen from "../pages/Payment/subscribePlan";
import ProfileScreen from "../pages/Profiling/profileDetails";
import ConstructionPageRouter from "./ConstructionRoutes";
import LoginScreen from '../pages/Auth/login';
import AuthRouter from './AuthRouter';

// Dummy authentication function, replace this with your actual authentication logic
const isAuthenticated = () => {
  // Replace this with your authentication logic
  return true; // For simplicity, always return true for now
}

const AppContent = () => {
  const location = useLocation();
  const isUserLoggedIn = isAuthenticated();

  if (!isUserLoggedIn && !location.pathname.startsWith('/Auth')) {
    return <Navigate to="/Auth/login" />;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      paddingTop: location.pathname.startsWith('/Auth') ? null :'3rem',
    }}>
      {location.pathname.startsWith('/Auth') ? null : <Navbar/>}
      <Routes>
        <Route path="/Auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<LandingPageRouter/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/rules" element={<RulesScreen/>}/>
        <Route path="/contact/*" element={<ContactPageRouter/>} />
        <Route path="/construction/*" element={<ConstructionPageRouter/>} />  
        <Route path="/subscription" element={<SubscriptionPlanScreen/>}/>
        <Route path="/profile" element={<ProfileScreen/>}/>
        {/* Add a catch-all route for 404 errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname.startsWith('/Auth') || location.pathname.startsWith('/auth') ? null : 
      <div style={{
        marginTop: 'auto', 
      }}>
        <Footer/>
      </div>}
    </div>
  );
}

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default AppRouter;
