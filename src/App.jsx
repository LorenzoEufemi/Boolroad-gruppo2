import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import SingleTripPage from "./pages/SingleTripPage";
import HomePage from "./pages/HomePage";
import TripsPage from "./pages/TripsPage";
import { GlobalProvider } from "./context/GlobalContext";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" >
              <Route index element={<TripsPage />} />
              <Route path=":id" element={<SingleTripPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
