// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
  import Contact from "./components/Contact/Contact";
  import About from "./components/About/About";
import Services from "./components/Service/Services"



export default function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} /> 
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={"NOT PAGE FOUND"} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
