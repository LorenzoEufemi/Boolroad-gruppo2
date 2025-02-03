
function HomePage() {

    return (
    <div className="homepage">
        <div className="d-flex justify-content-center align-items-center">
            <div className="login-box d-flex flex-column align-items-center">
                <div className="titolo text-center">
                    <h2>Benvenuto user!</h2>
                    <h2>Accedi nella tua fantastica area riservata.</h2>
                </div>
                <form action="" className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column">
                        <label htmlFor="">Nome utente</label>
                        <input type="text" />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>
                    <button className="btn btn-primary">Accedi</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default HomePage;