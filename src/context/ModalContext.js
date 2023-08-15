import { createContext, useState } from "react";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{ isBookingModalOpen, setIsBookingModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}
