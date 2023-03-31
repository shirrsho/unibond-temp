import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ItemDetails from "./components/ItemDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<ItemDetails/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
