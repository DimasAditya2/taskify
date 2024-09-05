# Task Management API Documentation

## Endpoints

1. GET /tasks
2. POST /tasks
3. PUT /tasks
4. DELETE /tasks

<hr>

### 1. GET /tasks
   Descripton:
   Mendapatkan Semua task yang ada

Request:

- Method: Get
- URL: /tasks

Response:

- Status: `200 OK`
- Body

```json
[
  {
    "_id": "64e2f8bcf5a6f7b58d123456",
    "title": "Belajar Node.js",
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
   Menambahkan task baru ke dalam sistem

Request:

- Method: POST
- URL: /tasks
- Body(JSON):

```json
{
  "title": "Belajar Node.js",
  "description": "Pelajari dasar-dasar Node.js"
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

### 3. PUT /tasks
   Description:
   Memperbarui task yang ada berdasarkan ID

Request:

- Method: PUT
- URL: /tasks/:id
  - Parameter
    - id: ID dari task yang akan diupdate
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

### 4. DELETE /tasks
   Description:
   Menghapus task berdasarkan ID

Request:

- Method: DELETE
- URL: /tasks/:id
  - Parameter
    - id: ID dari task yang akan diupdate

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
   Jika ada kesalahan validasi atau input yang tidak sesuai, server akan mengembalikan:

```json
{
  "message": "Invalid request"
}
```

2. 404 Not Found
   Jika task dengan ID tertentu tidak ditemukan, server akan mengembalikan:

```json
{
  "message": "Task not found"
}
```

3. 500 Internal Server Error
   Jika terjadi kesalahan di server, server akan mengembalikan:

```json
{
  "message": "Internal server error"
}
```
