import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

// oggetto per la creazione di dati da usare
const initialData = {
    id: 0,
    nomeViaggio: "",
    destinazione: "",
    dataInizio: "",
    dataFine: "",
    immagine: "",
    partecipanti: [
        {
            nome: "Livio Lenta",
            codiceFiscale: "LNTLVI90A01H501Z"
        }, {
            nome: "Mousse Leeny",
            codiceFiscale: "LENMSS92C14D612W"
        }],
    inCorso: false
}

function TripsPage() {

    const { dataArr, setDataArr } = useGlobalContext()

    // oggetto da aggiungere all'array dei viaggi al salvataggio di un nuovo viaggio
    const [formData, setFormData] = useState(initialData);
    // flag per mostrare o meno il modale del form
    const [modal, setModal] = useState(false);


    // salviamo onChange ogni cambiamento dell input e il suo valore
    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;
        const newObject = { ...formData, [inputName]: value, id: Date.now() };
        console.log(newObject);
        setFormData(newObject);
    }

    // al submit salviamo il valore del nuovo oggetto creato al nostro array di viaggi
    const handleSubmit = (event) => {
        event.preventDefault();
        setDataArr([...dataArr, formData]);
        setFormData(initialData);
        setModal(false); //chiudiamo il form
    }

    return (
        <>

            {/* modale in overlay */}
            {modal && (
                <div className="c-modal z-2 position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-light">Aggiungi un viaggio</h5>
                            </div>
                            <div className="modal-body">
                                {/* form per l'inserimento di nuovi viaggi */}
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="nomeViaggio"></label>
                                    <input className="form-control" type="text" onChange={handleInputChange} value={formData.nomeViaggio} id="nomeViaggio" name="nomeViaggio" placeholder="nome viaggio" />
                                    <label htmlFor="destinazione"></label>
                                    <input className="form-control" type="text" onChange={handleInputChange} value={formData.destinazione} id="destinazione" name="destinazione" placeholder="destinazione" />
                                    <label htmlFor="immagine"></label>
                                    <input className="form-control" type="text" onChange={handleInputChange} value={formData.immagine} id="immagine" name="immagine" placeholder="immagine" />
                                    <label htmlFor="dataInizio">Inserire data Inizio</label>
                                    <input className="form-control" type="date" onChange={handleInputChange} value={formData.dataInizio} id="dataInizio" name="dataInizio" />
                                    <label htmlFor="dataFine">Inserire data Fine</label>
                                    <input className="form-control" type="date" onChange={handleInputChange} value={formData.dataFine} id="dataFine" name="dataFine" />
                                    {/* Checkbox "In corso" */}
                                    {/* TODO SISTEMARE QUESTA COSA */}
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" onChange={handleInputChange} checked={formData.inCorso} id="inCorso" name="inCorso" />
                                        <label className="form-check-label text-light" htmlFor="inCorso">In corso</label>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-between pt-3">
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Invia</button>
                                        <button type="button" onClick={() => setModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="trips-page">

                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">

                        {/* serachbar */}
                        <div className="search-box d-flex flex-column justify-content-center align-items-center">
                            <h3 className="search-title mb-2">Il cerca-viaggiatore!</h3>
                            <SearchBar />
                        </div>

                        {/* aggiungi viaggio */}
                        <div className="add-trip text-center d-flex flex-column align-items-center gap-2 c-modal-btn">
                            <h6>Aggiungi un <br /> viaggio!</h6>
                            <div>
                                {/* {(!modal) && <button className="btn btn-primary c-modal-btn" onClick={() => setModal(true)}>+</button>} */}
                                <button className="btn btn-primary" onClick={() => setModal(true)}>+</button>
                            </div>
                        </div>
                    </div>

                    {/* lista viaggi */}
                    <div className="trips-area d-flex">
                        <ul className="d-flex flex-wrap gap-4 list-unstyled justify-content-evenly">

                            {/* card viaggi cicliamo l'array di viaggi con l'aggiunta dei viaggi inseriti dall'utente */}
                            {dataArr.map(curViaggio => (
                                <li key={curViaggio.id} className="col-12 col-sm-12 d-flex flex-column justify-content-end">
                                    <div
                                        className="card d-flex align-items-between"
                                        style={{
                                            backgroundImage: `url(${curViaggio.immagine})`,
                                            backgroundPosition: curViaggio.nomeViaggio === "Il Lago che Pietrifica" ? "top" : curViaggio.nomeViaggio === "Vivere Sott'Acqua" ? "bottom" : "center",
                                        }}
                                    >
                                        <div className="overlay"></div>

                                        {/* nome viaggio */}
                                        <div className="card-body d-flex justify-content-between align-items-end">
                                            <div className="card-text d-flex flex-column ">
                                                <h5 className="card-title"><strong>{curViaggio.nomeViaggio}</strong></h5>
                                                <h6 className="card-subtitle mb-2">{curViaggio.destinazione}</h6>
                                            </div>

                                            {/* pulsante dettagli */}
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
            </div>
        </>
    );
};

export default TripsPage;