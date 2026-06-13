export default function Header({
  activeCount,
  completedCount,
}) {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          Personal Task Manager
        </h1>

        <p className="mt-2 text-blue-100">
          Organize your day efficiently
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-5">
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500">
            Active Tasks
          </h3>

          <p className="text-3xl font-bold text-blue-600">
            {activeCount}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500">
            Completed Tasks
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {completedCount}
          </p>
        </div>
      </div>
    </div>
  );
}