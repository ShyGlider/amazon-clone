import React from "react";
import "./Home.css";
import homePage from "./image/banner.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={homePage} />

        <div className="home_row">
          <h3>Gaming accessories</h3>
          <Product />
          <Product />
        </div>

        <div className="home_row">
          {/*product 1*/}
          {/*product 2*/}
          {/*product 3*/}
        </div>

        <div className="home_row">{/*product 1*/}</div>
      </div>
    </div>
  );
}

export default Home;
