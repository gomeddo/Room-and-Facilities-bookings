import React, { useState } from "react";
import Card from "../../components/card";
import DatePicker from "../../components/datePicker";
import Select from "../../components/select";
import Button from "../../components/button";
import { useRoomContext } from "../../context";

function DashboardFilters() {
  const context = useRoomContext();

  const [filters, setFilters] = useState({
    capacity: undefined,
    roomType: undefined,
    price: undefined,
  });

  const onClear = () => {
    setFilters({});
    context.setFilters({});
  };

  const onApply = () => {
    context.setFilters(filters);
  };

  console.log(filters);

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
          <Select
            value={filters.capacity ?? ""}
            onChange={(e) => {
              const value = Number(e.target.value) || -1;
              setFilters((state) => ({
                ...state,
                capacity: value !== -1 ? value : undefined,
              }));
            }}
          >
            <option value={-1}>Group Size</option>
            {context.rooms
              .map((room) => room.capacity)
              .map((capacity, index) => (
                <option key={index} value={capacity}>
                  {capacity} Guest/s
                </option>
              ))}
          </Select>
          {/* <Select>
            <option value="">Location</option>
          </Select> */}
          <Select
            value={filters.roomType ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              setFilters((state) => ({
                ...state,
                roomType: value !== "-1" ? value : undefined,
              }));
            }}
          >
            <option value={-1}>Accommodation Type</option>
            {context.rooms
              .map((room) => room.roomType)
              .map((roomType, index) => (
                <option key={index} value={roomType}>
                  {roomType}
                </option>
              ))}
          </Select>
          <Select
            value={filters.price ?? ""}
            onChange={(e) => {
              const value = Number(e.target.value) || -1;
              setFilters((state) => ({
                ...state,
                price: value !== -1 ? value : undefined,
              }));
            }}
          >
            <option value={-1}>Price</option>
            {context.rooms
              .map((room) => room.price)
              .sort((left, right) => left - right)
              .map((price, index) => (
                <option key={index} value={price}>
                  {price}
                </option>
              ))}
          </Select>
          {/* <Select>
            <option value="">Distance</option>
          </Select> */}
          {/* Apply and Cancel Buttons to apply or cancel filter changes */}
          <div className="flex justify-end gap-2 mx-1">
            <Button variant="secondary" onClick={onClear}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onApply}>
              Apply
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Right portion taking 3/4 of the page - To be implemented */}
    </>
  );
}

export default DashboardFilters;
