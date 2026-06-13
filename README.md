# Personal Task Manager

## Project Title & Brief Description

This project is a **Personal Task Manager**, developed as a full-stack web application using **React** and **Node.js**. The application allows users to create, view, edit, delete, search, filter, and reorder personal tasks. Users can mark tasks as completed or active, set due dates, and visually identify overdue tasks. Task data is persisted using a JSON file, providing simple storage without requiring a database. This project was built for **Exercise 1: Personal Task Manager**.

---

# Live Demo Links

### Frontend

https://personal-task-manager-gray.vercel.app

### Backend API

https://personal-task-manager-chyi.onrender.com

### GitHub Repository

https://github.com/GeetanjaliGoswami/Personal-task-manager

---

# Tech Stack

## Frontend

### React (Vite)

Used for building a fast and responsive user interface with reusable components.

### Axios

Used for making HTTP requests between the frontend and backend.

### Tailwind CSS

Used for responsive and modern UI styling.

### @hello-pangea/dnd

Used to implement drag-and-drop task reordering.

---

## Backend

### Node.js

JavaScript runtime environment used to run the server.

### Express.js

Used for building RESTful APIs and handling HTTP requests.

### UUID

Used to generate unique identifiers for tasks.

### CORS

Used to enable communication between the deployed frontend and backend.

---

## Storage

### JSON File Storage

Task data is stored inside `server/data/tasks.json` for persistence without requiring a database.

---

# How to Run Locally

## Clone Repository

```bash
git clone https://github.com/GeetanjaliGoswami/Personal-task-manager.git
cd Personal-task-manager
```

## Run Backend

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

## Run Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Documentation

## Get All Tasks

### Request

```http
GET /api/tasks
```

### Response

```json
[
  {
    "id": "123",
    "title": "Learn React",
    "description": "Practice React Hooks",
    "dueDate": "2026-06-20",
    "completed": false,
    "createdAt": "2026-06-13T10:00:00.000Z"
  }
]
```

---

## Create Task

### Request

```http
POST /api/tasks
```

### Body

```json
{
  "title": "Learn React",
  "description": "Practice React Hooks",
  "dueDate": "2026-06-20"
}
```

### Response

```json
{
  "id": "123",
  "title": "Learn React",
  "description": "Practice React Hooks",
  "dueDate": "2026-06-20",
  "completed": false,
  "createdAt": "2026-06-13T10:00:00.000Z"
}
```

---

## Update Task

### Request

```http
PUT /api/tasks/:id
```

### Body

```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "dueDate": "2026-06-25"
}
```

### Response

```json
{
  "message": "Task updated successfully"
}
```

---

## Toggle Task Completion

### Request

```http
PATCH /api/tasks/:id/toggle
```

### Response

```json
{
  "completed": true
}
```

---

## Delete Task

### Request

```http
DELETE /api/tasks/:id
```

### Response

```json
{
  "message": "Task deleted"
}
```

---

## Reorder Tasks

### Request

```http
PUT /api/tasks/reorder
```

### Body

```json
{
  "tasks": []
}
```

### Response

```json
{
  "message": "Tasks reordered"
}
```

---

# Project Structure

```text
Personal-task-manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── FilterBar.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── routes/
│   │   └── tasks.js
│   │
│   ├── utils/
│   │   └── fileHelpers.js
│   │
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# Features Implemented

* Create Task
* Edit Task
* Delete Task with Confirmation
* Mark Task Complete/Incomplete
* Search Tasks by Title
* Filter Tasks (All, Active, Completed)
* Active and Completed Task Counters
* Overdue Task Highlighting
* Empty State UI
* Drag-and-Drop Reordering
* Persistent Storage Using JSON File
* Responsive User Interface

---

# Next Steps

Given additional time, I would improve the application by:

* Adding user authentication and authorization
* Migrating storage from JSON files to PostgreSQL or MongoDB
* Adding automated tests using Jest and React Testing Library
* Adding task priorities and categories
* Improving accessibility and keyboard navigation
* Adding due date reminders and notifications
* Supporting multiple users and user-specific task lists
* Adding pagination and advanced filtering options

---

#
