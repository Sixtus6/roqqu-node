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
│   │   ├── environment.config.ts  # Environment variables setup
│   │   ├── response.config.ts     # Standardized API response messages
│   │   └── swagger.config.ts      # Swagger API documentation setup
│   ├── controllers
│   │   ├── address.controller.ts  # Address-related request handling
│   │   ├── post.controller.ts     # Post-related request handling
│   │   └── user.controller.ts     # User-related request handling
│   ├── database
│   │   ├── database.connection.ts  # Establishes database connection
│   │   └── database.relationship.ts # Defines model relationships
│   ├── index.ts  # Entry point for the application
│   ├── middleware
│   │   └── validators
│   │       ├── address.validator.ts  # Address input validation
│   │       ├── post.validator.ts     # Post input validation
│   │       └── user.validator.ts     # User input validation
│   ├── models
│   │   ├── address.model.ts  # Address model definition
│   │   ├── post.model.ts  # Post model definition
│   │   └── user.model.ts  # User model definition
│   ├── routes
│   │   ├── address.routes.ts  # Routes for address management
│   │   ├── post.routes.ts  # Routes for post management
│   │   └── user.routes.ts  # Routes for user management
│   └── services
│       ├── address.service.ts  # Address-related business logic
│       ├── post.service.ts  # Post-related business logic
│       └── user.service.ts  # User-related business logic
└── tsconfig.json  # TypeScript configuration file
