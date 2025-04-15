import { getTodos } from "../../../api";


export default function ExportButton() {
  const exportData = async (type = "json") => {
    const res = await getTodos();
    const data = res.data;

    if (type === "json") {
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      download(blob, "todos.json");
    } else if (type === "csv") {
      const csv = data
        .map(
          (todo) =>
            `"${todo.title}","${todo.description}","${
              todo.priority
            }","${todo.tags?.join("|")}"`
        )
        .join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      download(blob, "todos.csv");
    }
  };

  const download = (blob, filename) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={() => exportData("json")}
        className="px-3 py-1 bg-gray-800 text-white rounded"
      >
        Export JSON
      </button>
      <button
        onClick={() => exportData("csv")}
        className="px-3 py-1 bg-gray-500 text-white rounded"
      >
        Export CSV
      </button>
    </div>
  );
}
