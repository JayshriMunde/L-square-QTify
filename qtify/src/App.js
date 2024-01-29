import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import "./index.css";
import Albumcard from "./Albumcard";
const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Albumcard />
    </div>
  );
};

export default App;
