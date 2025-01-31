import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import SingleTripPage from "./pages/SingleTripPage";
import HomePage from "./pages/HomePage";
import TripsPage from "./pages/TripsPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/trips" />
          <Route index element={<TripsPage />}/>
          <Route path="/:id" element={<SingleTripPage />}/>
        </Route>
      </Routes>     
    </BrowserRouter>
  );
};

export default App;
