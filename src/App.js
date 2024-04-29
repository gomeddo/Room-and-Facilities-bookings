import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import RoomPage from "./pages/room";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="/rooms/:roomId" element={<RoomPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
