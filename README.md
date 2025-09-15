# Little Lemon — Table Booking (React)

An accessible, responsive booking form for the Little Lemon restaurant.
Built with React, Formik, and Yup, with unit tests using React Testing Library.

This project aligns with the course rubric: UX/UI, accessibility, validation, unit tests, semantics, responsiveness, and Git usage.

## Features

- Booking flow: Date, Time, Guests, Name, Email, then confirmation
- Validation: Required fields, email format, guest range (1–10)
- Accessibility:
  - Semantic landmarks: <header>, <main>, <footer>
  - label htmlFor for every input
  - aria-invalid on invalid fields, inline errors, aria-live="polite" for messages
  - Keyboard focusable controls and descriptive button text
- Responsive layout: mobile first, grid on wider screens
- Tests: render fields, show validation errors, successful submit callback
- Clean repository: .gitignore, simple scripts

## Tech Stack

- React (works with Create React App or Vite)
- Formik (form state) and Yup (schema validation)
- @testing-library/react and @testing-library/jest-dom (unit tests)
- Plain CSS

## Getting Started

Requirements: Node.js 18+ and npm

Install
```bash
npm install
