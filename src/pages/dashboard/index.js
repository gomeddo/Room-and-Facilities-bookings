import Rooms from "./rooms"; // Importing the Rooms component from the "rooms" file
import DashboardFilters from "./filters"; // Importing the DashboardFilters component from the "filters" file
import Header from "../../components/header"; // Importing the Header component from the "header" directory
import { Resource } from "@gomeddo/sdk";
import { resourceId } from "../../hooks";

export default function DashboardPage() {
  return (
    <>
      <Header /> {/* Rendering the Header component */}
      <div className="max-w-7xl mx-auto flex max-h-full">
        {/* Left portion taking 1/4 of the page */}
        <DashboardFilters /> {/* Rendering the DashboardFilters component */}
        <Rooms /> {/* Rendering the Rooms component */}
      </div>
    </>
  );
  console.log(Resource.resourceId);
}
