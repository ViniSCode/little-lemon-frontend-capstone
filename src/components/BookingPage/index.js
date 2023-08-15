import { FiXCircle } from "react-icons/fi";
import "./styles.css";
export function BookingPage() {
  function handleSubmitBooking() {}

  return (
    <div className="booking-background">
      <div className="close-modal">
        <FiXCircle size={20} className="close-modal-icon" />
      </div>
      <form onSubmit={handleSubmitBooking}>
        <h1 className="reserve-title">Reserve a Table</h1>
        <div className="date">
          <label>
            Date:
            <input type="date" name="date" id="date" />
          </label>
        </div>
        <div className="time">
          <label>
            Time:
            <input type="time" name="time" id="time" />
          </label>
        </div>
        <div className="guests">
          <label>
            Number of guests:
            <input type="number" name="guests" id="guests" />
          </label>
        </div>
        <div className="occasion">
          <label>
            Birthday
            <input
              type="radio"
              id="birthday"
              name="occasion"
              value="Birthday"
            />
          </label>

          <label>
            Anniversary
            <input
              type="radio"
              id="anniversary"
              name="occasion"
              value="Anniversary"
            />
          </label>
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
