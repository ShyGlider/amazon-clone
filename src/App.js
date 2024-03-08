import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //    BEM
    <div className="app">
      <h1></h1>
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
