import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  date: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  guests: Yup.number().min(1).max(10).required("Required"),
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Enter a valid email").required("Required"),
});

const times = ["17:00","17:30","18:00","18:30","19:00","19:30","20:00"];

export default function BookingForm({ onConfirm }) {
  return (
    <section aria-labelledby="booking-title">
      <h2 id="booking-title">Reserve a Table</h2>
      <Formik
        initialValues={{ date: "", time: "", guests: 2, name: "", email: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onConfirm?.(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ isSubmitting, isValid, touched, errors }) => (
          <Form aria-live="polite">
            <div className="grid">
              <label htmlFor="date">Date</label>
              <Field
                id="date" name="date" type="date" required
                aria-invalid={touched.date && !!errors.date}
              />
              <ErrorMessage component="p" className="error" name="date" />

              <label htmlFor="time">Time</label>
              <Field
                as="select" id="time" name="time" required
                aria-invalid={touched.time && !!errors.time}
              >
                <option value="">Select a time</option>
                {times.map(t => <option key={t} value={t}>{t}</option>)}
              </Field>
              <ErrorMessage component="p" className="error" name="time" />

              <label htmlFor="guests">Number of guests</label>
              <Field
                id="guests" name="guests" type="number" min="1" max="10" required
                aria-invalid={touched.guests && !!errors.guests}
              />
              <ErrorMessage component="p" className="error" name="guests" />

              <label htmlFor="name">Full name</label>
              <Field
                id="name" name="name" type="text" autoComplete="name" required
                aria-invalid={touched.name && !!errors.name}
              />
              <ErrorMessage component="p" className="error" name="name" />

              <label htmlFor="email">Email</label>
              <Field
                id="email" name="email" type="email" autoComplete="email" required
                aria-invalid={touched.email && !!errors.email}
              />
              <ErrorMessage component="p" className="error" name="email" />
            </div>

            <button className="btn" type="submit" disabled={isSubmitting || !isValid}>
              Book table
            </button>
            <p className="hint">We’ll hold your table for 10 minutes after the selected time.</p>
          </Form>
        )}
      </Formik>
    </section>
  );
}
