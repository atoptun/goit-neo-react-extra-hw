# Phonebook — React SPA with Authentication

A full-featured contact management application built as part of the GoIT
Neoversity React curriculum. The app demonstrates user authentication, protected
routing, and asynchronous state management backed by a real REST API.

---

## Overview

**Phonebook** is a single-page application that lets authenticated users manage
their personal contact list. It integrates with the
[GoIT Connections API](https://connections-api.goit.global) for all data
operations and persists the auth token across browser sessions.

Key capabilities:

- **Authentication** — Register, log in, and log out with JWT-based sessions
  persisted via `redux-persist`.
- **Protected routes** — The contacts page is accessible only to authenticated
  users; auth pages redirect logged-in users away automatically.
- **Contact management** — Create, read, update, and delete contacts with full
  async feedback.
- **Search & filter** — Real-time name filtering powered by a memoized
  `createSelector`.
- **Notifications** — Toast feedback on every async operation (success and
  error).
- **Material UI theming** — Consistent, custom-themed design system built on MUI
  v6.

---

## Tech Stack

| Layer               | Technology                            |
| ------------------- | ------------------------------------- |
| UI library          | React 19                              |
| State management    | Redux Toolkit 2 + React Redux         |
| Session persistence | redux-persist                         |
| Routing             | React Router v7                       |
| HTTP client         | Axios                                 |
| Form handling       | react-hook-form + react-hook-form-mui |
| Validation          | Yup                                   |
| Component library   | MUI (Material UI) v6 + Emotion        |
| Icons               | MUI Icons + Iconify                   |
| Notifications       | react-hot-toast                       |
| Build tool          | Vite 8                                |
| Code quality        | ESLint, Prettier, Husky, lint-staged  |

---

## Application Routes

| Route       | Access     | Description                                                       |
| ----------- | ---------- | ----------------------------------------------------------------- |
| `/`         | Public     | Home / landing page                                               |
| `/register` | Restricted | Registration form (redirects to `/contacts` if already logged in) |
| `/login`    | Restricted | Login form (redirects to `/contacts` if already logged in)        |
| `/contacts` | Private    | Phonebook — requires authentication                               |
| `*`         | Public     | 404 Not Found page                                                |

---

## Project Structure

```text
src/
├── components/
│   ├── AppLayout/          # Root layout shell (header + footer + outlet)
│   ├── AppHeader/          # Top navigation bar
│   ├── AppFooter/          # Page footer
│   ├── AppLogo/            # Brand logo component
│   ├── Navigation/         # Main nav links
│   ├── AuthNav/            # Login / Register links (guest only)
│   ├── UserMenu/           # User name + logout button (authenticated)
│   ├── ContactCard/        # Single contact display with edit/delete actions
│   ├── ContactDialog/      # Modal dialog for add/edit contact form
│   ├── ContactForm/        # Add / edit contact form (react-hook-form + Yup)
│   ├── ContactList/        # Contact list renderer with async state handling
│   ├── ContactToolBar/     # Search box + add button toolbar
│   ├── FormCard/           # Shared card wrapper for auth forms
│   ├── LoginForm/          # Login form (react-hook-form + Yup)
│   ├── RegistrationForm/   # Registration form
│   └── SearchBox/          # Real-time search input
├── guards/
│   ├── PrivateRoute.jsx    # Redirects unauthenticated users to /login
│   ├── RestrictedRoute.jsx # Redirects authenticated users away from auth pages
│   └── helper.jsx          # withGuardSuspense() HOC wiring lazy loading + guards
├── pages/
│   ├── HomePage/           # Public landing page
│   ├── LoginPage/          # Wraps LoginForm
│   ├── RegistrationPage/   # Wraps RegistrationForm
│   ├── ContactsPage/       # Protected phonebook view
│   ├── NotFoundPage/       # 404 view
│   └── ErrorPage/          # Router-level error boundary
├── redux/
│   ├── auth/
│   │   ├── operations.js    # Async thunks: register, logIn, logOut, refreshUser
│   │   ├── selectors.js    # Auth state selectors
│   │   └── slice.js        # Auth slice (token, isLoggedIn, isRefreshing)
│   ├── contacts/
│   │   ├── operations.js   # Async thunks: fetchContacts, addContact, deleteContact, updateContact
│   │   ├── selectors.js    # Contact selectors incl. memoized filter selector
│   │   └── slice.js        # Contacts slice (items, loading, error, editingContact)
│   ├── filters/
│   │   ├── selectors.js    # Filter selectors
│   │   └── slice.js        # Filters slice
│   └── store.js            # Store with redux-persist auth config
├── utils/
│   └── debug.js            # Development debug helpers
├── theme.js                # Custom MUI theme
├── router.jsx              # createBrowserRouter config with lazy-loaded pages
├── App.jsx                 # Root component (refreshUser on mount)
└── main.jsx                # Entry point — Provider, PersistGate, ThemeProvider
```

---

## Redux State Architecture

The store holds three slices. Only the auth token is persisted to
`localStorage`.

```json
{
  "auth": {
    "user": { "name": null, "email": null },
    "token": null,
    "isLoggedIn": false,
    "isRefreshing": false
  },
  "contacts": {
    "items": [],
    "editingContact": null,
    "loading": false,
    "error": null
  },
  "filters": {
    "name": ""
  }
}
```

### Auth operations (`redux/auth/operations.js`)

All thunks target `https://connections-api.goit.global`.

| Thunk         | Method & Path        | Description                                     |
| ------------- | -------------------- | ----------------------------------------------- |
| `register`    | `POST /users/signup` | Create account and set auth header              |
| `logIn`       | `POST /users/login`  | Authenticate and set auth header                |
| `logOut`      | `POST /users/logout` | Invalidate session and clear auth header        |
| `refreshUser` | `GET /users/current` | Re-hydrate user from persisted token on startup |

### Contacts operations (`redux/contacts/operations.js`)

All requests include the `Authorization: Bearer <token>` header.

| Thunk           | Method & Path          | Description                            |
| --------------- | ---------------------- | -------------------------------------- |
| `fetchContacts` | `GET /contacts`        | Load all contacts for the current user |
| `addContact`    | `POST /contacts`       | Create a new contact                   |
| `deleteContact` | `DELETE /contacts/:id` | Remove a contact permanently           |
| `updateContact` | `PATCH /contacts/:id`  | Update an existing contact             |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9

### 1. Clone and install dependencies

```bash
git clone https://github.com/atoptun/goit-neo-react-extra-hw
cd goit-neo-react-extra-hw
pnpm install
```

### 2. Start the development server

```bash
pnpm run dev
```

The app will be available at `http://localhost:5173`.

### 3. Build for production

```bash
pnpm run build
```

The optimized bundle is output to the `dist/` folder.

### 4. Preview the production build

```bash
pnpm run preview
```

---

## Additional Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm run lint`     | Run ESLint across the project       |
| `pnpm run lint-fix` | Auto-fix ESLint warnings and errors |
| `pnpm run format`   | Format all files with Prettier      |

> [!NOTE] A pre-commit hook (Husky + lint-staged) automatically runs ESLint and
> Prettier on staged `.js`/`.jsx` and `.css`/`.json`/`.md` files before every
> commit.

---

## API

The application targets the public GoIT Connections API at
[GoIT Connections API](https://connections-api.goit.global/docs/). No additional
environment variables or API keys are required — you only need an account
(register through the app itself).

> [!IMPORTANT] User accounts are scoped to the Connections API. Contacts created
> by one user are not visible to others.
