import { useState, useMemo, useCallback } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import NoteCard from "../components/NoteCard"
import { addNoteAPI } from "../services/notesService"

export default function Notes() {

  const [notesList, setNotesList] = useLocalStorage("notes", [])
  const [note, setNote] = useState("")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  // ⭐ Add Note (API based)
  const handleAddNote = async () => {

    if (!note.trim()) {
      setMessage("Note cannot be empty ❌")
      return
    }

    setLoading(true)

    try {
      const res = await addNoteAPI(note)

      setNotesList(prev => [...prev, res.data])

      setMessage("Note added successfully ✅")
      setNote("")
    }
    catch (err) {
      setMessage("Something went wrong ❌")
    }
    finally {
      setLoading(false)
      setTimeout(() => setMessage(""), 2000)
    }
  }

  // ⭐ Delete Note (Optimized)
  const handleDelete = useCallback((index) => {
    setNotesList(prev =>
      prev.filter((_, i) => i !== index)
    )
  }, [setNotesList])

  // ⭐ Search Optimization
  const filteredNotes = useMemo(() => {
    return notesList.filter(n =>
      n.toLowerCase().includes(search.toLowerCase())
    )
  }, [notesList, search])

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>

      <h1 style={{ marginBottom: "20px" }}>📝 Notes</h1>

      {message && <p>{message}</p>}

      {/* Search */}
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {/* Add Note */}
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write note..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <button
        onClick={handleAddNote}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        {loading ? "Adding..." : "Add Note"}
      </button>

      {/* Notes List */}
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