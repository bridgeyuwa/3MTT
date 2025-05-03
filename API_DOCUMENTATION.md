# API Documentation

## Overview
This document provides detailed API usage, parameters, and error codes.

### Endpoints

#### 1. GET `/items`
- **Description**: Returns an array of all items.
- **Response**:
  - **200 OK**: Array of items.

#### 2. GET `/items/:id`
- **Description**: Returns a single item object.
- **Parameters**:
  - `id` (path, integer): Item ID.
- **Responses**:
  - **200 OK**: Item object.
  - **404 Not Found**: `{"error":"Item not found"}`.

#### 3. POST `/items`
- **Description**: Creates a new item.
- **Body**:
  - `name` (string, required)
  - `description` (string, required)
- **Responses**:
  - **201 Created**: New item object.
  - **400 Bad Request**: `{"error":"Name and description are required"}`.

#### 4. PUT `/items/:id`
- **Description**: Updates an existing item.
- **Parameters**:
  - `id` (path, integer)
- **Body**:
  - `name` (string, required)
  - `description` (string, required)
- **Responses**:
  - **200 OK**: Updated item.
  - **400 Bad Request**: Missing fields.
  - **404 Not Found**: Item not found.

#### 5. DELETE `/items/:id`
- **Description**: Deletes an item by ID.
- **Parameters**:
  - `id` (path, integer)
- **Responses**:
  - **204 No Content**: No response body.
  - **404 Not Found**: Item not found.

## Error Codes

| Code | Message                            |
| ---- | ---------------------------------- |
| 400  | Name and description are required  |
| 404  | Item not found / Route not found   |
| 500  | Internal Server Error              |
 

---
