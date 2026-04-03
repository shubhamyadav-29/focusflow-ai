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
      background: "#fff",
      padding: "15px",
      marginTop: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <p style={{ marginBottom: "10px" }}>{text}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onDelete}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>

        <button
          onClick={handleSummarize}
          style={{
            background: "#10b981",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {loading ? "..." : "Summarize"}
        </button>
      </div>

      {summary && (
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          <strong>Summary:</strong> {summary}
        </p>
      )}
    </div>
  )
}

export default React.memo(NoteCard)