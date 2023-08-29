import "@testing-library/jest-dom/extend-expect"; // for toBeInTheDocument
import { render, screen } from "@testing-library/react";
import {
  fetchAPI,
  initializeTimes,
  submitAPI,
  updateTimes,
} from "../../utils/Time";
import { BookingPage } from "../BookingPage/index";

test("Render Fields", () => {
  render(
    <BookingPage
      availableTimes={{
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      }}
      dispatch={jest.fn((action) => action)}
    />
  );

  const dateLabel = screen.getByText("Select Date");
  expect(dateLabel).toBeInTheDocument();
  const dateInput = screen.getByTestId("booking-date");
  expect(dateInput).toBeInTheDocument();

  const timeLabel = screen.getByText("Select Time");
  expect(timeLabel).toBeInTheDocument();
  const timeInput = screen.getByTestId("booking-time");
  expect(timeInput).toBeInTheDocument();

  const guestLabel = screen.getByText("Number of guests");
  expect(guestLabel).toBeInTheDocument();
  const guestsInput = screen.getByTestId("number-of-guests");
  expect(guestsInput).toBeInTheDocument();

  const occasionLabel = screen.getByText("Select Occasion");
  expect(occasionLabel).toBeInTheDocument();
  const occasionInput = screen.getByTestId("occasion");
  expect(occasionInput).toBeInTheDocument();

  const submitButton = screen.getByDisplayValue("Make Your reservation");
  expect(submitButton).toBeInTheDocument();
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
