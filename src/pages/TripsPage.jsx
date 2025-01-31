import { Link } from "react-router-dom";
import data from "../data/viaggi";


function TripsPage() {

    return (
        <div className="container">
            <ul className="d-flex flex-wrap gap-3 p-0 list-unstyled mt-5">
                {data.map(curViaggio => (

                    <li key={curViaggio.id} className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{curViaggio.nomeViaggio}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{curViaggio.destinazione}</h6>

                         
                            {
                                <Link
                                    to={`/trips/${curViaggio.id}`}
                                    type="button"
                                    className={`btn ${curViaggio.inCorso ? "btn-success" : "btn-light"}`}
                                >
                                    Dettagli
                                </Link>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TripsPage;