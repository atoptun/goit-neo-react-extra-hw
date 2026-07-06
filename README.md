# Neoversity — React Homework #7 (Phonebook with Async Redux Operations)

An educational React application for contact management (phonebook)
demonstrating asynchronous state management with **Redux Toolkit (Async
Thunks)**, data fetching from a remote REST API via **Axios**, form
handling/validation with **Formik & Yup**, and modular styling.

---

## 📋 Overview

**Phonebook** is a contact management application integrated with a mockup
backend server (MockAPI). It allows users to:

- **Fetch Contacts**: Pull contact list asynchronously from the MockAPI database
  on application mount.
- **Add New Contacts**: Save contact names and phone numbers asynchronously to
  the database.
- **Edit & Update Contacts**: Modify contact details with auto-populated inputs
  and save the changes remotely.
- **Delete Contacts**: Remove contacts permanently from the database.
- **Search & Filter**: Filter contacts dynamically by name with a memoized
  selector (`createSelector`) to avoid unnecessary re-calculations.
- **Loading & Error States**: Graceful UI indicators showing loader screens
  during API requests and error alerts upon failures.

---

## 🛠 Technology Stack

- **React 19** — JavaScript library for building user interfaces.
- **Redux Toolkit** — Modern state management toolset, utilizing:
  - `configureStore` for store setup.
  - `createSlice` for managing local/remote slices.
  - `createAsyncThunk` for defining asynchronous operations.
  - `createSelector` for memoized state selection.
- **React Redux** — Official React bindings for Redux.
- **Axios** — Promise-based HTTP client for API interactions.
- **Formik** — Library for handling form state, submissions, and resets.
- **Yup** — Schema builder for value parsing and validation.
- **Vite** — High-performance frontend toolchain and dev server.
- **CSS Modules** — Component-scoped CSS for style encapsulation.
- **Iconify (React)** — Modern icon library for rendering UI symbols.

---

## ⚙️ Environment Configuration

To communicate with the backend, the application requires a project ID from
[MockAPI](https://mockapi.io/).

1. Copy the `.env.example` file to `.env` in the root directory:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and set `VITE_MOCKAPI_PROJECT_ID` to your actual MockAPI project
   ID:

   ```env
   VITE_MOCKAPI_PROJECT_ID=your_project_id_here
   ```

3. MockAPI structure example

   ```json
   {
     "id": "3"
     "name": "Marsha Ryan",
     "number": "1-706-457-5104",
     "createdAt": "2026-07-06T06:28:46.163Z",
   },
   ```

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Container/           # Centered layout container
│   ├── Heading/             # Unified heading component
│   ├── Section/             # Section block wrapper
│   ├── Text/                # Typographical helper component
│   ├── PhoneBook/           # Core wrapper bringing components together
│   ├── ContactForm/         # Add/edit contact form (Formik & Yup validation)
│   ├── ContactList/         # Contact list renderer with async state handling
│   ├── Contact/             # Individual contact card with edit/delete triggers
│   └── SearchBox/           # Real-time search query input
├── redux/
│   ├── contactsOps.js       # Asynchronous thunk operations (fetch, add, delete, update)
│   ├── contactsSlice.js     # Redux slice handling loading/error states and operations
│   ├── filtersSlice.js      # Redux slice for search query input
│   └── store.js             # Redux store setup with standard middleware
├── styles/
│   ├── reset.css            # Standard browser resets
│   └── variables.css        # CSS variables for themes and colors
├── App.jsx                  # Root UI layout component
├── main.jsx                 # Entry point with Redux Provider
└── index.css                # Global CSS styles
```

---

## 📦 Redux State Architecture & Operations

The application store holds two primary slices: `contacts` and `filters`.

### State Structure

```json
{
  "contacts": {
    "items": [
      {
        "id": "1",
        "name": "Rosie Simpson",
        "number": "459-12-56"
      }
    ],
    "editingContact": null,
    "loading": false,
    "error": ""
  },
  "filters": {
    "name": ""
  }
}
```

### Redux Slices & Operations

#### 📞 Contacts Operations (`redux/contactsOps.js`)

Asynchronous action creators generated with `createAsyncThunk`:

- `fetchContacts` (`contacts/fetchAll`) — Performs a `GET /contacts` request to
  fetch all contacts.
- `addContact` (`contacts/addContact`) — Performs a `POST /contacts` request
  with payload `{ name, number }`.
- `deleteContact` (`contacts/deleteContact`) — Performs a `DELETE /contacts/:id`
  request to remove a contact.
- `updateContact` (`contacts/updateContact`) — Performs a `PUT /contacts/:id`
  request with payload `{ id, name, number }` to edit a contact.

#### 📞 Contacts Slice (`redux/contactsSlice.js`)

Handles async action states (`pending`, `fulfilled`, `rejected`) dynamically:

- **Reducers**:
  - `editContact(state, action)`: Sets `editingContact` to the contact object
    corresponding to the passed ID to switch the form to edit mode.
  - `cancelEditContact(state)`: Resets `editingContact` to `null`.
- **Selectors**:
  - `selectContacts`: Retrieves all contact items.
  - `selectLoading`: Retrieves the loading state.
  - `selectError`: Retrieves the error message string.
  - `selectEditingContact`: Retrieves the contact currently being edited.
  - `selectFilteredContacts`: A memoized selector (`createSelector`) combining
    contacts and name filters to compute the filtered list.

#### 🔍 Filters Slice (`redux/filtersSlice.js`)

- **Reducers**:
  - `changeFilter(state, action)`: Updates `filters.name` with the search input
    string.
- **Selectors**:
  - `selectNameFilter`: Retrieves the current filter search string.

---

## 📋 Form Validation Rules

Form validation is powered by a **Yup** schema integrated with **Formik**:

- **Name**: Must be a string, minimum **3 characters**, maximum **50
  characters**, and is **required**.
- **Number**: Must be a string containing only numbers, spaces, and hyphens
  (matches `/^[x\d\s-]+$/`), minimum **3 characters**, maximum **20
  characters**, and is **required**.

---

## 🚀 Installation & Running

Follow these steps to run the application locally:

### 1. Install Dependencies

Make sure you have [pnpm](https://pnpm.io/) installed.

```bash
pnpm install
```

### 2. Configure Environment

Create your `.env` file and set up your MockAPI Project ID as detailed in the
**Environment Configuration** section.

### 3. Start the Development Server

Run the dev server with hot module replacement:

```bash
pnpm run dev
```

### 4. Build for Production

Create an optimized production build in the `dist` folder:

```bash
pnpm run build
```

### 5. Preview the Production Build Locally

Verify the production build works as expected:

```bash
pnpm run preview
```

---

## 🛠 Additional Commands

- `pnpm run lint` — Lint code checks via ESLint.
- `pnpm run lint-fix` — Automatically fix lint warnings and errors.
- `pnpm run format` — Auto-format code styles using Prettier.
