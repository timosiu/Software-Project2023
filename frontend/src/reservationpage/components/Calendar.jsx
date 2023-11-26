import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ roomPrice }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [nights, setNights] = useState(0);

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
          {endDate && "$"}{" "}
        </h1>
      </div>
      <div className="mt-4">
        <button className="bg-haven-red hover:bg-light-accent duration-500 text-5xl py-2 px-4 shadow-2xl">
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default Calendar;
