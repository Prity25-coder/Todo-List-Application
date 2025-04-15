
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addNote, getTodo } from '../../../api'

export default function TodoDetails() {
  const { id } = useParams()
  const [todo, setTodo] = useState(null)
  const [noteText, setNoteText] = useState('')
  const [showModal, setShowModal] = useState(false)

  const fetchTodo = async () => {
    const res = await getTodo(id)
    setTodo(res.data)
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  const handleAddNote = async () => {
    if (!noteText.trim()) return
    await addNote(id, noteText)
    setNoteText('')
    setShowModal(false)
    fetchTodo()
  }

  if (!todo) return <div>Loading...</div>

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{todo.title}</h2>
      <p className="text-gray-700">{todo.description}</p>
      <div className="my-2">
        <strong>Priority:</strong> {todo.priority}
      </div>
      <div className="my-2 flex gap-2 flex-wrap">
        {todo.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold mb-2">Notes</h3>
        <ul className="space-y-2">
          {todo.notes.map((note, i) => (
            <li key={i} className="text-sm bg-gray-100 p-2 rounded">
              {note.text}
            </li>
          ))}
        </ul>
        <button onClick={() => setShowModal(true)} className="mt-4 text-blue-600 hover:underline">Add Note</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-sm w-full">
            <h4 className="text-lg font-bold mb-2">Add Note</h4>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full border p-2 rounded"
              rows="4"
              placeholder="Write a note..."
            />
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setShowModal(false)} className="text-gray-600">Cancel</button>
              <button onClick={handleAddNote} className="bg-blue-600 text-white px-4 py-1 rounded">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
