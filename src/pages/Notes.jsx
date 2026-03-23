import useLocalStorage from "../hooks/useLocalStorage"
import { useState } from "react"
import NoteCard from "../components/NoteCard"

export default function Notes() {

  const [notesList, setNotesList] = useLocalStorage("notes", [])
  const [note, setNote] = useState("")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleAddNote = async () => {

    if (!note.trim()) {
      setMessage("Note cannot be empty ❌")
      return
    }

    setLoading(true)

    await new Promise(res => setTimeout(res, 1000))

    setNotesList([...notesList, note])
    setNote("")
    setLoading(false)
    setMessage("Note added successfully ✅")

    setTimeout(() => setMessage(""), 2000)
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

      {message && <p>{message}</p>}

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

      <button onClick={handleAddNote}>
        {loading ? "Adding..." : "Add"}
      </button>

      {
        filteredNotes.map((n, index) => (
          <NoteCard
            key={index}
            text={n}
            onDelete={() => handleDelete(index)}
          />
        ))
      }

    </div>
  )
}