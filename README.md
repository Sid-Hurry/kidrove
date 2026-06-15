# Kidrove AI & Robotics Summer Workshop

A simplified, premium, responsive landing page and registration system for the Kidrove AI & Robotics Summer Workshop for kids aged 8–14. 

This repository features a visual redesign inspired by the warm, organic, kid-friendly "Kiddo's" aesthetic (warm cream background, forest/sage green, warm orange, and indigo card accents with flat geometric SVGs).

---

## Repository Structure

The project has been consolidated into a clean, simple, and self-contained structure to make editing and understanding straightforward:

```
kidrove/
├── backend/
│   ├── src/
│   │   └── app.ts           # Consolidated Express server, MongoDB schemas, and POST API
│   ├── .env                 # Environment configurations (Port & MongoDB URI)
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── App.tsx          # Single entry React page holding all UI sections
│   │   ├── index.css        # Styles, body colors, and CSS custom micro-animations
│   │   └── main.tsx
│   ├── public/              # Image resources
│   ├── package.json
│   ├── vite.config.ts       # React dev config & proxy settings
│   └── tailwind.config.js
└── README.md                # Project documentation
```

---

## Tech Stack
* **Frontend**: React, TypeScript, Vite, Tailwind CSS
* **Backend**: Node.js, Express.js, TypeScript, Mongoose
* **Database**: MongoDB (Atlas or Local)

---

## Features
1. **Hero Section**: Animated vector robot mascot floating freely on a warm cream background, complete with eye-blinking and chest-core pulsing animations.
2. **Interactive Details Grid**: 5 colorful pastel cards presenting course age group, duration, online format, flat fee, and start dates, updated with clear descriptive details for parents.
3. **Features & Curriculum Section**: A balanced layout of colorful cards presenting core topics like AI basics, robot structures, sensor inputs, loop/conditional logic, and puzzle debugging with custom tag badges.
4. **FAQ Section**: Fully responsive vertical accordion checklist addressing standard onboarding questions.
5. **Secure Enrollment Form**: Form inputs validated both in the browser (instant validation feedback) and securely in the backend server.
6. **Robust Database Connectivity**: Mongoose schema connection with standard local logs fallback if the database connection drops.

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by editing the `.env` file inside the `backend` folder:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/database
   ```
4. Start the backend developer server:
   ```bash
   npm run dev
   ```
   The backend will start running on `http://localhost:5000`.

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite developer server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser. All requests to `/api/*` will automatically proxy to the backend server at port `5000`.

---

## API Endpoints

### `POST /api/enquiry`
Submits a new student registration enquiry.

* **Headers**: `Content-Type: application/json`
* **Body Request**:
  ```json
  {
    "name": "Aarav Sharma",
    "email": "parent@example.com",
    "phoneNumber": "9876543210"
  }
  ```
* **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Registration received successfully"
  }
  ```
* **Validation Error Response (400 Bad Request)**:
  ```json
  {
    "success": false,
    "message": "A valid email address is required"
  }
  ```
