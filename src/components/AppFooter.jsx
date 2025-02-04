import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white d-flex flex-column align-items-center">
      <div className="d-flex justify-content-around align-items-center pt-2 col-12">
        <div className="list d-flex gap-5 justify-content-between align-items-center">

          <span>&copy; {new Date().getFullYear()} BoolRoad - Tutti i diritti riservati.</span>

          <div className='d-flex gap-3 justify-content-between'>
            <a href="#" className="text-white text-decoration-none">Home</a>
            <a href="#" className="text-white text-decoration-none">Chi Siamo</a>
            <a href="#" className="text-white text-decoration-none">Contatti</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;