import React from "react";
import { Link } from "react-router-dom";

import "./Error404.scss";

const Error404 = () => {
  return (
    <div className="app__error">
      <h1>خطأ 404 يا عزيزي</h1>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default Error404;
