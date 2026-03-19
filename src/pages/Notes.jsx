import useLocalStorage from "../hooks/useLocalStorage"
import { useState } from "react"

export default function Notes() {

  const [notesList, setNotesList] = useLocalStorage("notes", [])
  const [note, setNote] = useState("")
  const [search, setSearch] = useState("")

  const handleAddNote = () => {
    if (!note.trim()) return
    setNotesList([...notesList, note])
    setNote("")
  }

  const handleDelete = (index) => {
    setNotesList(notesList.filter((_, i) => i !== index))
  }

  const filteredNotes = notesList.filter(n =>
    n.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Notes</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write note..."
      />

      <button onClick={handleAddNote}>Add</button>

      <ul>
        {filteredNotes.map((n, index) => (
          <li key={index}>
            {n}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}