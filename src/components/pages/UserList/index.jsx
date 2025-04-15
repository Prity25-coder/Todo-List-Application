
import { useEffect, useState } from 'react'
import { getUsers } from '../../../api'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [activeUser, setActiveUser] = useState(null)

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.data)
      setActiveUser(res.data[0]?._id || null)
    })
  }, [])

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto">
      {users.map(user => (
        <button
          key={user._id}
          className={`px-3 py-1 rounded-full border text-sm ${activeUser === user._id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveUser(user._id)}
        >
          {user.username}
        </button>
      ))}
    </div>
  )
}
