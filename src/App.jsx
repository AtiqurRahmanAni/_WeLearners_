import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestPage from "./pages/TestPage"
import axios from "axios";
import {Toaster} from "react-hot-toast";
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Toaster position ='bottom-right' toastOptions={{duration: 2000}}/>
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<TestPage />} path="/quiz" /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
