import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventListPage from "./pages/EventListPage";
import RegistrationPage from "./pages/RegistrationPage";
import MyRegistrationsPage from "./pages/MyRegistrationsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventListPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/my-registrations" element={<MyRegistrationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
