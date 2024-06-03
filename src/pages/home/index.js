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
  const resourceTypeRef = useRef(null);

  const navigate = useNavigate();
  const {
    apiKey,
    setApiKey,
    resourceId,
    setResourceId,
    resourceType,
    setResourceType,
  } = useApiContext();

  useEffect(() => {
    if (!!apiKey && !!resourceId && !!resourceType) navigate("/dashboard");
  }, [apiKey, resourceId, resourceType, navigate]);

  const handleSubmit = () => {
    if (!!apiKeyRef.current && !!apiKeyRef.current.length) {
      setApiKey(apiKeyRef.current);
    }
    if (!!resourceIdRef.current && !!resourceIdRef.current.length) {
      setResourceId(resourceIdRef.current);
    }
    if (!!resourceTypeRef.current && !!resourceTypeRef.current.length) {
      setResourceType(resourceTypeRef.current);
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
            <Label>Resource Id</Label>
            <Input
              placeholder="Enter Resource Id"
              onChange={(e) => (resourceIdRef.current = e.target.value)}
            />
          </>
        )}
        {!resourceType && (
          <>
            <Label>Resource Type</Label>
            <Input
              placeholder="Enter Resource Type"
              onChange={(e) => (resourceTypeRef.current = e.target.value)}
            />
          </>
        )}
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}
