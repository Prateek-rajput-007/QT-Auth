
# Login and Registration System

A full-stack authentication system featuring user registration, login, and a protected dashboard. Built using the MERN stack with React (Vite) and Tailwind CSS on the frontend, and Node.js, Express, and MongoDB on the backend. Authenticated sessions are handled via JWT and managed globally with React's Context API.

## Live Demo

[https://qt-auth.vercel.app](https://qt-auth.vercel.app)

## Features

* Registration with name, date of birth, email, and password
* Login with email and password
* Protected dashboard only accessible to authenticated users
* Navbar with user's name, email, and logout button
* Global authentication state with React Context API
* Responsive UI with Tailwind CSS
* Font Awesome icons in forms

## Tech Stack

**Frontend:**

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM
* Font Awesome

**Backend:**

* Node.js
* Express
* MongoDB & Mongoose
* JSON Web Token (JWT)
* bcryptjs

## Project Structure

frontend/
├── src/
│   ├── components/ (LoginForm, RegisterForm, Navbar, ProtectedTable)
│   ├── context/ (AuthContext.js)
│   ├── pages/ (Login.jsx, Register.jsx, Dashboard.jsx)
│   ├── App.jsx, main.jsx
│   └── index.css

backend/
├── config/ (db.js)
├── models/ (User.js)
├── routes/ (auth.js)
├── middleware/ (authMiddleware.js)
├── .env
├── server.js
├── package.json

## Installation

**Backend Setup:**

1. Navigate to `backend/`
2. Run `npm install`
3. Create a `.env` file with:
   MONGO\_URI=mongodb://localhost:27017/auth-system
   JWT\_SECRET=your\_jwt\_secret\_key
   PORT=5000
4. Start server with `npm run dev`

**Frontend Setup:**

1. Navigate to `frontend/`
2. Run `npm install`
3. Start with `npm run dev`
4. Visit `http://localhost:5173`

## Usage

**Register:**

* Visit `/register`
* Fill name, DOB, email, password
* Redirects to dashboard on success

**Login:**

* Visit `/login`
* Enter email and password
* Redirects to dashboard

**Dashboard:**

* Displays a static table
* Protected route; shows user's name/email
* Includes Logout button

**Logout:**

* Clears session
* Redirects to login

## Authentication Flow

1. User registers or logs in → Backend sends JWT
2. Token is stored in localStorage
3. AuthContext reads token and sets auth state
4. Protected routes verify user using context

## Notes

* MongoDB must be running (locally or via Atlas)
* Backend runs on port 5000 (adjust API URLs in frontend if needed)
* Tailwind and Font Awesome used for styling
* Authentication state is managed globally with Context API

