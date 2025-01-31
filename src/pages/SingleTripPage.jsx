import { useParams } from "react-router-dom";
import viaggi from "../data/viaggi";
import { useEffect, useState } from "react";

function SingleTripPage() {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);

    const getTrip = () => {
        const viaggioSelezionato = viaggi.filter(curViaggio, index => {
            return curViaggio.id === id
        });
        setTrip(viaggioSelezionato)
    };
    useEffect(() => {
        getTrip();

    }, []);

    return (
        <>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <h6 class="card-title"></h6>
                    <p className="card-text"></p>
                    <p className="card-text"></p>
                    
                   
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>




        </>
    )
};

export default SingleTripPage;