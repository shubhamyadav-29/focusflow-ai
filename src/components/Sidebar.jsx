import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Sidebar() {
  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: dark ? "#111827" : "#f3f4f6",
      color: dark ? "#fff" : "#000",
      padding: "20px",
      boxShadow: "2px 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "20px" }}>⚡ FocusFlow</h2>

      <button
        onClick={toggleTheme}
        style={{
          marginBottom: "20px",
          padding: "8px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Toggle Theme
      </button>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
    </div>
  )
}