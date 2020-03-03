import React from "react";
import Pizza from "../../../static/images/pizza.svg";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <img src={Pizza} className="pizza" alt="VimCar" />
          <h1 className="title">VimCar - FrontEnd technical challenge</h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
