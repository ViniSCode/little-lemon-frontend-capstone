import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

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
