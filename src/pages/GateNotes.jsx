import { useState } from "react"
import Navbar from "../components/Navbar"

function GateNotes(){

  const [pdfs,setPdfs]=useState([])

  const uploadPdf=(e)=>{

    const files=Array.from(e.target.files)

    const named=files.map(f=>({
      name:prompt("Enter name for this pdf"),
      file:f
    }))

    setPdfs([...pdfs,...named])
  }

  const deletePdf=(i)=>{

    if(window.confirm("Delete PDF?")){

      setPdfs(pdfs.filter((_,index)=>index!==i))

    }

  }

  return(

    <div className="min-h-screen bg-[#efe9ff]">

      <Navbar/>

      <div className="text-center mt-10">

        <h1 className="text-4xl text-purple-500 font-bold">
          GATE Notes
        </h1>

      </div>

      <div className="flex justify-center mt-10">

        <div className="bg-white p-8 rounded-3xl shadow-xl w-2/3">

          <input type="file" multiple onChange={uploadPdf}/>

          <div className="mt-6 space-y-3">

            {pdfs.map((p,i)=>(

              <div
                key={i}
                className="flex justify-between bg-[#f6f2ff] p-3 rounded-lg"
              >

                <a
                  href={URL.createObjectURL(p.file)}
                  target="_blank"
                  className="text-purple-500 underline"
                >
                  {p.name}
                </a>

                <button
                  onClick={()=>deletePdf(i)}
                  className="text-red-400"
                >
                  ✕
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  )

}

export default GateNotes
