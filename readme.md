# Task Management API Documentation

Taskify Server adalah backend API yang menyediakan fitur manajemen tugas sederhana, memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus tugas. Server ini dibangun menggunakan Node.js dan Express serta terintegrasi dengan MongoDB sebagai database untuk penyimpanan data.

Taskify Server is an API backend that provides simple task management features, allowing users to create, read, update, and delete tasks. This server was built using Node.js and Express and integrated with MongoDB as a database for data storage

## Deployment
[coming son](https://google.com)

## Endpoints

1. GET /tasks
2. POST /tasks
3. PUT /tasks
4. DELETE /tasks

<hr>

### 1. GET /tasks
   Descripton:
   get all products from db

Request:

- Method: Get
- URL: /tasks

Response:

- Status: `200 OK`
- Body

```json
[
  {
    "_id": "string",
    "title": "string",
    "description": "string",
    "completed": "boolean",
    "createdAt": "Date"
  },
  {
    "_id": "string",
    "title": "string",
    "description": "string",
    "completed": "boolean",
    "createdAt": "Date"
  }
]
```

### 2. POST /tasks
   Description:
   Adding new tasks to the DB

Request:

- Method: POST
- URL: /tasks
- Body(JSON):

```json
{
  "title": "string",
  "description": "string"
}
```

Response:

- Status: 201 `created`
- Body:

```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "createdAt": "Date"
}
```

### 3. PUT /tasks/:id
   Description:
   Update existing tasks based on ID

Request:

- Method: PUT
- URL: /tasks/:id
  - Parameter
    - id: ID of the task to be updated
- Body(JSON)

```json
{
  "title": "string",
  "description": "string",
  "completed": "boolean"
}
```

Response:

- Status: `200 OK`
- Body:

```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "createdAt": "Date"
}
```

### 4. DELETE /tasks/:id
   Description:
   Delete tasks based on ID

Request:

- Method: DELETE
- URL: /tasks/:id
  - Parameter
    - id: ID of the task to be deleted

Response:

- status: `200 OK`
- body:

```json
{
  "message": "Task deleted"
}
```

&nbsp;

<hr>

&nbsp;

## Error Response

1. 400 Bad Request
   If there are validation errors or inappropriate input, the server will return:

```json
{
  "message": "Invalid request"
}
```

2. 404 Not Found
   If a task with the specified ID is not found, the server will return:

```json
{
  "message": "Task not found"
}
```

3. 500 Internal Server Error
   If an error occurs on the server, the server will return:

```json
{
  "message": "Internal server error"
}
```
