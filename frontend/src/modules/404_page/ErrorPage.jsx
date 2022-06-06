import React from "react";
import "./404_page.css";
import Error from "../Home/images/Error404Whatsapp.png";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div className="button-contain">
        <Link to="/">
          <button className="Home">Home</button>
        </Link>
      </div>
      <div className="img-contain">
        <img src={Error} alt="Not Found" />
      </div>
    </div>
  );
}

export default ErrorPage;
