import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ItemDetails from "./components/ItemDetails";
import Form from "./components/Form";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <HashRouter>
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/:item_id"} element={<ItemDetails/>}/>
      <Route path={"/buy/:item_id"} element={<Form/>}/>
    </Routes>
  </HashRouter>
  </>
  );
}

export default App;
