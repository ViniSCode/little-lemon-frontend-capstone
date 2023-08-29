import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function useForm() {
  const {
    date,
    setDate,
    time,
    setTime,
    numberOfGuests,
    setNumberOfGuests,
    occasion,
    setOccasion,
  } = useContext(FormContext);

  return {
    date,
    setDate,
    time,
    setTime,
    numberOfGuests,
    setNumberOfGuests,
    occasion,
    setOccasion,
  };
}
