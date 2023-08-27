import { useForm } from "@/hooks/useForm";
import { useEffect } from "react";

export function BookingForm({ availableTimes, submitForm, dispatch }) {
  const {
    date,
    setDate,
    time,
    setTime,
    numberOfGuests,
    setNumberOfGuests,
    occasion,
    setOccasion,
  } = useForm();

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(date) });
  }, [date, dispatch]);

  return (
    <form onSubmit={(event) => submitForm(event)}>
      <h2 className="book-now">Book Now</h2>
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes &&
          availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
      <label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />{" "}
        Choose Date
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="" disabled>
          Select an occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        disabled={
          time.trim() === "" ||
          date.trim() === "" ||
          numberOfGuests === 0 ||
          occasion.trim() === ""
        }
      />
    </form>
  );
}
