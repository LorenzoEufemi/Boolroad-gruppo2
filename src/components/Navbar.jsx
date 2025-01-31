import { Link } from "react-router-dom";


function Navbar() {

    return (

        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

            <div>
                <img src=".../public/Logo.png" alt="Logo" className="mx-2" />
                <h2>BoolRoad</h2>
                <Link rel="stylesheet" href="/trips" className="mx-2"/>
                <Link rel="stylesheet" href="/trips/:id" className="mx-2"/>
            </div>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Cerca</button>
            </form>

        </nav>

    );
};

export default Navbar;