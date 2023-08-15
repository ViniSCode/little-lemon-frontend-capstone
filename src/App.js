import "./App.css";
import { useModal } from "./Hooks/useModal";
import { BookingPage } from "./components/BookingPage";
import { Footer } from "./components/Footer/index";
import { Header } from "./components/Header/index";
import { Main } from "./components/Main/index";

function App() {
  const { isBookingModalOpen } = useModal();

  return (
    <>
      {isBookingModalOpen && <BookingPage />}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
