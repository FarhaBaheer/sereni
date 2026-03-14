import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Gate() {

  const navigate = useNavigate()

  const Card = ({title, path}) => (
    <div
      onClick={() => navigate(path)}
      className="bg-white p-10 rounded-3xl shadow-xl text-center cursor-pointer hover:scale-105 transition"
    >
      <h3 className="text-2xl font-semibold text-purple-400">
        {title}
      </h3>
    </div>
  )

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f4f0ff] via-[#e8e0ff] to-[#ddd0ff]">

      <Navbar />

      <div className="text-center mt-12">

        <h1 className="text-5xl font-bold text-purple-500">
          GATE Preparation
        </h1>

        <p className="text-gray-600 mt-3">
          Consistency builds success
        </p>

      </div>

      <div className="flex justify-center mt-16">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl">

          <Card title="Consistency" path="/gate-consistency" />
          <Card title="Syllabus" path="/gate-syllabus" />
          <Card title="Timetable" path="/gate-timetable" />
          <Card title="Notes" path="/gate-notes" />
          <Card title="Timer" path="/gate-timer" />

        </div>

      </div>

    </div>

  )
}

export default Gate
