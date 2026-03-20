import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Sidebar() {

  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: dark ? "#222" : "#eee"
    }}>
      <h2>FocusFlow</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}