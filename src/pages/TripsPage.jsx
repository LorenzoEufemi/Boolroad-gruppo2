import data from "../data/viaggi"
function TripsPage() {

    return (
        <>
            <ul>
                {data.map(curViaggio => (

                    <li key={curViaggio.id} className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{curViaggio.nomeViaggio}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{curViaggio.destinazione}</h6>

                            {(curViaggio.inCorso) ?
                                <button type="button" className="btn btn-success">Dettagli</button> :
                                <button type="button" className="btn btn-light">Dettagli</button>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TripsPage;