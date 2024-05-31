import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./pages/dashboardLayout";
import Home from "./pages/home";
import RoomPage from "./pages/room";
import { ApiProvider } from "./sdk/context";

function App() {
  return (
    <>
      <ApiProvider>
        {/* BrowserRouter component to enable routing */}
        <BrowserRouter>
          {/* Routes component to define routes */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="rooms/:roomId" element={<RoomPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </>
  );
}

// Exporting the App component
export default App;
