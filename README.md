# Mini Event Management System API

A backend system built using **Node.js, Express, and MySQL** that allows users to browse events, book tickets, and manage attendance.

---

## Features

* Create and view events
* Book tickets with availability check
* Transaction handling to prevent overbooking
* View user bookings
* Mark attendance using booking code
* OpenAPI (Swagger) documentation
* Postman collection for testing

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Documentation:** OpenAPI (Swagger)
* **Testing:** Postman

---

## Project Structure

```
Event-Management/
│
├── config/              # Database connection
├── controllers/         # Route handlers
├── services/            # Business logic
├── routes/              # API routes
├── utils/               # Helper functions
│
├── app.js               # Entry point
├── schema.sql           # Database schema
├── swagger.yaml         # API documentation
├── postman_collection.json
├── package.json
└── README.md
```

---

## Setup Instructions

### Clone Repository

```
git clone https://github.com/samrat-ghosh-007/Event-Booking-System/
cd Event-Management
```

---

### Install Dependencies

```
npm install
```

---

### Setup Environment Variables

Create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=event_system
PORT=5000
```

---

### Setup Database

Run in MySQL:

```
source schema.sql;
```

OR manually create database and tables using `schema.sql`

---

### Run Server

```
node app.js
```

Server runs on:

```
http://localhost:5000
```

---

## API Endpoints

### Events

* `GET /api/events` → Get all upcoming events
* `POST /api/events` → Create event

---

### Bookings

* `POST /api/bookings` → Book tickets

---

### Users

* `GET /api/users/:id/bookings` → Get user bookings

---

### Attendance

* `POST /api/events/:eventId/attendance` → Mark attendance

---

## API Testing

Import the Postman collection:

```
postman_collection.json
```

Use:

* Base URL: `http://localhost:5000/api`

---

## API Documentation

OpenAPI specification available in:

```
swagger.yaml
```

You can view it using:

* Swagger Editor (https://editor.swagger.io/)

---

## Key Concepts Implemented

* **Transactions & Row Locking** to prevent race conditions
* **Separation of Concerns** (Controller → Service → DB)
* **Environment-based configuration**
* **Input validation & error handling**

---


## Author

**Samrat Ghosh**

---

## Notes

* This project is built for learning and evaluation purposes
* API documentation is fully aligned with implementation
