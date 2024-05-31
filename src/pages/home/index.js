import { useEffect, useRef } from "react";
import { useApiContext } from "../../sdk/context";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header"; // Importing the Header component from the "header" directory
import Card from "../../components/card";
import Input from "../../components/input";
import Label from "../../components/label";
import Button from "../../components/button";

export default function Home() {
  const ref = useRef(null);

  const navigate = useNavigate();
  const { apiKey, setApiKey } = useApiContext();

  useEffect(() => {
    if (!!apiKey) navigate("/dashboard");
  }, [apiKey, navigate]);

  const handleSubmit = () => {
    if (!!ref.current && !!ref.current.length) {
      setApiKey(ref.current);
    }
  };

  return (
    <div>
      <Header /> {/* Rendering the Header component */}
      <Card className="max-w-2xl mx-auto my-10 p-4 flex flex-col gap-2">
        <Label>Api Key</Label>
        <Input
          placeholder="Enter API Key"
          onChange={(e) => (ref.current = e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}
