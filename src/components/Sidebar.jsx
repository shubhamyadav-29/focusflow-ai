import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Sidebar() {

  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: dark ? "#222" : "#ddd",
      padding: "10px"
    }}>

      <h2>FocusFlow</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <hr />

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>

    </div>
  )
}