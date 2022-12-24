import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

function NotFound() {
  return (
    <div className="min-height">
      <div className="container mt-5">
        <div className="row d-flex align-content-center">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 style={styles.title}>404</h1>
            <p style={styles.desc}>The page you are looking does not exists</p>
            <div>
              <Link to={routes.home}>
                <button className="btn btn-lg btn-primary">Go Home</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img style={styles.image} src="/assets/not-found.jpg" alt="404" />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    width: "100%",
  },
  title: {
    fontSize: "6em",
  },
  desc: {
    fontSize: "2.6em",
  },
};

export default NotFound;
