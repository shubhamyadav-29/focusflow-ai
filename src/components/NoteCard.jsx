import React from "react"

function NoteCard({ text, onDelete }) {

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "8px"
    }}>
      <p>{text}</p>

      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default React.memo(NoteCard)