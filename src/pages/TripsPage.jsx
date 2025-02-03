import { Link } from "react-router-dom";
import data from "../data/viaggi";
import SearchBar from "../components/SearchBar";


function TripsPage() {

    return (
        <div className="container">
            <div className="search-box d-flex flex-column justify-content-center align-items-center mt-3">
                <h3 className="search-title mb-2">Il cerca-viaggiatore!!!!</h3>
                <SearchBar />
            </div>
            <div className="trips-area d-flex">
                <ul className="d-flex flex-wrap gap-4 list-unstyled justify-content-evenly">
                    {data.map(curViaggio => (
                        <li key={curViaggio.id} className="col-12 col-sm-12 d-flex flex-column justify-content-end">
                            <div className="card d-flex align-items-between" style={{ backgroundImage: `url(${curViaggio.immagine})` }} >
                                <div className="card-body d-flex justify-content-between align-items-end">
                                    <div className="card-text d-flex flex-column ">
                                        <h5 className="card-title">{curViaggio.nomeViaggio}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{curViaggio.destinazione}</h6>
                                    </div>
                                    <div className="details-button">
                                        
                                            <Link
                                                to={`/trips/${curViaggio.id}`}
                                                type="button"
                                                className={`btn ${curViaggio.inCorso ? "btn-success" : "btn-light disabled"}`}
                                            >
                                                Dettagli
                                            </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TripsPage;