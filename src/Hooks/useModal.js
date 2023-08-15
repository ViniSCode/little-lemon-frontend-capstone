import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function useModal() {
  const { isBookingModalOpen, setIsBookingModalOpen } =
    useContext(ModalContext);

  return {
    isBookingModalOpen,
    setIsBookingModalOpen,
  };
}
