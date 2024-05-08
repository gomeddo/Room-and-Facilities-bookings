import React from "react";
import Card from "../../components/card";
import DatePicker from "../../components/datePicker";
import Select from "../../components/select";
import Button from "../../components/button";

function DashboardFilters() {
  return (
    <>
      {/* Left portion taking 1/4 of the page */}
      <Card className="w-1/3 h-1/4 sticky top-28">
        <Card.Body className="flex-1 p-6 gap-4">
          {/* Title for the filter section */}
          <div className="text-[#6D6A75] text-xl font-bold">Filters</div>
          {/* Date Picker for selecting dates */}
          <DatePicker />
          {/* Select Inputs for various filter options */}
          <Select>
            <option value="">Group Size</option>
          </Select>
          <Select>
            <option value="">Location</option>
          </Select>
          <Select>
            <option value="">Accommodation Type</option>
          </Select>
          <Select>
            <option value="">Price</option>
          </Select>
          <Select>
            <option value="">Distance</option>
          </Select>
          {/* Apply and Cancel Buttons to apply or cancel filter changes */}
          <div className="flex justify-end gap-2 mx-1">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Apply</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Right portion taking 3/4 of the page - To be implemented */}
    </>
  );
}

export default DashboardFilters;
