import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import One from "./components/One";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}
