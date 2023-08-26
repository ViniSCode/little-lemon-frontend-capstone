import { useEffect } from "react";

export function BookingForm({
  setDate,
  setTime,
  setNumberOfGuests,
  setOccasion,
  date,
  availableTimes,
  handleSubmitBooking,
  dispatch,
  numberOfGuests,
  occasion,
}) {
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(date) });
  }, [date, dispatch]);

  return (
    <form onSubmit={(event) => handleSubmitBooking(event)}>
      <h2 className="book-now">Book Now</h2>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={availableTimes?.times[0]}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {availableTimes &&
          availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
