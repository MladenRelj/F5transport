import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer  grey darken-4">
        <div className="container">
          <div className="row">
            <div className=".hide-on-large-only .hide-on-med-and-up center-align">
              <div className="col l4 s12 m4 ">
                <div className="border">
                  <div className="grey-text text-lighten-1">
                    <h4 className="flow-text">Öffnungszeiten Büro</h4>
                    <p>Montag bis Freitag</p>
                    <p>08:00 bis 18:00 Uhr</p>
                    <p>Samstag</p>
                    <p>09:00 bis 16:00 Uhr</p>
                  </div>
                </div>
              </div>
              <div className="col l4 s12 m4">
                <a href="https://www.firmenabc.at/f-transport-gmbh_OsHl">
                  <img
                    alt="firmenabc"
                    className="link"
                    src="images/firmenabc.svg"
                  />
                </a>
              </div>

              <div className="col l4 s12 m4 grey-text text-lighten-1 ">
                <div className="border">
                  <div className="grey-text text-lighten-1 ">
                    <h4 className="flow-text">Kontaktieren Sie uns!</h4>
                    <p>F5 Transport</p>
                    <p>G20-Fabriksgelände 15</p>
                    <p>7011 Siegendorf</p>
                    <p>+43 664 5898477</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center">© 2020 Copyright DevComunityBg</div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
