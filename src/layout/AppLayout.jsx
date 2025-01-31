import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Outlet } from "react-router-dom";


function AppLayout() {

    return (
        <>
            <AppHeader />
            <main className="container">
                <Outlet />
            </main>
            <AppFooter />
        </>
    );
};

export default AppLayout;