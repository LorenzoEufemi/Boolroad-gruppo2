import { Link } from "react-router-dom";


function Navbar() {

    return (

        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="d-flex">
                <img src="../images/Logo.png" alt="Logo" className="mx-2" />
                <h2 className="text-white mt-1">BoolRoad</h2> 
                <Link rel="stylesheet" to="/" className="text-white ms-5 mt-2 link-underline-opacity-0">Home</Link>
                <Link rel="stylesheet" to="/trips" className="text-white ms-2 mt-2 link-underline-opacity-0">Viaggi</Link>
            </div>
            <div className="d-flex">

               

            </div>
{/* LA MIA VITA SEI TU */}
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success mx-2" type="submit">Cerca</button>
            </form>

        </nav>

    );
};

export default Navbar;