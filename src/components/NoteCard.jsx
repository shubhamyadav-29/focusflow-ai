import React, { useState } from "react"
import { summarizeNoteAPI } from "../services/aiService"

function NoteCard({ text, onDelete }) {

  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSummarize = async () => {
    setLoading(true)
    const res = await summarizeNoteAPI(text)
    setSummary(res.data)
    setLoading(false)
  }

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "8px"
    }}>
      <p>{text}</p>

      <button onClick={onDelete}>Delete</button>

      <button onClick={handleSummarize}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && <p><strong>Summary:</strong> {summary}</p>}
    </div>
  )
}

export default React.memo(NoteCard)