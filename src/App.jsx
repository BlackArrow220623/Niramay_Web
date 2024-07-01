import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Enquiries from "./pages/Enquiries";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import MobileApp from "./pages/MobileApp";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import ProductFAQ from "./pages/ProductFAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Distibuter from "./pages/Distibuter";
import PrivateLable from "./pages/PrivateLable";
import SeedSuppler from "./pages/SeedSuppler";



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/enquiries" element={<Enquiries/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/mobile-app" element={<MobileApp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/ProductFAQ" element={<ProductFAQ/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/RefundPolicy" element={<RefundPolicy/>}/>
        <Route path="/ShippingPolicy" element={<ShippingPolicy/>}/>
        <Route path="/Distibuter" element={<Distibuter/>}/>
        <Route path="/PrivateLable" element={<PrivateLable/>}/>
        <Route path="/SeedSuppler" element={<SeedSuppler/>}/>
      </Routes>
      <Footer/>
    
     
    </div>
  );
}

export default App;
