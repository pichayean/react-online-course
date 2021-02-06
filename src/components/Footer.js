import React from "react";
import PropTypes from "prop-types";
const Footer = ({ title }) => {
  return (
    <>
      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2017-2021 Company, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </>
  );
};

Footer.prototype = {
  title: PropTypes.string,
};
export default Footer;
