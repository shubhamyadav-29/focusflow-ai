import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Notes from "./pages/Notes"
import Tasks from "./pages/Tasks"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>

        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/tasks" element={<Tasks />} />

      </Route>

    </Routes>
  )
}

export default App