import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./pages/TestPage";
import EnrollNow from "./pages/EnrollNow";
import WelcomePage from "./pages/WelcomePage";
import MenuCard from "./layouts/MenuCard";
import LearnMore from "./LearnMore/LearnMore";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<TestPage />} path="/quiz" />
            <Route path="/MenuCard" element={<MenuCard />} />
            <Route element={<EnrollNow />} path="/enroll-now" />
            <Route element={<WelcomePage />} path="/welcomePage" /> 
            <Route element={<LearnMore />} path="/learn-more" />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
