Roqqu Backend Engineer Assessment

Project Overview

This project is a User Management System built with Node.js, Express, Sequelize, and SQLite, allowing users to register, manage their profiles, create addresses, and publish posts. It follows a modular structure, ensuring scalability and maintainability.

🚀 Features

- User Management → Register, retrieve, and count users.
- Address Management → Each user can create and update a single address.
- Post Management → Users can create, retrieve, and delete posts.
- Validation & Error Handling → Ensures data integrity using Express Validator.
- Database Persistence → Uses SQLite with Sequelize ORM.
- Docker Support → Easy deployment with Docker Compose.

🛠️ Setup Instructions

```sh
1️⃣ Clone the Repository
git clone https://github.com/Sixtus6/roqqu-node.git
cd roqqu-node
```

```sh
2️⃣ Run the Project Using Docker
docker-compose up --build
```

Project Structure

```sh
├── src
│   ├── config
│   │   ├── environment.config.ts    # Handles environment variables
│   │   ├── response.config.ts       # Standardized API responses
│   │   ├── swagger.config.ts        # Swagger documentation setup
│   ├── controller
│   │   ├── address.controller.ts    # Address-related API logic
│   │   ├── post.controller.ts       # Post-related API logic
│   │   ├── user.controller.ts       # User-related API logic
│   ├── database
│   │   ├── database.connection.ts   # Database connection setup
│   │   ├── database.relationship.ts # Defines database relationships
│   ├── index.ts                     # Application entry point
│   ├── model
│   │   ├── address.model.ts         # Address model
│   │   ├── post.model.ts            # Post model
│   │   ├── user.model.ts            # User model
│   ├── routes
│   │   ├── address.routes.ts        # Routes for address module
│   │   ├── post.routes.ts           # Routes for post module
│   │   ├── user.routes.ts           # Routes for user module
│   ├── service
│   │   ├── address.service.ts       # Business logic for addresses
│   │   ├── post.service.ts          # Business logic for posts
│   │   ├── user.service.ts          # Business logic for users
│   └── validator
│       ├── address.validator.ts     # Input validation for addresses
│       ├── post.validator.ts        # Input validation for posts
│       ├── user.validator.ts        # Input validation for users
└── tsconfig.json                     # TypeScript configuration
