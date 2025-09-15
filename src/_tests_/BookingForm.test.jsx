import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders required fields", () => {
  render(<BookingForm />);
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test("shows validation errors and blocks submit", async () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByRole("button", { name: /book table/i }));
  expect(await screen.findAllByText(/required/i)).toHaveLength(5);
});

test("calls onConfirm with valid data", async () => {
  const onConfirm = jest.fn();
  render(<BookingForm onConfirm={onConfirm} />);
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2025-10-10" } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Ada Lovelace" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "ada@example.com" } });
  fireEvent.click(screen.getByRole("button", { name: /book table/i }));
  await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(1));
});
