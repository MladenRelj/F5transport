import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col l2"></div>
        <div className="col l8 s12  margin">
          <div className="holder ">
            <h2 className="center-align">
              F5 TRANSPORT – IHR TRANSPORTUNTERNEHMEN IN ÖSTERREICH
            </h2>
          </div>
        </div>
        <div className="col l2"></div>
        <div className="row">
          <div className="col s12 center head">
            <div
              id="scale-demo"
              href="#!"
              className="button waves-effect waves-light btn-large  teal darken-1 z-depth-4  grey-text text-lighten-3"
            >
              <NavLink
                className="center grey-text text-lighten-3"
                to="/leistungen"
              >
                Leistungen
              </NavLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
