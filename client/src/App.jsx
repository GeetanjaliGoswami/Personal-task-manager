import { useEffect, useState } from "react";
import API from "./services/api";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    await API.post("/tasks", taskData);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await API.patch(`/tasks/${id}/toggle`);
    fetchTasks();
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);

    const [movedItem] = items.splice(
      result.source.index,
      1
    );

    items.splice(
      result.destination.index,
      0,
      movedItem
    );

    setTasks(items);

    try {
      await API.put("/tasks/reorder", {
        tasks: items,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((task) => {
      if (filter === "active") {
        return !task.completed;
      }

      if (filter === "completed") {
        return task.completed;
      }

      return true;
    });

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto p-6">
        <Header
          activeCount={
            tasks.filter(
              (t) => !t.completed
            ).length
          }
          completedCount={
            tasks.filter(
              (t) => t.completed
            ).length
          }
        />

        <TaskForm
          onAddTask={addTask}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          fetchTasks={fetchTasks}
        />

        <div className="mt-6">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="mt-4">
          <FilterBar
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <div className="mt-6">
          <TaskList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={setEditingTask}
            onDragEnd={handleDragEnd}
          />
        </div>
      </div>
    </div>
  );
}

export default App;