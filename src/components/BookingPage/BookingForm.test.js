import { BookingPage } from "@/components/BookingPage";
import {
  fetchAPI,
  initializeTimes,
  submitAPI,
  updateTimes,
} from "@/utils/Time";
import "@testing-library/jest-dom/extend-expect"; // for toBeInTheDocument
import { render, screen } from "@testing-library/react";

test("Renders Input Fields text", () => {
  render(
    <BookingPage
      availableTimes={{
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      }}
      dispatch={jest.fn((action) => action)}
    />
  );

  const bookNowText = screen.getByText(/Book Now/i);
  expect(bookNowText).toBeInTheDocument();
});

describe("BookingPage", () => {
  test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test("updateTimes returns the same state", () => {
    const state = {
      times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    const action = { type: "SOME_ACTION" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

  test("submitAPI returns true", () => {
    const formData = {
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
