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
      <label htmlFor="booking-date">Select Date</label>
      <input
        type="date"
        id="booking-date"
        data-testid="booking-date"
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="booking-time">Select Time</label>
      <select
        id="booking-time"
        data-testid="booking-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="" disabled>
          Select time
        </option>
        {availableTimes &&
          availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
      <label>
        Number of guests
        <input
          data-testid="number-of-guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />{" "}
      </label>
      <label>
        Select Occasion
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          data-testid="occasion"
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <input
        type="submit"
        value="Make Your reservation"
        disabled={
          time === "" || date === "" || numberOfGuests === 0 || occasion === ""
        }
      />
    </form>
  );
}
