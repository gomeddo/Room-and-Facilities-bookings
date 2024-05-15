import React, { useState } from "react";
import Card from "../../components/card";
import DatePicker from "../../components/datePicker";
import Select from "../../components/select";
import Button from "../../components/button";
import { useRoomContext } from "../../context";

function DashboardFilters() {
  const context = useRoomContext();

  const priceRange = 50;
  const capacities = [...new Set(context.rooms.map((room) => room.capacity))];

  const intervals = context.rooms
    .map((room) => room.price)
    .reduce((intervals, price) => {
      const key = Math.floor(price / priceRange) * priceRange;
      if (!intervals[key]) {
        intervals[key] = [key, key + priceRange];
      }

      return intervals;
    }, [])
    .filter(Boolean)
    .sort((left, right) => left - right);

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

  return (
    <>
      <div className="w-1/3">
        <div className="flex flex-col gap-6 sticky top-28">
          <Card>
            <Card.Body className="flex-1 p-6">
              {/* Title for the duration section */}
              <div className="text-[#6D6A75] text-xl font-bold">
                Stay Duration
              </div>
              {/* Date Picker for selecting dates */}
              <DatePicker
                date={context.duration}
                setDate={context.setDuration}
              />
            </Card.Body>
          </Card>
          {/* Left portion taking 1/4 of the page */}
          <Card className="">
            <Card.Body className="flex-1 p-6 gap-4">
              {/* Title for the filter section */}
              <div className="text-[#6D6A75] text-xl font-bold">Filters</div>
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
                {capacities.map((capacity, index) => (
                  <option key={index} value={capacity}>
                    {capacity} Guest/s
                  </option>
                ))}
              </Select>
              {/* <Select>
            <option value="">Location</option> //Uncomment if needed
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
                  console.log(e.target.value);
                  const value = Number(e.target.value) || -1;
                  setFilters((state) => ({
                    ...state,
                    price: value !== -1 ? value : undefined,
                  }));
                }}
              >
                <option value={-1}>Price</option>
                {intervals.map(([left, right], index) => (
                  <option key={index} value={left}>
                    {left} - {right}
                  </option>
                ))}
              </Select>
              {/* <Select>
            <option value="">Distance</option> //Uncomment if needed
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
        </div>
      </div>

      {/* Right portion taking 3/4 of the page - To be implemented */}
    </>
  );
}

export default DashboardFilters;
