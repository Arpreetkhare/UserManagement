# User Management System

A Node.js-based User Management System with role-based access control, allowing only superadmins to manage users.

## Features
- User authentication using JWT.
- Role-based access control.
- Only superadmins can view all users.
- Secure password hashing using bcrypt.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for creating routes and middleware.
- **Mongoose**: MongoDB object modeling.
- **bcryptjs**: Secure password hashing.
- **jsonwebtoken**: JSON Web Token for authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arpreetkhare/UserManagement.git
   cd Assigment(FIRST BENCH.AI)-Arpreetkhare
2. **Install dependencies:**
   ```bash
   npm install

3. **Set up the database and create the superadmin user:**
   ```bash
   node setupSuperadmin.js

4. **Start the server:**
   ```bash
   npm start

## API Endpoints

### Public Routes

| Method | Endpoint              | Description                | Headers | Request Body                                                                                   | Response                                                                 |
|--------|-----------------------|----------------------------|---------|------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| POST   | `/api/users/register` | Register a new user        | N/A     | ```json { "name": "User Name", "email": "user@example.com", "password": "password123" } ```    | ```json { "message": "User registered successfully" } ```              |
| POST   | `/api/users/login`    | Login as a user            | N/A     | ```json { "email": "user@example.com", "password": "password123" } ```                        | ```json { "message": "Login successful", "token": "jwt_token" } ```    |

---

### Protected Routes (User)

| Method | Endpoint                 | Description                | Headers                             | Request Body                                                                                                  | Response                                                                                   |
|--------|--------------------------|----------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| GET    | `/api/users/profile`     | Get logged-in user profile | `Authorization: Bearer <token>`    | N/A                                                                                                         | ```json { "name": "User Name", "email": "user@example.com", "role": "user" } ```           |
| PUT    | `/api/users/profile`     | Update user profile        | `Authorization: Bearer <token>`    | ```json { "name": "Updated Name", "email": "updated@example.com" } ```                                      | ```json { "message": "Profile updated successfully" } ```                                |
| PUT    | `/api/users/deactivate`  | Deactivate user account    | `Authorization: Bearer <token>`    | N/A                                                                                                         | ```json { "message": "Account deactivated successfully" } ```                             |

---

### Administrator Routes (Superadmin Only)

| Method | Endpoint                       | Description                       | Headers                             | Request Body                                                                                                  | Response                                                                                   |
|--------|--------------------------------|-----------------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| POST   | `/api/admin/superadmin/login` | Login as a superadmin             | N/A                                 | ```json { "email": "admin@example.com", "password": "password123" } ```                                     | ```json { "message": "Login successful", "token": "jwt_token" } ```                       |
| GET    | `/api/admin/users`            | Get a list of all users           | `Authorization: Bearer <token>`    | N/A                                                                                                         | ```json [ { "name": "User 1", "email": "user1@example.com", "role": "user" } ] ```         |
   




   

   
