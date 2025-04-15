function Filters() {
  const Prioritys = ["High", "Medium", "Low"];

  const tags = [
    "No tag",
    "Study",
    "Coding",
    "Morning Routine",
    "Workout",
    "Healthy Lifestyle",
    "Sleep Better"
  ];
  
  const Users = [
    "Jone Doe",
    "Jane smith",
    "Bob Brown",
    "Alice Johnson",
    "Charlie Davis ",
  ];

  return (
    <aside className="w-full md:w-64 bg-white p-4 space-y-6  mx-8 mt-10 shadow-2xl pl-8">
      <h1 className=" font-extrabold text-lg">Filters</h1>

      {/* Color Filter */}
      <div>
        <h2 className="text-md font-bold text-gray-800 mb-3">Priority</h2>
        <ul className="space-y-2">
          {Prioritys.map((Priority) => (
            <li key={Priority} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={Priority}
                className="accent-blue-500"
              />
              <label htmlFor={Priority} className="text-sm text-gray-700">
                {Priority}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      {/* Tags Filter */}
      <div>
        <h2 className="text-md font-bold text-gray-800 mb-3">Tags</h2>
        <ul className="space-y-2">
          {tags.map((tag) => (
            <li key={tag} className="flex items-center gap-2">
              <input type="checkbox" id={tag} className="accent-blue-500" />
              <label htmlFor={tag} className="text-sm text-gray-700">
                {tag}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      {/* Users Filter */}
      <div>
        <h2 className="text-md font-bold text-gray-800 mb-3">Users</h2>
        <ul className="space-y-2">
          {Users.map((User) => (
            <li key={User} className="flex items-center gap-2">
              <input type="checkbox" id={User} className="accent-blue-500" />
              <label htmlFor={User} className="text-sm text-gray-700">
                {User}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Filters;
