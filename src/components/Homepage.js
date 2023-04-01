import React, { useEffect, useState } from "react";
import Item from './Item';
import '../App.css'
import Navbar from "./Navbar";
import { getAllItems } from "../functionalities";

export default function Homepage() {
  const [items,setItems] = useState([]);
  async function getItems(){
    setItems(await getAllItems());
  }
  useEffect(()=>{
    getItems();
  },[])
  return (
    <div className="main">
      <Navbar />
      <div className="container" style={{ marginTop: "50px" }}>
        {/* <h1>BONDIVA</h1> */}
        <div className="row" style={{ padding: "5px" }}>
        {/* {console.log(items)} */}
          {items?.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}