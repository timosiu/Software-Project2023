import { useState, useContext } from "react";
import DatePicker from "react-datepicker";

import { createReservation } from "../api/reservations";
import { AuthContext } from "../../context/auth-context";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ roomPrice, roomId }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [nights, setNights] = useState(0);

  const auth = useContext(AuthContext);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Calculate nights
    if (start && end) {
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setNights(nights);
    }
  };
  return (
    <div>
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
      <div className="mt-10">
        <h1 className="text-2xl">
          Total Price: {endDate && roomPrice * nights * numberOfPeople}{" "}
          {endDate && "Eur"}{" "}
        </h1>
      </div>
      <div className="mt-4">
        <button
          className="bg-haven-red hover:bg-light-accent duration-500 text-5xl py-2 px-4 shadow-2xl"
          onClick={async () => {
            const reservation = {
              roomId: roomId,
              totalCost: roomPrice * nights * numberOfPeople,
              numberOfPeople: numberOfPeople,
              startDate: startDate,
              endDate: endDate,
            };
            const result = await createReservation(reservation, auth.token);
            console.log(result);
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
