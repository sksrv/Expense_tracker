# Expense Tracker – Full Stack Application

A full-stack expense tracker application built as part of a **Frontend Developer Intern assignment**.  
The project demonstrates frontend development skills along with basic backend integration, authentication, and secure API handling.

---

## 🚀 Project Overview

This application allows users to:
- Register and log in securely
- Access protected routes using JWT authentication
- Manage personal expenses through a dashboard
- View profile details
- Perform CRUD operations on expenses

The focus of this project is **clean frontend architecture**, **secure authentication**, and **scalable backend design**.

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs

---

## ✨ Features

### Authentication
- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes (dashboard, profile)

### Dashboard
- Add new expenses
- Delete existing expenses
- Search expenses by title
- View total expenses (calculated dynamically)

### Profile
- View logged-in user details
- Username and email display
- Edit profile button (disabled – planned feature)

### Security
- JWT authentication middleware
- User-specific expense access
- Secure environment variable handling

---

## 📂 Project Structure

# Expense Tracker – Full Stack Application

A full-stack expense tracker application built as part of a **Frontend Developer Intern assignment**.  
The project demonstrates frontend development skills along with basic backend integration, authentication, and secure API handling.

---

## 🚀 Project Overview

This application allows users to:
- Register and log in securely
- Access protected routes using JWT authentication
- Manage personal expenses through a dashboard
- View profile details
- Perform CRUD operations on expenses

The focus of this project is **clean frontend architecture**, **secure authentication**, and **scalable backend design**.

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs

---

## ✨ Features

### Authentication
- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes (dashboard, profile)

### Dashboard
- Add new expenses
- Delete existing expenses
- Search expenses by title
- View total expenses (calculated dynamically)

### Profile
- View logged-in user details
- Username and email display
- Edit profile button (disabled – planned feature)

### Security
- JWT authentication middleware
- User-specific expense access
- Secure environment variable handling

---

## 📂 Project Structure
expense-tracker-fullstack/
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ └── App.jsx
│ └── package.json
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

> ⚠️ The `.env` file is intentionally excluded from version control.

---

## ▶️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker-fullstack.git
cd expense-tracker-fullstack
2️⃣ Start Backend
cd backend
npm install
npm run dev

Backend runs on:
http://localhost:5000

3️⃣ Start Frontend
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

🔗 API Endpoints
Auth Routes
POST /api/auth/register – Register user
POST /api/auth/login – Login user
GET /api/auth/profile – Get user profile (protected)
Expense Routes
POST /api/expenses – Add expense (protected)
GET /api/expenses – Get user expenses (protected)
DELETE /api/expenses/:id – Delete expense (protected)

🧪 Testing
Backend APIs tested using Postman
Frontend tested manually for:
Authentication flow
Protected routing
Expense CRUD operations
Logout and session persistence
🔮 Future Improvements
Edit profile functionality
Expense categories analytics
Pagination for large expense lists
Role-based access control

👤 Author
Sourav
Final-year Computer Science student
Aspiring Frontend / Full Stack Developer
