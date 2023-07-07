import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import OutdoorLiving from "../pages/OutdoorLiving";
import CarDetails from "../pages/CarDetails";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import OutdoorKitchen from "../pages/OutdoorKitchen";
import Living from "../pages/Living";
import Test from "../pages/Test";
import Test1 from "../pages/Test1";
import Test2 from "../pages/Test2";
import Test3 from "../pages/Test3";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/outdoorLiving" element={<OutdoorLiving />} />
      <Route path="/outdoorKitchen" element={<OutdoorKitchen />} />
      <Route path="/outdoorKitchen/:slug" element={<CarDetails />} />
      <Route path="/outdoorLiving/:slug" element={<CarDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/living" element={<Living />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test" element={<Test />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path="/test3" element={<Test3 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
