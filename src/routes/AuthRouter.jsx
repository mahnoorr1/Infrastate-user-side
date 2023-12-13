import React from 'react';
import LoginScreen from '../pages/Auth/login';
import { Routes, Route } from 'react-router-dom';

const  AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        {/* <Route exact path="register" element={<RegisterPage />} /> */}
      </Routes>
    </div>
  );
};

export default AuthRouter;