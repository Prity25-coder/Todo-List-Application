import Navbar from "./components/Navbar";
import Filters from "./components/pages/Filters";
import Home from "./components/pages/Home";
import TodoList from "./components/pages/TodoList";

function App() {
  return (
    // <div className="min-h-screen bg-gray-50 text-gray-800">
    //   <nav className="bg-white shadow p-4 flex justify-between items-center">
    //     <h1 className="text-xl font-bold">Todo List</h1>
    //     <div className="flex gap-4">
    //       <Link to="/" className="hover:underline">
    //         Todos
    //       </Link>
    //       <Link to="/new" className="hover:underline">
    //         New Todo
    //       </Link>
    //     </div>
    //   </nav>

    //   <div className="max-w-4xl mx-auto p-4">
    //     <UserList />
    //     <Routes>
    //       <Route path="/" element={<TodoList />} />
    //       <Route path="/new" element={<TodoForm />} />
    //       <Route path="/edit/:id" element={<TodoForm edit />} />
    //       <Route path="/todo/:id" element={<TodoDetails />} />
    //     </Routes>
    //   </div>
    // </div>
    <>
      <Navbar />
      <Home />
      <TodoList />
      <Filters />
    </>
  );
}

export default App;
