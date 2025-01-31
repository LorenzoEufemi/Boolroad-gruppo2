function Navbar() {

    return (
        <nav>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div>
                    <a href="./pages/TripsPage.jsx">Viaggi</a>
                    <a href="./pages/SingleTripPage.jsx">Viaggio</a>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Cerca</button>
                </form>
            </nav>
        </nav>
    );
};

export default Navbar;