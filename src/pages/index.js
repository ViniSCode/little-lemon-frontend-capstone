import { BookingPage } from "@/components/BookingPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useModal } from "@/hooks/useModal";
import { initializeTimes, updateTimes } from "@/utils/Time";
import { useReducer } from "react";

export default function Home() {
  const { isBookingModalOpen } = useModal();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <Header />
      <Main />
      <Footer />
      {isBookingModalOpen && (
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
      )}
    </div>
  );
}
