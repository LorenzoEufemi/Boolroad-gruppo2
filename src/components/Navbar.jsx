import { Link, NavLink } from "react-router-dom";


function Navbar() {

    return (

        <nav className="navbar bg-dark border-bottom border-body p-3" data-bs-theme="dark">
            <div className="d-flex align-items-center">
                <img src="../images/Logo.png" alt="Logo" className="mx-2" />
                <h2 className="text-white">BoolRoad</h2>
                <NavLink
                    rel="stylesheet" 
                    to="/"
                    className="text-white ms-5"
                >Home
                </NavLink>
                <NavLink
                    rel="stylesheet"
                    to="/trips"
                    className="text-white ms-4"
                >Viaggi
                </NavLink>
            </div>           
        </nav>

    );
};

export default Navbar;