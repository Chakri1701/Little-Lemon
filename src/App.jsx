import React, { useState, useCallback } from "react";
import BookingForm from "./components/BookingForm";
import "./styles.css";

function Confirmation({ booking, onNew }) {
  if (!booking) return null;

  const { name, guests, date, time, email } = booking;

  return (
    <section className="confirm" role="status" aria-live="polite" aria-atomic="true">
      <h2>Reservation confirmed</h2>
      <p>
        <strong>{name}</strong>, your table for <strong>{guests}</strong> is booked on{" "}
        <strong>{date}</strong> at <strong>{time}</strong>. A confirmation was sent to{" "}
        <strong>{email}</strong>.
      </p>
      {onNew && (
        <div className="actions">
          <button type="button" className="btn" onClick={onNew}>
            Make another booking
          </button>
        </div>
      )}
    </section>
  );
}

export default function App() {
  const [booking, setBooking] = useState(null);

  const handleConfirm = useCallback((data) => setBooking(data), []);
  const handleNewBooking = useCallback(() => setBooking(null), []);

  return (
    <>
      <header>
        <h1>Little Lemon</h1>
      </header>

      <main>
        {!booking && <BookingForm onConfirm={handleConfirm} />}
        <Confirmation booking={booking} onNew={handleNewBooking} />
      </main>

      <footer>
        <small>© {new Date().getFullYear()} Little Lemon</small>
      </footer>
    </>
  );
}
