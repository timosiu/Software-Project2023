import { useState, useContext } from "react";
import DatePicker from "react-datepicker";

import { createReservation } from "../api/reservations";
import { AuthContext } from "../../context/auth-context";

import "react-datepicker/dist/react-datepicker.css";

// Calendar component used for booking rooms
const Calendar = ({ roomPrice, roomId }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [nights, setNights] = useState(0);

  const auth = useContext(AuthContext);

  // Calculate nights on date change
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Calculate nights between start and end dates
    if (start && end) {
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setNights(nights);
    }
  };

  return (
    <div>
      {/* Datepicker for selecting wanted dates */}
      <DatePicker
        placeholderText="CLick to select nights"
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        isClearable={true}
        selectsRange
        showDisabledMonthNavigation
        dateFormat={"dd/MM/yyyy"}
      />

      {/* Input for selecting number of people */}
      <div className="mt-4">
        <input
          className="w-10 h-8 px-2"
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
          min={1}
        />
        <label className="text-xl"> People</label>
      </div>

      {/* Display total price based on selected dates, number of people and room price */}
      <div className="mt-10">
        <h1 className="text-2xl">
          Total Price: {endDate && roomPrice * nights * numberOfPeople}{" "}
          {endDate && "Eur"}{" "}
        </h1>
      </div>

      {/* Button for creating a room reservation */}
      <div className="mt-4">
        <button
          className="bg-haven-red hover:bg-light-accent duration-500 text-5xl py-2 px-4 shadow-2xl"
          // Create reservation: room id, total cost, number of people, start date and end date
          onClick={async () => {
            const reservation = {
              roomId: roomId,
              totalCost: roomPrice * nights * numberOfPeople,
              numberOfPeople: numberOfPeople,
              startDate: startDate,
              endDate: endDate,
            };
            // Send reservation data to backend
            const result = await createReservation(reservation, auth.token);
            console.log(result);
            // Display popup message based on result:
            // Reservation is in the database already
            // Reservation created successfully
            // Failed to create reservation. Please try again.
            if (
              result &&
              result.message === "Reservation is in the database already"
            ) {
              window.alert("Reservation is in the database already!");
            } else if (result) {
              window.alert("Reservation created successfully!");
            } else {
              window.alert("Failed to create reservation. Please try again.");
            }
          }}
        >
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default Calendar;
