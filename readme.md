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
Get All Products from DB

Request:

- Method: Get
- URL: /tasks

Response:

- Status: `200 OK`

```json
{
  "status": true,
  "statusCode": 200,
  "message": "SUCCESS GET ALL DATA",
  "data": [
    {
      "status": "string",
      "_id": "string",
      "title": "string",
      "description": "string",
      "dueDate": "Date",
      "priority": "string",
      "__v": 0,
      "createdAt": "Date",
      "updatedAt": "Date"
    }
  ]
}
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
  "title": "string"
}
```

Response:

- Status: 201 `created`
- Body:

```json
{
  "status": true,
  "statusCode": 201,
  "message": "SUCCESS CREATE TASKS"
}
```

### 3. GET /tasks/:id

Description:
Get Task By ID

Request:

- Method: GET
- URL: /tasks/:id
  - Parameter
    - id: ID of the task to be updated

Response:

- status: `200 OK`

```json
{
  "status": true,
  "statusCode": 200,
  "message": "SUCCESS GET TASK BY ID",
  "data": {
    "status": "pending",
    "_id": "66db5f0a1049a4afbc4f2a0e",
    "task_id": "a093d986-d474-4d79-be64-b7f4db9e458f",
    "title": "Complete project documentation",
    "description": "Write API docs and set up usage examples",
    "dueDate": "2025-09-15T00:00:00.000Z",
    "priority": "high",
    "__v": 0,
    "createdAt": "2025-09-06T19:59:06.652Z",
    "updatedAt": "2025-09-06T19:59:06.652Z"
  }
}
```

### 4. PUT /tasks/:id

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

### 5. DELETE /tasks/:id

Description:
Delete tasks based on ID

Request:

- Method: DELETE
- URL: /tasks/:id
  - Parameter
    - id: ID of the task to be deleted

Response:

- status: `200 OK`

```json
{
  "message": "Task deleted"
}
```

&nbsp;

<hr>

&nbsp;

## Error Response

1. 422 Unprocessable Entity
   If there are validation errors or inappropriate input, the server will return:

```json
{
  "status": false,
  "statusCode": 422,
  "message": "Unprocessable Entity"
}
```

2. 404 Not Found
   If a task with the specified ID is not found, the server will return:

```json
{
  "message": "Task With ID [Task ID] Not Found"
}
```

3. 640 Internal Server Error
   If an error occurs on the server, the server will return:

```json
{
  "message": "Internal server error"
}
```

## Stack
<div style="display: flex; flex-direction: row; justify-content: space-evenly;">
<img src="assets/typescript.png" width="64" height="64">
<img src="assets/mongodb1.png" width="64" height="64">
<img src="assets/nodejs.png" width="64" height="64">
</div>


