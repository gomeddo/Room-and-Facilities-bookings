import Rooms from "./rooms";
import DashboardFilters from "./filters";
import Header from "../../components/header";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto flex max-h-full">
        {/* Left portion taking 1/4 of the page */}
        <DashboardFilters />
        <Rooms />
      </div>
    </>
  );
}
