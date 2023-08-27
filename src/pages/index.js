import { BookingPage } from "@/components/BookingPage";
import { Main } from "@/components/Main";
import { useModal } from "@/hooks/useModal";
import { initializeTimes, updateTimes } from "@/utils/Time";
import { useReducer } from "react";

export default function Home() {
  const { isBookingModalOpen } = useModal();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <Main />
      {isBookingModalOpen && (
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
      )}
    </div>
  );
}
