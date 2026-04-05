import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Chapters() {

  const { subjectId } = useParams()

  const [chapter, setChapter] = useState("")
  const [chapters, setChapters] = useState([])

  const navigate = useNavigate()

  const addChapter = () => {

    if (!chapter) return

    setChapters([...chapters, chapter])
    setChapter("")
  }

  const deleteChapter = (index) => {

    if (window.confirm("Delete this chapter?")) {
      setChapters(chapters.filter((_, i) => i !== index))
    }

  }

  return (

    <div className="min-h-screen bg-[#efe9ff]">

      <Navbar />

      <div className="text-center mt-10">

        <h1 className="text-4xl font-bold text-purple-500">
          Chapters
        </h1>

      </div>


      {/* Add Chapter */}
      <div className="flex justify-center mt-6 gap-2">

        <input
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          placeholder="Add Chapter"
          className="border p-2 rounded-lg"
        />

        <button
          onClick={addChapter}
          className="bg-purple-300 text-white px-4 rounded-lg"
        >
          Add
        </button>

      </div>


      {/* Chapter Cards */}
      <div className="flex justify-center mt-10">

        <div className="grid grid-cols-3 gap-8">

          {chapters.map((c, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg text-center cursor-pointer"
              onClick={() => navigate(`/notes/${i}`)}
            >

              <h3 className="text-xl text-purple-500 font-semibold">
                {c}
              </h3>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteChapter(i)
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

export default Chapters
