import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white m-0 p-0">
      <div className="container text-center d-flex gap-3 align-items-center justify-content-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} BoolRoad - Tutti i diritti riservati.</p>
        <ul className="list-inline d-flex align-items-center">
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">Chi Siamo</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white text-decoration-none">Contatti</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;