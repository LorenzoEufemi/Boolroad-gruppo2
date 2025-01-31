import { Link, useParams } from "react-router-dom";
import viaggi from "../data/viaggi";
import { useEffect, useState } from "react";

function SingleTripPage() {
    const { id } = useParams();
    const tripId = parseInt(id);
    const [trip, setTrip] = useState({});

    const getTrip = () => {

        const viaggioSelezionato = viaggi.find(curViaggio => {
            return curViaggio.id === tripId;
            
            
        });
        setTrip(viaggioSelezionato)
        console.log('Viaggio', viaggioSelezionato);
        console.log(trip);
    };
    
    useEffect(() => {
        getTrip();

    }, [viaggi]);
    

    return (
        <>
            { trip ? (
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
                        <button className="btn btn-primary" key={i}>{curItem}</button>
                        <div className="d-none" >{curItem}</div>
                        </>
                    ))}
                    </div>
                </div>
                ) : <p>Caricamento...</p>
            }
  






        </>
    )
};

export default SingleTripPage;