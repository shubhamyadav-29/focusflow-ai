import useLocalStorage from "../hooks/useLocalStorage"
import { useState } from "react"

export default function Notes() {

  const [notesList, setNotesList] = useLocalStorage("notes", [])
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleAddNote = async () => {

    if (!note.trim()) {
      setMessage("Note cannot be empty ❌")
      return
    }

    setLoading(true)

    // ⭐ fake API delay
    await new Promise(res => setTimeout(res, 1000))

    setNotesList([...notesList, note])
    setNote("")
    setLoading(false)
    setMessage("Note added successfully ✅")

    setTimeout(() => setMessage(""), 2000)
  }

  return (
    <div>
      <h1>Notes</h1>

      {message && <p>{message}</p>}

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write note..."
      />

      <button onClick={handleAddNote}>
        {loading ? "Adding..." : "Add"}
      </button>

      <ul>
        {notesList.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  )
}