import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data/patecipanti";
import dataViaggi from "../data/viaggi";

function SearchBar() {

    const [viaggiatore, setViaggiatore] = useState(null);
    const [viaggiDelPartecipante, setViaggiDelPartecipante] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    const getViaggiatori = (event) => {
        if (event) event.preventDefault();

        const viaggiatoreCercato = data.find(curViaggiatore => (
            curViaggiatore.nome.toLowerCase() === searchValue.toLowerCase() ||
            curViaggiatore.cognome.toLowerCase() === searchValue.toLowerCase()
        ));

        // Filtra l'array `dataViaggi` per ottenere solo i viaggi in cui il partecipante cercato è presente
        const viaggi = dataViaggi.filter(curViaggio =>
            // Controlla se almeno un partecipante nel viaggio ha il codice fiscale corrispondente
            curViaggio.partecipanti.some(curPartecipante =>
                curPartecipante.codiceFiscale === viaggiatoreCercato.codiceFiscale
            )
        );

        console.log(viaggi);

        setViaggiatore(viaggiatoreCercato || null);
        setViaggiDelPartecipante(viaggi);
    };

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            getViaggiatori();
        };
    };

    return (
        <>
            <form className="search-form d-flex" role="search" onSubmit={getViaggiatori}>
                <input
                    className="form-control me-2"
                    type="search"
                    onKeyUp={handleEnterKey}
                    value={searchValue}
                    // cambia il valore di searchValue
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Cerca il nome di un viaggiatore"
                    aria-label="Search"
                />
                <button
                    className="search-btn btn btn-success mx-2"
                    type="submit"
                >
                    Cerca
                </button>
            </form>

            {/* viaggiatori cercati */}
            <div className="pt-5">
                {viaggiatore && (
                    <div className="card">
                        <div className="card-body d-flex align-items-center gap-2">
                            <img src="https://elouwerse.nl/placecircle/50" alt="" />
                            <h5>{viaggiatore.nome} {viaggiatore.cognome}</h5>
                        </div>
                    </div>
                )}
                {viaggiDelPartecipante && (
                    viaggiDelPartecipante.map(curViaggio => (
                        <Link
                            key={curViaggio.id}
                            className="card border-0"
                            to={`/trips/${curViaggio.id}`}>
                            <div className="card-body text-start p-2">
                                <h5 className="mb-0">Viaggio: {curViaggio.nomeViaggio}</h5>
                                <p className="mb-0">Destinazione: {curViaggio.destinazione}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
};

export default SearchBar;