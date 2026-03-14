import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Academics() {

  const [semesterName, setSemesterName] = useState("")
  const [sems, setSems] = useState([])

  const navigate = useNavigate()

  const addSem = () => {
    if (!semesterName) return

    setSems([...sems, semesterName])
    setSemesterName("")
  }

  const deleteSem = (index) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this semester?"
    )

    if (confirmDelete) {
      setSems(sems.filter((_, i) => i !== index))
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f5f2ff] via-[#ece6ff] to-[#e2d9ff]">

      <Navbar />

      <div className="text-center mt-10">

        <h1 className="text-4xl font-bold text-purple-500">
          Academics
        </h1>

        <p className="text-gray-600 mt-2">
          Organize your learning
        </p>

      </div>

      {/* Add Semester */}
      <div className="flex justify-center mt-8 gap-3">

        <input
          value={semesterName}
          onChange={(e) => setSemesterName(e.target.value)}
          placeholder="Add Semester"
          className="border p-3 rounded-xl"
        />

        <button
          onClick={addSem}
          className="bg-purple-300 text-white px-5 rounded-xl"
        >
          Add
        </button>

      </div>

      {/* Semester Cards */}
      <div className="flex justify-center mt-10">

        <div className="grid grid-cols-3 gap-8 max-w-6xl">

          {sems.map((s, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg text-center cursor-pointer hover:scale-105 transition"
              onClick={() => navigate(`/subjects/${i}`)}
            >

              <h3 className="text-xl font-semibold text-purple-500">
                {s}
              </h3>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteSem(i)
                }}
                className="text-red-400 mt-3"
              >
                Remove ✕
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Academics
