import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import LocksScreen from "./pages/locks";
import AllReservations from "./pages/reservations";
import ReservationsScreen from "./pages/reservations/SingleReservation";
import Test from "./pages/test";
import WelcomePage from "./pages/welcome";
import Welcome from "./pages/welcomeScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route element={<MainLayout />}>
        <Route path="/hello" element={<Test />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/welcomeScreen" element={<Welcome />} />

        <Route path="/reservations" element={<AllReservations />} />
        <Route
          path="/reservations/:reservationId"
          element={<ReservationsScreen />}
        />
        <Route path="/locks" element={<LocksScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
