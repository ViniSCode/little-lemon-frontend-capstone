import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";

import { useForm } from "@/hooks/useForm";
import { useModal } from "@/hooks/useModal";
import { submitAPI } from "@/utils/Time";
import { BookingForm } from "./BookingForm";
export function BookingPage({ dispatch, availableTimes }) {
  const { setIsBookingModalOpen } = useModal();
  const {
    date,
    time,
    numberOfGuests,
    occasion,
    setDate,
    setTime,
    setOccasion,
    setNumberOfGuests,
  } = useForm();

  function submitForm(e) {
    e.preventDefault();

    if (!date || !time || !numberOfGuests || !occasion) {
      window.alert("Please fill in all fields.");
      return;
    }

    // submit => form data
    const submitAPIResult = submitAPI({
      date,
      time,
      numberOfGuests,
      occasion,
    });

    setDate("");
    setTime("");
    setOccasion("");
    setNumberOfGuests(1);

    if (submitAPIResult) {
      window.location.replace("/booking-confirmation");
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
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}
