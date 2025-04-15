import { useState } from "react";
import { FaFileExport } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-200 px-4 py-4 shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-extrabold text-blue-300">Todo List</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
        
          <button className="bg-gray-400 text-white cursor-pointer flex gap-1 rounded-sm px-2 py-1 hover:bg-blue-300">
            <FaFileExport className="mt-1" />
            Export
          </button>

          <select className="cursor-pointer px-2 py-1 rounded-sm text-white bg-blue-300 hover:bg-blue-400">
            <option value="1">Jone Doe</option>
            <option value="2">Jane Smith</option>
            <option value="3">Bob Brown</option>
            <option value="4">Alice Johnson</option>
            <option value="5">Charlie Davis</option>
          </select>

          <p className="text-gray-400 cursor-pointer flex gap-2 items-center">
            <span className="font-bold">User</span>
            <FaCircleUser size={34} />
          </p>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-gray-700 font-medium">

          <button className="bg-gray-400 text-white cursor-pointer flex gap-1 rounded-sm px-2 py-1 hover:bg-blue-300 w-full">
            <FaFileExport className="mt-1" />
            Export
          </button>

          <select className="cursor-pointer px-2 py-1 rounded-sm text-white bg-blue-300 hover:bg-blue-400 w-full">
            <option value="1">Jone Doe</option>
            <option value="2">Jane Smith</option>
            <option value="3">Bob Brown</option>
            <option value="4">Alice Johnson</option>
            <option value="5">Charlie Davis</option>
          </select>

          <p className="text-gray-400 cursor-pointer flex gap-2 items-center">
            <span className="font-bold">User</span>
            <FaCircleUser size={34} />
          </p>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
