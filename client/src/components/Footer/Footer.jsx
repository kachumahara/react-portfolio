import React from "react";
import "./Footer.css";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="fixed-bottom position-sticky-text-muted align-items-center pt-0.5 bg-dark">
      <div className="footer-copyright text-center py-3">
        Kenneth Achumahara © {getYear}
      </div>
    </footer>
  );
};

export default Footer;
