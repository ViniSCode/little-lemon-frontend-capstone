import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";

import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { BookingForm } from "./BookingForm";
export function BookingPage({ dispatch, availableTimes }) {
  const { setIsBookingModalOpen } = useModal();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  function handleSubmitBooking(e) {
    e.preventDefault();
    console.log({
      date,
      time,
      numberOfGuests,
      occasion,
    });

    if (!date || !time || !numberOfGuests || !occasion) {
      window.alert("Please fill in all fields.");
      return;
    }
  }

  return (
    <div className={styles["booking-background"]}>
      <div
        className={styles["close-modal"]}
        onClick={() => setIsBookingModalOpen(false)}
      >
        <FiX size={30} className={styles["close-modal-icon"]} />
      </div>

      <BookingForm
        setDate={setDate}
        date={date}
        setTime={setTime}
        setNumberOfGuests={setNumberOfGuests}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatch={dispatch}
        handleSubmitBooking={handleSubmitBooking}
        numberOfGuests={numberOfGuests}
        occasion={occasion}
      />
    </div>
  );
}
