export default function TaskCard({
  task,
  onDelete,
  onToggle,
  onEdit,
}) {
  const overdue =
    task.dueDate &&
    !task.completed &&
    new Date(task.dueDate) <
      new Date();

  return (
    <div
      className={`bg-white rounded-2xl shadow p-5 hover:shadow-lg transition ${
        overdue
          ? "border-l-4 border-red-500"
          : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h3
          className={`text-xl font-semibold ${
            task.completed
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {task.title}
        </h3>

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            onToggle(task.id)
          }
        />
      </div>

      <p className="text-gray-600 mt-3">
        {task.description}
      </p>

      {task.dueDate && (
        <p className="mt-3 text-sm text-gray-500">
          Due: {task.dueDate}
        </p>
      )}

      <div className="mt-4 flex gap-2">
        {task.completed ? (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Completed
          </span>
        ) : (
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            Active
          </span>
        )}

        {overdue && (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
            Overdue
          </span>
        )}
      </div>

      <div className="mt-5 flex gap-4">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 font-medium"
        >
          Edit
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
          className="text-red-600 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}