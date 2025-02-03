import { Link, useNavigate, useParams } from "react-router-dom";
import viaggi from "../data/viaggi";
import { useEffect, useState } from "react";
import arrPartecipanti from "../data/patecipanti";

function SingleTripPage() {
    const { id } = useParams();
    const tripId = parseInt(id);
    const [trip, setTrip] = useState({});
    const [dettaglioPartecipante, setDettaglioPartecipante] = useState();

    const navigate = useNavigate();

    const getTrip = () => {

        const viaggioSelezionato = viaggi.find(curViaggio => {
            return curViaggio.id === tripId;
        });
        setTrip(viaggioSelezionato)
    };

    // funzione dove passo codice fiscale del partecipante 
    const handleClick = (partecipanti) => {


        // utilizzo la funzione find sull'array di partecipanti e ritorno quando trovo riscontro tra il codicefiscale corrente e il codice fiscale passato al click
        const curPartecipante = arrPartecipanti.find(curPart => {
            return curPart.codiceFiscale === partecipanti;
        });
        // salvo nello useState il valore che mi ritorna dalla funzione find

        setDettaglioPartecipante(curPartecipante)
    };


    useEffect(() => {
        getTrip();

    }, [viaggi]);


    return (
        <div className="single-trip-page">
            <div className="container">
                {dettaglioPartecipante ? (
                    <section>

                        {/* tasto per tornare indietro */}
                        <button className="btn btn-primary mt-4 back-btn" onClick={() => navigate(-1)}>indietro</button>

                        {/* bio partecipante */}
                        <div className="card mx-auto info" key={dettaglioPartecipante.codiceFiscale} style={{ width: "25rem" }}>
                            <div className=" ">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item "><strong>Nome: </strong>{dettaglioPartecipante.nome}</li>
                                    <li className="list-group-item "><strong>Cognome: </strong>{dettaglioPartecipante.cognome}</li>
                                    <li className="list-group-item "><strong>Email: </strong>{dettaglioPartecipante.email}</li>
                                    <li className="list-group-item "><strong>Cellulare: </strong>{dettaglioPartecipante.telefono}</li>
                                    <li className="list-group-item "><strong>Codice Fiscale: </strong>{dettaglioPartecipante.codiceFiscale}</li>
                                </ul>
                            </div>

                            {/* bio contatto emergenza */}
                            <div className="emergenza border-top pt-4">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item "><strong>Contatto d'emergenza</strong></li>
                                    <li className="list-group-item "><strong>Nome: </strong>{dettaglioPartecipante.contattoEmergenza.nome}</li>
                                    <li className="list-group-item "><strong>Cognome: </strong>{dettaglioPartecipante.contattoEmergenza.cognome}</li>
                                    <li className="list-group-item "><strong>Cellulare: </strong>{dettaglioPartecipante.contattoEmergenza.numero}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                ) :
                    (

                        <div className="single-trip-area">

                            {/* tasto per tornare indietro */}
                            <button className="btn btn-primary mt-4 mb-4" onClick={() => navigate(-1)}>indietro</button>

                            {/* card viaggio */}
                            <div className="trip-box d-flex justify-content-center">
                                <div className="card" style={{ width: "50rem" }}>
                                    <img src={trip.immagine} alt="" className="card-img-top" />

                                    {/* info viaggio */}
                                    <div className="card-body">
                                        <h4 className="card-title">{trip.nomeViaggio}</h4>
                                        <h6 className="card-title">{trip.destinazione}</h6>
                                        <p className="card-text">
                                            Data di partenza: {trip.dataInizio} <br />
                                            Data di ritorno: {trip.dataFine}
                                        </p>

                                        {/* info viaggiatori */}
                                        <div className="lista-partecipanti d-flex gap-5 flex-wrap">
                                            {trip.partecipanti && trip.partecipanti.map((curItem, i) => (
                                                <a
                                                    className="partecipante d-flex align-items-center gap-2"
                                                    onClick={() => handleClick(curItem.codiceFiscale)}
                                                    key={i}>
                                                    <img src="https://elouwerse.nl/placecircle/50" alt="" />
                                                    <strong>{curItem.nome}</strong>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
};

export default SingleTripPage;