import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className=" d-flex justify-content-around align-items-center pt-2" >        
        <ul className="list-inline d-flex gap-3  justify-content-between">
          <li className="list-inline-item">
            <p>&copy; {new Date().getFullYear()} BoolRoad - Tutti i diritti riservati.</p>
          </li>
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