import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer d-flex flex-column flex-md-row justify-content-around align-items-center text-center text-md-start mt-5 pt-4 pb-4">
        <img
          src="https://placehold.co/200x80"
          alt="Logo"
          className="mb-3 mb-md-0"
        />
        <p className="mt-3 mb-3 mb-md-0">
          Todos os direitos reservados © 2025 Thiago Mazzi.
        </p>
        <a
          className="text-decoration-none text-light fw-bold"
          href="https://instagram.com/thiago.mazzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @thiago.mazzi
        </a>
      </div>
    </>
  );
};

export default Footer;
