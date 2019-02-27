import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      There is nothing here
      <Link to="/"> Home </Link>
    </div>
  );
};

export default NotFound;
