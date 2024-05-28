import React, { useState } from "react";
import Card from "../../components/card";
import DatePicker from "../../components/datePicker";
import Select from "../../components/select";
import Button from "../../components/button";
import { useRoomContext } from "../../context";
import resources from "../constants";

function DashboardFilters() {
  const context = useRoomContext(); // Get the room context data

  const priceRange = 50; // Set the price range for filtering
  const capacities = [...new Set(context.rooms.map((room) => room.capacity))]; // Get unique room capacities

  // Calculate price intervals based on the price range
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

  // State to store the selected filters
  const [filters, setFilters] = useState({
    capacity: undefined,
    roomType: undefined,
    price: undefined,
  });

  // Function to clear the selected filters
  const onClear = () => {
    setFilters({
      capacity: undefined,
      roomType: undefined,
      price: undefined,
    });
    context.setFilters({});
  };

  // Function to apply the selected filters
  const onApply = () => {
    context.setFilters(filters);
  };

  // Check if any filters are set
  const areFiltersSet =
    filters.capacity !== undefined ||
    filters.roomType !== undefined ||
    filters.price !== undefined;

  return (
    <>
      <div className="w-1/3">
        <div className="flex flex-col gap-6 sticky top-28">
          <Card>
            <Card.Body className="flex-1 p-6">
              {/* Title for the duration section */}
              <div className="text-palette-gray-400 text-xl font-bold">
                {resources.label_stay_duration}
              </div>
              {/* Date Picker for selecting dates */}
              <DatePicker
                date={context.duration}
                setDate={context.setDuration}
              />
            </Card.Body>
          </Card>
          {/* Card for the filter section */}
          <Card>
            <Card.Body className="flex-1 p-6 gap-4">
              {/* Title for the filter section */}
              <div className="text-palette-gray-400 text-xl font-bold">
                {resources.label_filter}
              </div>
              {/* Select input for group size */}
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
                <option value={-1}>{resources.label_group_size}</option>
                {capacities.map((capacity, index) => (
                  <option key={index} value={capacity}>
                    {capacity} {resources.label_guests}
                  </option>
                ))}
              </Select>
              {/* Select input for accommodation type */}
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
                <option value={-1}>{resources.label_accommodation_type}</option>
                {context.rooms
                  .map((room) => room.roomType)
                  .map((roomType, index) => (
                    <option key={index} value={roomType}>
                      {roomType}
                    </option>
                  ))}
              </Select>
              {/* Select input for price range */}
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
                <option value={-1}>{resources.label_price_per_night}</option>
                {intervals.map(([left, right], index) => (
                  <option key={index} value={left}>
                    {left} - {right}
                  </option>
                ))}
              </Select>
              {/* Buttons to apply or cancel filter changes */}
              <div className="flex justify-end gap-2 mx-1">
                <Button
                  variant="secondary"
                  onClick={onClear}
                  disabled={!areFiltersSet}
                >
                  {resources.label_filter_reset}
                </Button>
                <Button
                  variant="primary"
                  onClick={onApply}
                  disabled={!areFiltersSet}
                >
                  {resources.label_filter_apply}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DashboardFilters;
