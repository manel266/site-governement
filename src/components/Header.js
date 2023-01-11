import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logotunis.png";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            style={{
              width: "300px",
              height: "auto",
              float: "left",
              marginTop: "5px",
            }}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
