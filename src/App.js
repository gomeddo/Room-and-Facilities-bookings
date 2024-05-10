import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import RoomPage from "./pages/room";
import BookingPage from "./pages/booking";
import ConfirmationPage from "./pages/confirmation";
import { RoomProvider } from "./context";

function App() {
  return (
    <div>
      <RoomProvider>
        {/* BrowserRouter component to enable routing */}
        <BrowserRouter>
          {/* Routes component to define routes */}
          <Routes>
            {/* Route for the dashboard page */}
            <Route index element={<DashboardPage />} />
            {/* Route for individual room pages */}
            <Route path="/rooms/:roomId" element={<RoomPage />} />
          </Routes>
          {/* BookingPage component rendered outside of the router */}
          <BookingPage />
          {/* ConfirmationPage component rendered outside of the router */}
          <ConfirmationPage />
        </BrowserRouter>
      </RoomProvider>
    </div>
  );
}

// Exporting the App component
export default App;
