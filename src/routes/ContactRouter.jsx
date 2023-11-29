import React from "react";
import { Routes, Route } from 'react-router-dom';
import ContactUs from "../pages/ContactUs/contactUs";
import { MarkerProvider } from "../context/mapMarkerContext";

const ContactPageRouter = () => {
  return (
    <MarkerProvider>
      <Routes>
          <Route path="" element={<ContactUs />} />
      </Routes>
    </MarkerProvider>
  );
}

export default ContactPageRouter;
