import React from "react";
import ReactDOM from "react-dom/client";
import { Tile } from "./components/Tile";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <nav className="">
      <Navbar />
    </nav>
    <div className="flex flex-wrap justify-center">
      <Tile name="Joj" image="/assets/joj.png" />
      <Tile name="Andy" image="/assets/andy.png" />
      <Tile name="Jack" image="/assets/jack.png" />
      <Tile name="Tyler" image="/assets/Tyler.jpg" />
      <Tile name="Aaron" image="/assets/aaron.png" />
      <Tile name="Kyan" image="/assets/kyan.png" />
      <Tile name="Will" image="/assets/will.png" />
    </div>
  </>
);
