import { useEffect, useRef, useState } from "react";
import { useApiContext } from "../../sdk/context";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header"; // Importing the Header component from the "header" directory
import Input from "../../components/input";
import Label from "../../components/label";
import Button from "../../components/button";
import GitHub from "../../assets/github.png";

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

  const [errorMessage, setErrorMessage] = useState(null);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    if (!!apiKey && !!resourceId && !!reservationType) navigate("/dashboard");
  }, [apiKey, resourceId, reservationType, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!!apiKeyRef.current && !!apiKeyRef.current.length) {
      setApiKey(apiKeyRef.current);
    } else {
      setErrorMessage("API Key is required.");
      return;
    }
    if (!!resourceIdRef.current && !!resourceIdRef.current.length) {
      setResourceId(resourceIdRef.current);
    } else {
      setErrorMessage("University Resource ID is required.");
      return;
    }
    if (!!reservationTypeRef.current && !!reservationTypeRef.current.length) {
      setReservationType(reservationTypeRef.current);
    } else {
      setErrorMessage("Reservation Type ID is required.");
      return;
    }
  };

  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  return (
    <div className="enter-api-key">
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>GoMeddo Activity Scheduling & Registration</title>
      <Header className="bg-purple-900 flex items-center flex-col h-40 w-full" />
      <main className="flex flex-col items-center w-full">
        <section className="py-15 w-full flex flex-col items-center bg-gray-50">
          <div className="box-border p-16 max-w-full w-[120rem] flex flex-col">
            <h1 className="text-4xl leading-16 text-center pb-8">
              GoMeddo Student Housing Room Booking Demo
            </h1>
            <p className="text-center text-lg leading-12">
              This page demonstrates how to implement the GoMeddo JS SDK for
              booking a room at a University. Note that this page is for
              demonstration purposes only.
            </p>
          </div>
        </section>
        <section className="py-12 w-full flex flex-col items-center">
          <div className="box-border p-16 max-w-full w-[120rem] flex flex-col">
            <h2 className="text-2xl leading-6 text-center">
              Example: Book your student room online
            </h2>
            <div id="sales-appointment" className="rounded overflow-hidden" />
            <form
              onSubmit={handleSubmit}
              id="config"
              className="grid gap-5 p-16 bg-white rounded mt-8"
            >
              {!apiKey && (
                <>
                  <Label htmlFor="apiKey" className="text-black text-lg pt-6">
                    Enter API Key:
                  </Label>
                  <div className="flex items-center">
                    <Input
                      type={showApiKey ? "text" : "password"}
                      className="w-96 mr-2 p-4 rounded text-black text-lg"
                      id="apiKey"
                      name="apiKey"
                      placeholder="Enter your API key"
                      onChange={(e) => (apiKeyRef.current = e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={toggleApiKeyVisibility}
                      className="bg-palette-accent text-white p-4 rounded text-sm"
                    >
                      {showApiKey ? "Hide" : "Show"}
                    </button>
                  </div>
                </>
              )}
              {!resourceId && (
                <>
                  <Label className="text-black text-lg pt-4">
                    University Resource ID
                  </Label>
                  <Input
                    className="p-4 rounded text-black text-lg"
                    placeholder="Enter the University Resource ID"
                    onChange={(e) => (resourceIdRef.current = e.target.value)}
                  />
                </>
              )}
              {!reservationType && (
                <>
                  <Label className="text-black text-lg pt-6">
                    Reservation Type ID
                  </Label>
                  <Input
                    className="p-4 rounded text-black text-lg "
                    placeholder="Enter Reservation Type ID"
                    onChange={(e) =>
                      (reservationTypeRef.current = e.target.value)
                    }
                  />
                </>
              )}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <Button
                type="submit"
                className="bg-palette-accent text-white p-4 rounded text-base"
              >
                Submit
              </Button>
            </form>
          </div>
        </section>
        <section className="w-full flex flex-col items-center pb-16">
          <div className="box-border max-w-full w-[120rem] flex flex-col">
            <h3 className="text-3xl leading-10 text-center">
              Installing the SDK
            </h3>
            <h4 className="text-xl leading-8 mb-0">NPM</h4>
            <pre className="bg-black text-white p-8 rounded whitespace-pre-line overflow-x-auto">
              npm install @gomeddo/sdk
            </pre>
            <br />
            <h4 className="text-xl leading-8 mb-0">Yarn</h4>
            <pre className="bg-black text-white p-8 rounded whitespace-pre-line overflow-x-auto">
              yarn add @gomeddo/sdk
            </pre>
          </div>
        </section>
      </main>
      <footer className="w-full flex justify-center items-center bg-orange-600 text-black p-8">
        <a
          className="flex justify-center items-center gap-4 text-lg no-underline w-full hover:bg-blue-300"
          href="https://github.com/gomeddo"
        >
          <img src={GitHub} alt="github" className="w-8 h-8 invert" />
          View on GitHub
        </a>
      </footer>
    </div>
  );
}
