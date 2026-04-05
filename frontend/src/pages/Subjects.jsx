import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Subjects() {

  const { semId } = useParams()

  const [subject, setSubject] = useState("")
  const [subjects, setSubjects] = useState([])

  const navigate = useNavigate()

  const addSubject = () => {
    if (!subject) return

    setSubjects([...subjects, subject])
    setSubject("")
  }

  const deleteSubject = (index) => {

    if (window.confirm("Delete this subject?")) {
      setSubjects(subjects.filter((_, i) => i !== index))
    }

  }

  return (

    <div className="min-h-screen bg-[#efe9ff]">

      <Navbar />

      <div className="text-center mt-10">

        <h1 className="text-4xl font-bold text-purple-500">
          Semester {Number(semId) + 1}
        </h1>

      </div>


      {/* Add Subject */}
      <div className="flex justify-center mt-6 gap-2">

        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Add Subject"
          className="border p-2 rounded-lg"
        />

        <button
          onClick={addSubject}
          className="bg-purple-300 text-white px-4 rounded-lg"
        >
          Add
        </button>

      </div>


      {/* Subject Cards */}
      <div className="flex justify-center mt-10">

        <div className="grid grid-cols-3 gap-8">

          {subjects.map((s, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg text-center cursor-pointer"
              onClick={() => navigate(`/chapters/${i}`)}
            >

              <h3 className="text-xl text-purple-500 font-semibold">
                {s}
              </h3>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteSubject(i)
                }}
                className="text-red-400 mt-2"
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

export default Subjects
