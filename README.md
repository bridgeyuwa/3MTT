# Express.js & PostgreSQL CRUD API

## Prerequisites
- Node.js installed
- PostgreSQL installed and running

## Setup
1. **Clone** the repository.
2. **Create database**:
   ```sql
   CREATE DATABASE your_db_name;
   \c your_db_name
   \i init_db.sql
   ```
3. **Install dependencies**:
   ```bash
   npm install express pg
   ```
4. **Configure environment**: Create a `.env` file or set env vars:
   ```dotenv
   PG_USER=your_db_user
   PG_PASSWORD=your_db_password
   PG_DATABASE=your_db_name
   PG_HOST=localhost
   PG_PORT=5432
   ```
5. **Run server**:
   ```bash
   node server.js
   ```

## API Endpoints
| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/users`     | Retrieve all users  |
| GET    | `/users/:id` | Retrieve user by ID |
| POST   | `/users`     | Create a new user   |
| PUT    | `/users/:id` | Update a user by ID |
| DELETE | `/users/:id` | Delete a user by ID |

### Example Requests
```bash
# Create user
curl -X POST http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{"name":"Alice","email":"alice@example.com","age":30}'

# Get all users
curl http://localhost:3000/users
```
