import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ItemDetails from "./components/ItemDetails";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <HashRouter>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/:item_id"} element={<ItemDetails/>}/>
      <Route path={"/buy/:item_id"} element={<Form/>}/>
    </Routes>
    <Footer/>
  </HashRouter>
  </>
  );
}

export default App;
