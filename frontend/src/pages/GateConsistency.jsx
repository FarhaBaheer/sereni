import Navbar from "../components/Navbar"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

function GateConsistency() {

  const stored = JSON.parse(localStorage.getItem("studyData")) || {}

  const data = Object.keys(stored).map(date => ({
    day: date,
    hours: stored[date]
  }))

  return (

    <div className="min-h-screen bg-[#efe9ff]">

      <Navbar />

      <div className="text-center mt-10">

        <h1 className="text-4xl text-purple-500 font-bold">
          Study Consistency
        </h1>

      </div>

      <div className="flex justify-center mt-12">

        <LineChart width={700} height={350} data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="hours"
            stroke="#a78bfa"
            strokeWidth={3}
          />

        </LineChart>

      </div>

    </div>

  )
}

export default GateConsistency
