# Simple Express.js REST API

## Setup Instructions

1. **Clone** the repository.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
4. The API will run on **http://localhost:3000** by default.

## API Endpoints

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/`              | Returns "Hello, World!"        |
| GET    | `/items`         | Retrieve all items              |
| GET    | `/items/:id`     | Retrieve a single item by ID    |
| POST   | `/items`         | Create a new item               |
| PUT    | `/items/:id`     | Update an item by ID            |
| DELETE | `/items/:id`     | Delete an item by ID            |

### Request & Response Examples

**Create Item**
```bash
curl -X POST http://localhost:3000/items \
  -H 'Content-Type: application/json' \
  -d '{"name":"Sample","description":"A sample item."}'
```

**Expected Response**
```json
{
  "id": 1,
  "name": "Sample",
  "description": "A sample item."
}
```
```
