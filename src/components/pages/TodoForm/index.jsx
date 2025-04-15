import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTodo, getTodo, getUsers, updateTodo } from "../../../api";

const TodoForm = ({ edit = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "Medium",
    assignedUsers: [],
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
    if (edit && id) {
      getTodo(id).then((res) => {
        const todo = res.data;
        setForm({
          ...todo,
          tags: todo.tags.join(", "),
          assignedUsers: todo.assignedUsers.map((u) => u._id),
        });
      });
    }
  }, [edit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
    };
    edit ? await updateTodo(id, payload) : await createTodo(payload);
    navigate("/");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        {edit ? "Edit Todo" : "New Todo"}
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
        />
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="border p-2 rounded"
        />
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label className="text-sm font-medium">Assign Users</label>
        <select
          multiple
          value={form.assignedUsers}
          onChange={(e) =>
            setForm({
              ...form,
              assignedUsers: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            })
          }
          className="border p-2 rounded"
        >
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.username}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {edit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
