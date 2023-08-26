import { BookingPage } from "@/components/BookingPage";
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
