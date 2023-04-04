import React, { useEffect, useState } from "react";
import Item from './Item';
import '../App.css'
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
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ padding: "5px" }}>
          {items?.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}