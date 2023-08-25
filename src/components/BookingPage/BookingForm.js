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
}) {
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(date) });
  }, [date, dispatch]);

  console.log(date);

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
      <select id="res-time " onChange={(e) => setTime(e.target.value)}>
        {availableTimes &&
          availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
