import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import RoomPage from "./pages/room";
import BookingPage from "./pages/booking";
import ConfirmationPage from "./pages/confirmation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="/rooms/:roomId" element={<RoomPage />} />
        </Routes>
        <BookingPage />
        <ConfirmationPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
