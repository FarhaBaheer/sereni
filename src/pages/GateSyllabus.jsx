import { useState } from "react"
import Navbar from "../components/Navbar"

function GateSyllabus() {

  const [pdf, setPdf] = useState(null)

  const uploadPdf = (e) => {

    const file = e.target.files[0]

    if (!file) return

    const syllabus = {
      name: file.name,
      file: file
    }

    setPdf(syllabus)

  }


  const deletePdf = () => {

    if (window.confirm("Delete syllabus?")) {

      setPdf(null)

    }

  }


  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f4f0ff] via-[#e8e0ff] to-[#ddd0ff]">

      <Navbar />

      {/* Title */}

      <div className="text-center mt-12">

        <h1 className="text-5xl font-bold text-purple-500">
          GATE Syllabus
        </h1>

        <p className="text-gray-600 mt-3">
          Upload and view your official syllabus
        </p>

      </div>


      {/* Main Card */}

      <div className="flex justify-center mt-16">

        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-xl w-full text-center">

          {!pdf && (

            <div className="space-y-4">

              <p className="text-gray-600">
                Upload your syllabus PDF
              </p>

              <input
                type="file"
                accept="application/pdf"
                onChange={uploadPdf}
                className="mx-auto"
              />

            </div>

          )}


          {pdf && (

            <div className="flex flex-col items-center gap-6">

              {/* PDF Name */}

              <div className="bg-[#f6f2ff] px-6 py-3 rounded-xl w-full">

                <p className="text-purple-500 font-semibold break-words">
                  {pdf.name}
                </p>

              </div>


              {/* View Button */}

              <a
                href={URL.createObjectURL(pdf.file)}
                target="_blank"
                className="bg-purple-300 hover:bg-purple-400 text-white px-8 py-3 rounded-xl transition"
              >
                View Syllabus
              </a>


              {/* Delete */}

              <button
                onClick={deletePdf}
                className="text-red-400 hover:text-red-500"
              >
                Delete
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  )
}

export default GateSyllabus
