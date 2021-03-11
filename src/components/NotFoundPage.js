import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <p className="not-found-body">
          Page not found. Go to <Link to="/dashboard">Home Page</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
