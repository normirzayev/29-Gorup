import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MoreInfo from "../pages/MoreInfo";
import NotFound from "../pages/NotFound";
import Setting from "../pages/Setting";
export default function Pages() {
  let array = [
    "salom",
    "hello",
    "narsa",
    "computer",
    55,
    854,
    6321,
    "true",
    "false",
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog array={array} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about/:raqam" element={<About array={array} />} />
        <Route path="/moreInfo" element={<MoreInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
