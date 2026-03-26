import useLocalStorage from "../hooks/useLocalStorage"
import { useState,useMemo , useCallback} from "react"
import NoteCard from "../components/NoteCard"
import { addNoteAPI } from "../services/notesService"

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

 const handleDelete = useCallback((index) => {
  setNotesList(prev =>
    prev.filter((_, i) => i !== index)
  )
}, [setNotesList])

 const filteredNotes = useMemo(() => {
  return notesList.filter(n =>
    n.toLowerCase().includes(search.toLowerCase())
  )
}, [notesList, search])

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