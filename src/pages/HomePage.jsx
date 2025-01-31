import style from "../HomePage.module.css";

function HomePage() {

    return (
        <div className={`${style.container}`}>
            <div className={`${style.row}`}>
                <div className={`${style.loginbox}`}>
                    <h2>Benvenuto user! Accedi nella tua fantastica area riservata.</h2>
                    <form action="">
                        <div>
                            <label htmlFor="">Nome utente</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="text" />
                        </div>
                        <button>Accedi</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;