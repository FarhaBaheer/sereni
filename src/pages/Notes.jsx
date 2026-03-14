import { useState } from "react"
import Navbar from "../components/Navbar"

function Notes() {

  const [noteText, setNoteText] = useState("")
  const [notes, setNotes] = useState([])

  const [pdfs, setPdfs] = useState([])

  const [link, setLink] = useState("")
  const [links, setLinks] = useState([])


  // Add Note
  const addNote = () => {

    if (!noteText.trim()) return

    setNotes([...notes, noteText])
    setNoteText("")
  }


  // Delete Note
  const deleteNote = (index) => {

    if (window.confirm("Delete this note?")) {
      setNotes(notes.filter((_, i) => i !== index))
    }

  }


  // Upload PDF
  const uploadPdf = (e) => {

    const files = Array.from(e.target.files)

    setPdfs([...pdfs, ...files])

  }


  // Delete PDF
  const deletePdf = (index) => {

    if (window.confirm("Delete this PDF?")) {
      setPdfs(pdfs.filter((_, i) => i !== index))
    }

  }


  // Add Link
  const addLink = () => {

    if (!link.trim()) return

    setLinks([...links, link])
    setLink("")
  }


  // Delete Link
  const deleteLink = (index) => {

    if (window.confirm("Delete this link?")) {
      setLinks(links.filter((_, i) => i !== index))
    }

  }


  return (

    <div className="min-h-screen bg-gradient-to-br from-[#f5f2ff] via-[#ece6ff] to-[#e2d9ff]">

      <Navbar />

      {/* Title */}

      <div className="text-center mt-10">

        <h1 className="text-4xl font-bold text-purple-500">
          Chapter Notes
        </h1>

        <p className="text-gray-600 mt-2">
          Store notes, PDFs and useful resources
        </p>

      </div>


      {/* Main Layout */}

      <div className="flex justify-center mt-10 pb-16">

        <div className="grid grid-cols-2 gap-10 max-w-6xl w-full">


          {/* NOTES CARD */}

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h3 className="text-xl text-purple-400 font-semibold mb-4">
              Write Notes
            </h3>

            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write your notes..."
              className="w-full border p-3 rounded-xl h-32"
            />

            <button
              onClick={addNote}
              className="bg-purple-300 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-400"
            >
              Save Note
            </button>


            <div className="mt-6 space-y-3">

              {notes.map((n, i) => (

                <div
                  key={i}
                  className="flex justify-between items-center bg-[#f6f2ff] p-3 rounded-lg"
                >

                  <span>{n}</span>

                  <button
                    onClick={() => deleteNote(i)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>

                </div>

              ))}

            </div>

          </div>



          {/* PDF CARD */}

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h3 className="text-xl text-purple-400 font-semibold mb-4">
              Upload PDFs
            </h3>

            <input
              type="file"
              multiple
              onChange={uploadPdf}
              className="mb-4"
            />


            <div className="space-y-3">

              {pdfs.map((p, i) => (

                <div
                  key={i}
                  className="flex justify-between items-center bg-[#f6f2ff] p-3 rounded-lg"
                >

                  <a
                    href={URL.createObjectURL(p)}
                    target="_blank"
                    className="text-purple-500 underline"
                  >
                    {p.name}
                  </a>

                  <button
                    onClick={() => deletePdf(i)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>

                </div>

              ))}

            </div>

          </div>



          {/* LINKS CARD */}

          <div className="bg-white p-6 rounded-3xl shadow-lg col-span-2">

            <h3 className="text-xl text-purple-400 font-semibold mb-4">
              Useful Links
            </h3>


            <div className="flex gap-3">

              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Paste link here..."
                className="border p-2 rounded-lg w-full"
              />

              <button
                onClick={addLink}
                className="bg-purple-300 text-white px-5 rounded-lg hover:bg-purple-400"
              >
                Add
              </button>

            </div>


            <div className="mt-6 space-y-3">

              {links.map((l, i) => (

                <div
                  key={i}
                  className="flex justify-between items-center bg-[#f6f2ff] p-3 rounded-lg"
                >

                  <a
                    href={l}
                    target="_blank"
                    className="text-purple-500 underline"
                  >
                    {l}
                  </a>

                  <button
                    onClick={() => deleteLink(i)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>

                </div>

              ))}

            </div>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Notes
