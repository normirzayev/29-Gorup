import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MoreInfo from "../pages/MoreInfo";
import Setting from "../pages/Setting";
export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
        <Route path="/moreInfo" element={<MoreInfo />} />
      </Routes>
    </div>
  );
}
