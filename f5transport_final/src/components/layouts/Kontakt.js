import React from "react";

const Kontakt = () => {
  return (
    <div className="container">
      <div
        className="row"
        // style={{ "box-shadow": "2px 0px 20px rgb(108, 109, 114)" }}
      >
        <div className="col l6 m6 s12 main-k box-shadow">
          <h1 className="black-text text-darken-3 info">Kontakt & Anfahrt</h1>
          <div className="border black-text text-darken-4 border info ">
            <p>F5 Transport GmbH</p>
            <p>G20-Fabriksgelände 15</p>
            <p>7011 Siegendorf</p>
            <p>+43 664 5898477</p>

            <p>Firmenbuchnummer:FN 392409 y</p>

            <p>UID-Nummer: ATU67765509</p>

            <p>Beginndatum der Rechtsform: 2013-01-29 </p>
          </div>
        </div>
        <div className="col l6 m6 s12">
          <iframe
            title="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.521021134998!2d16.29743895116466!3d47.79073507909525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476dccab5eafde3d%3A0x10681f9436e3567e!2zRmFicmlrc2dlbMOkbmRlIDE1L0cyMCwgNzIwMSBOZXVkw7ZyZmwsINCQ0YPRgdGC0YDQuNGY0LA!5e0!3m2!1ssr!2srs!4v1584640975641!5m2!1ssr!2srs"
            width="650"
            height="450"
            frameBorder="0"
            style={{ border: "", marginTop: "35px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Kontakt;
