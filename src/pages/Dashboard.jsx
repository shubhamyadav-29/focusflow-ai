import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

export default function Dashboard() {

  const data = [
    { name: "Notes", value: 10 },
    { name: "Completed Tasks", value: 5 },
    { name: "Pending Tasks", value: 3 },
  ]

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"]

  return (
    <div style={{ padding: "20px" }}>

      <h1 style={{ marginBottom: "20px" }}>📊 Dashboard</h1>

      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>

        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {
              data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </div>

    </div>
  )
}