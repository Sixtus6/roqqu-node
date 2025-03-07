## Roqqu Backend Engineer Assessment

## Project Overview

This project is a User Management System built with Node.js, Express, Sequelize, and SQLite, allowing users to register, manage their profiles, create addresses, and publish posts. It follows a modular structure, ensuring scalability and maintainability.

🚀 Features

- User Management → Register, retrieve, and count users.
- Address Management → Each user can create and update a single address.
- Post Management → Users can create, retrieve, and delete posts.
- Validation & Error Handling → Ensures data integrity using Express Validator.
- Database Persistence → Uses SQLite with Sequelize ORM.
- Docker Support → Easy deployment with Docker Compose.

## Setup Instructions

```sh
1️⃣ Clone the Repository
git clone https://github.com/Sixtus6/roqqu-node.git
cd roqqu-node
```

```sh
2️⃣ Run the Project Using Docker
docker-compose up --build
```

## Project Structure

```sh
├── src
│   ├── config
│   │   ├── environment.config.ts   # Loads environment variables
│   │   ├── response.config.ts      # Standard API response messages
│   │   └── swagger.config.ts       # Swagger documentation setup
│   ├── controllers
│   │   ├── address.controller.ts   # Address API logic
│   │   ├── post.controller.ts      # Post API logic
│   │   └── user.controller.ts      # User API logic
│   ├── database
│   │   ├── database.connection.ts   # Sequelize database connection
│   │   └── database.relationship.ts # Model associations and relations
│   ├── index.ts              # Main entry point for the application
│   ├── middleware
│   │   └── validators
│   │       ├── address.validator.ts   # Validates address API payloads
│   │       ├── post.validator.ts      # Validates post API payloads
│   │       └── user.validator.ts      # Validates user API payloads
│   ├── models
│   │   ├── address.model.ts   # Address model
│   │   ├── post.model.ts      # Post model
│   │   └── user.model.ts      # User model
│   ├── routes
│   │   ├── address.routes.ts  # Routes for address-related endpoints
│   │   ├── post.routes.ts     # Routes for post-related endpoints
│   │   └── user.routes.ts     # Routes for user-related endpoints
│   ├── services
│   │   ├── address.service.ts # Address business logic
│   │   ├── post.service.ts    # Post business logic
│   │   └── user.service.ts    # User business logic
│   └── utils
│       └── util.ts           # Generic utility functions
├── tests
│   ├── address.test.ts        # Unit tests for Address API
│   ├── post.test.ts           # Unit tests for Post API
│   └── user.test.ts           # Unit tests for User API
└── tsconfig.json             # TypeScript configurationTypeScript configuration file
```

 API Documentation

 ```
 https://documenter.getpostman.com/view/42904372/2sAYdmmoFv
 ```

## Running Tests

This project includes **unit tests** using `Jest` and `supertest` to verify the API functionality.

### **⚙️ 1️⃣ Set Up Environment Variables**

Before running the tests, **ensure the correct API URL is set in the `.env` file**:

```env
# .env
API_URL=http://localhost:2002  # 👈 Update this with your server URL if different
```

## Run Tests

 ```sh
npm test
```

## Summary of Tests

The test suite ensures that all API endpoints in the project function correctly by verifying expected behavior for User, Address, and Post APIs.

✅ What’s Tested?

- User API (tests/user.test.ts)
- Create a new user (POST /user)
- Retrieve a user by ID (GET /user?userId={id})
- Get a paginated list of users (GET /user?pageNumber=1&pageSize=10)
- Retrieve total user count (GET /user/count)
- Handle non-existing users with 404 Not Found
- Address API (tests/address.test.ts)
- Create an address for a user (POST /addresses/{userID})
- Retrieve a user’s address (GET /addresses/{userID})
- Update an existing address (PATCH /addresses/{userID})
- Handle cases where a user has no address (404 Not Found)
- Post API (tests/post.test.ts)
- Create a post for a user (POST /posts)
- Retrieve all posts for a user (GET /posts?userId={userId})
- Handle users with no posts (404 Not Found)
- Delete a post by ID (DELETE /posts/{id})
- Handle non-existing post deletions (404 Not Found)
