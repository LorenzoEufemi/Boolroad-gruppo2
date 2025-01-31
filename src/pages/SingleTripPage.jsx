import { Link, useNavigate, useParams } from "react-router-dom";
import viaggi from "../data/viaggi";
import { useEffect, useState } from "react";
import arrPartecipanti from "../data/patecipanti";

function SingleTripPage() {
    const { id } = useParams();
    const tripId = parseInt(id);
    const [trip, setTrip] = useState({});
    const [dettaglioPartecipante, setDettaglioPartecipante] = useState();
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const getTrip = () => {

        const viaggioSelezionato = viaggi.find(curViaggio => {
            return curViaggio.id === tripId;


        });
        setTrip(viaggioSelezionato)
    };

    // funzione dove passo codice fiscale del partecipante 
    const handleClick = (partecipanti) => {
        // setto la funzione per la visibilità a true
        setVisible(true)
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
        <>
            {trip ? (
                <>
                <button className="btn btn-primary mt-4 mb-4" onClick={ () => navigate(-1)}>indietro</button>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h4 className="card-title">{trip.nomeViaggio}</h4>
                        <h6 className="card-title">{trip.destinazione}</h6>
                        <p className="card-text">
                            Data di partenza: {trip.dataInizio} <br />
                            Data di ritorno: {trip.dataFine}
                        </p>
                        {trip.partecipanti && trip.partecipanti.map((curItem, i) => (
                            <>
                                <a 
                                    className="" 
                                    onClick={() => handleClick( curItem.codiceFiscale)} 
                                    key={i}>
                                        {curItem.nome}
                                </a>
                            </>
                        ))}

                        {/* todo sistemare questa cosa */}
                        {/* <div className={visible ? "d-block" : "d-none"} >{dettaglioPartecipante.nome}</div> */}
                    </div>
                </div>
           </> ) : <p>Caricamento...</p>
            }

        </>
    )
};

export default SingleTripPage;