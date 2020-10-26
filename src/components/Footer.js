import React, { useContext } from "react";

import { ModeContext } from "../context/ModeContext";

import '../App.css'

const Footer = () => {
  const { mode } = useContext(ModeContext);
  const footerClass = mode === "dark" ? "bg-dark text-light" : "";

  return (
    <footer
      className={`py-2 text-center d-flex justify-content-center ${footerClass}`}
      style={{ borderTop: "1px solid #f0ad4e", fontSize: "0.7rem" }}
    >
      <p className="mx-5">
        Inspiration :{" "}
        <a
          href="https://pehaa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none links"
        >
          pehaa.com
        </a>
      </p>
      <p>Contact / report a bug : <a className="links text-decoration-none" target="_blank" rel="noopener noreferrer" href="mailto:contact@my-shopping-list.com">email us</a></p>
    </footer>
  );
};

export default Footer;
