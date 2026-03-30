-- Database
CREATE DATABASE IF NOT EXISTS event_system;
USE event_system;

-- Users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_date DATETIME NOT NULL,
    total_capacity INT NOT NULL,
    remaining_tickets INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    booking_code VARCHAR(20) UNIQUE,
    tickets_booked INT DEFAULT 1,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- Attendance
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_code VARCHAR(20),
    entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_code) REFERENCES bookings(booking_code) ON DELETE CASCADE
);