import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white footer ">
      <div className="container text-center d-flex gap-3 align-items-center justify-content-between pt-3">
        <p className="mb-4">&copy; {new Date().getFullYear()} BoolRoad - Tutti i diritti riservati.</p>
        <ul className="list-inline d-flex align-items-center gap-4">
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