<div style={{ maxWidth: "700px", margin: "auto" }}>
  <h1 style={{ marginBottom: "20px" }}>📝 Notes</h1>

  {message && <p>{message}</p>}

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
</div>
