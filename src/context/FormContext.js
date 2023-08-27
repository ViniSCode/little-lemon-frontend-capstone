import { createContext, useState } from "react";

export const FormContext = createContext({});

export function FormContextProvider({ children }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  return (
    <FormContext.Provider
      value={{
        date,
        setDate,
        time,
        setTime,
        numberOfGuests,
        setNumberOfGuests,
        occasion,
        setOccasion,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
