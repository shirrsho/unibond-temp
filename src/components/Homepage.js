import React from "react";
import Item from './Item';
import '../App.css'
import Navbar from "./Navbar";

export default function Homepage(){
    return(
        <div className="main">
      {/* <head><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/></head> */}
      <Navbar/>
      <div className="container" style={{ marginTop: "50px" }}>
        {/* <h1>BONDIVA</h1> */}
        <div className="row">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
      </div>
    );
}

const items = [
    {
      id: 1,
      title: "Item 1",
      image: "https://source.unsplash.com/random/200x200",
      price: 100
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description for item 2",
      image: "https://source.unsplash.com/random/200x200",
      price: 200
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description for item 3",
      image: "https://source.unsplash.com/random/200x200",
      price: 300
    },
    {
      id: 4,
      title: "Item 4",
      description: "Description for item 4",
      image: "https://source.unsplash.com/random/200x200",
      price: 200
    },
    {
      id: 5,
      title: "Item 5",
      description: "Description for item 5",
      image: "https://source.unsplash.com/random/200x200",
      price: 100
    },
    {
      id: 6,
      title: "Item 6",
      description: "Description for item 6",
      image: "https://source.unsplash.com/random/200x200",
      price: 50
    },
  ];