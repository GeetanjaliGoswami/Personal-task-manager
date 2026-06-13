import { useEffect, useState } from "react";
import API from "../services/api";

export default function TaskForm({
  onAddTask,
  editingTask,
  setEditingTask,
  fetchTasks,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [dueDate, setDueDate] =
    useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(
        editingTask.description || ""
      );
      setDueDate(
        editingTask.dueDate || ""
      );
    }
  }, [editingTask]);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setEditingTask(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingTask) {
      await API.put(
        `/tasks/${editingTask.id}`,
        {
          title,
          description,
          dueDate,
        }
      );

      fetchTasks();
      clearForm();
      return;
    }

    await onAddTask({
      title,
      description,
      dueDate,
    });

    clearForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">
        {editingTask
          ? "Edit Task"
          : "Add New Task"}
      </h2>

      <input
        required
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      />

      <div className="flex gap-3">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          {editingTask
            ? "Update Task"
            : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-300 px-5 py-3 rounded-lg"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}