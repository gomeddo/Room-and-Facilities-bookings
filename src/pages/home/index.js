import { useEffect, useRef } from "react";
import { useApiContext } from "../../sdk/context";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header"; // Importing the Header component from the "header" directory
import Card from "../../components/card";
import Input from "../../components/input";
import Label from "../../components/label";
import Button from "../../components/button";

export default function Home() {
  const apiKeyRef = useRef(null);
  const resourceIdRef = useRef(null);
  const reservationTypeRef = useRef(null);

  const navigate = useNavigate();
  const {
    apiKey,
    setApiKey,
    resourceId,
    setResourceId,
    reservationType,
    setReservationType,
  } = useApiContext();

  useEffect(() => {
    if (!!apiKey && !!resourceId && !!reservationType) navigate("/dashboard");
  }, [apiKey, resourceId, reservationType, navigate]);

  const handleSubmit = () => {
    if (!!apiKeyRef.current && !!apiKeyRef.current.length) {
      setApiKey(apiKeyRef.current);
    }
    if (!!resourceIdRef.current && !!resourceIdRef.current.length) {
      setResourceId(resourceIdRef.current);
    }
    if (!!reservationTypeRef.current && !!reservationTypeRef.current.length) {
      setReservationType(reservationTypeRef.current);
    }
  };

  return (
    <div>
      <Header /> {/* Rendering the Header component */}
      <Card className="max-w-2xl mx-auto my-10 p-4 flex flex-col gap-2">
        {!apiKey && (
          <>
            <Label>Api Key</Label>
            <Input
              placeholder="Enter API Key"
              onChange={(e) => (apiKeyRef.current = e.target.value)}
            />
          </>
        )}
        {!resourceId && (
          <>
            <Label>Resource ID</Label>
            <Input
              placeholder="Enter Resource ID"
              onChange={(e) => (resourceIdRef.current = e.target.value)}
            />
          </>
        )}
        {!reservationType && (
          <>
            <Label>Reservation Type ID</Label>
            <Input
              placeholder="Enter Reservation Type ID"
              onChange={(e) => (reservationTypeRef.current = e.target.value)}
            />
          </>
        )}
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}
