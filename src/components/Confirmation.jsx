import React from "react";
import PropTypes from "prop-types";

export default function Confirmation({ booking, onNew, className = "" }) {
  if (!booking) return null;

  const { name, guests, date, time, email } = booking;

  return (
    <section
      className={`confirm ${className}`.trim()}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
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

Confirmation.propTypes = {
  booking: PropTypes.shape({
    name: PropTypes.string.isRequired,
    guests: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onNew: PropTypes.func,    // optional: clears booking to show the form again
  className: PropTypes.string,
};
