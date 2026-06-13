# Personal Task Manager

## Project Title & Brief Description

This project is a **Personal Task Manager**, developed as a full-stack web application using **React**, **Node.js**, and **Express.js**. The application allows users to create, view, edit, delete, search, filter, and reorder personal tasks. Users can mark tasks as completed, set due dates, and identify overdue tasks visually. Task data is persisted using a JSON file, making the application lightweight and easy to set up without requiring a database. This project was built as a full-stack coding exercise to demonstrate frontend development, backend API design, state management, and deployment.

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

Used to build a fast, component-based user interface using React Hooks and modern development tooling.

### Axios

Used for making HTTP requests between the frontend and backend.

### Tailwind CSS

Used for responsive and modern UI styling.

### @hello-pangea/dnd

Used to implement drag-and-drop task reordering functionality.

---

## Backend

### Node.js

JavaScript runtime used to run the server-side application.

### Express.js

Used to build RESTful APIs and handle HTTP requests.

### UUID

Used to generate unique identifiers for tasks.

### CORS

Used to allow communication between the deployed frontend and backend.

---

## Storage

### JSON File Storage

Task data is stored inside `server/data/tasks.json` to provide lightweight persistence without requiring a database.

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
  "id": "123",
  "title": "Updated Task",
  "description": "Updated Description",
  "dueDate": "2026-06-25",
  "completed": false
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
* Frontend Deployment on Vercel
* Backend Deployment on Render

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

# Known Limitations

* The application currently supports only a single user.
* Data is stored in a JSON file instead of a production database.
* On cloud hosting platforms with ephemeral file systems, JSON file changes may not persist across server restarts or redeployments.
* No authentication or user management has been implemented.

---

# Acknowledgements

This project was developed with the assistance of AI tools (ChatGPT) for guidance, debugging support, and documentation drafting. All code was reviewed, understood, tested, and integrated manually.
