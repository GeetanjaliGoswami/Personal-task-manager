export default function FilterBar({
  filter,
  setFilter,
}) {
  const options = [
    "all",
    "active",
    "completed",
  ];

  return (
    <div className="flex gap-3">
      {options.map((item) => (
        <button
          key={item}
          onClick={() =>
            setFilter(item)
          }
          className={`px-5 py-2 rounded-full font-medium transition ${
            filter === item
              ? "bg-blue-600 text-white"
              : "bg-white shadow"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}