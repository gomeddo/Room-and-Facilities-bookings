import { Outlet, useNavigate } from "react-router-dom";
import BookingPage from "./booking";
import ConfirmationPage from "./confirmation";
import { RoomProvider } from "../context";
import { useApiContext } from "../sdk/context";
import { useEffect } from "react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { apiKey } = useApiContext();

  useEffect(() => {
    if (!apiKey) navigate("/");
  }, [apiKey, navigate]);

  return (
    <RoomProvider>
      <Outlet />
      {/* BookingPage component rendered outside of the router */}
      <BookingPage />
      {/* ConfirmationPage component rendered outside of the router */}
      <ConfirmationPage />
    </RoomProvider>
  );
}
