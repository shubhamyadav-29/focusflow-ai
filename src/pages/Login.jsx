import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {

  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true")
    navigate("/")
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}