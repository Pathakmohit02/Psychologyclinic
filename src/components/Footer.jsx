import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__disclaimer">
          This site offers general guidance and does not replace professional care. Contact us for personalised support.
        </p>

        <div className="footer__divider" />

        <div className="footer__meta">
          <p className="footer__copy">
            Copyright 2019. The Psychology Clinic (Singapore). All rights reserved.
          </p>
          <p className="footer__uen">ACRA UEN: 53378224D</p>
        </div>

        <address className="footer__address">
          <span className="footer__office">
            Main Office: Thomson V Two, 11 Sin Ming Road, #B1-14, Singapore 575629
          </span>
          <a className="footer__tel" href="tel:+6569705611">
            Tel: +65 6970 5611
          </a>
        </address>

        <div className="footer__brand">
          <span className="footer__dot" />
          <span className="footer__tag">The Psychology Clinic</span>
        </div>
      </div>

      <div className="footer__wave" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </footer>
  );
};

export default Footer;
