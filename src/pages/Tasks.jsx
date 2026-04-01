import { useState } from "react"

export default function Tasks() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (!task.trim()) return

    setTasks([...tasks, { text: task, done: false }])
    setTask("")
  }

  const toggleTask = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    )
    setTasks(updated)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>

      <h1>✅ Tasks</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button onClick={handleAddTask}>Add Task</button>

      {
        tasks.map((t, index) => (
          <div key={index} style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            background: "#fff",
            padding: "10px",
            borderRadius: "8px"
          }}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: t.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {t.text}
            </span>

            <button onClick={() => deleteTask(index)}>❌</button>
          </div>
        ))
      }

    </div>
  )
}