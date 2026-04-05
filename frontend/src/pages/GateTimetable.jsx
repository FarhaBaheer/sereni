import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

function GateTimetable() {

  const today = new Date().toISOString().split("T")[0]

  const [date, setDate] = useState(today)
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const saved = JSON.parse(localStorage.getItem(date)) || []

    setTasks(saved)

  }, [date])


  useEffect(() => {

    localStorage.setItem(date, JSON.stringify(tasks))

  }, [tasks, date])


  const addTask = () => {

    if(!task) return

    setTasks([...tasks, {text:task,done:false}])

    setTask("")
  }


  const toggleTask = (i) => {

    const updated=[...tasks]

    updated[i].done=!updated[i].done

    setTasks(updated)

  }


  const deleteTask = (i) => {

    if(window.confirm("Delete task?")){

      setTasks(tasks.filter((_,index)=>index!==i))

    }

  }


  return (

    <div className="min-h-screen bg-[#efe9ff]">

      <Navbar />

      <div className="text-center mt-10">

        <h1 className="text-4xl text-purple-500 font-bold">
          Study Timetable
        </h1>

        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          className="mt-4 p-2 rounded-lg border"
        />

      </div>


      <div className="flex justify-center mt-10">

        <div className="bg-white p-8 rounded-3xl shadow-xl w-2/3">

          <div className="flex gap-3 mb-6">

            <input
              value={task}
              onChange={(e)=>setTask(e.target.value)}
              placeholder="Add study task"
              className="border p-2 rounded-lg flex-1"
            />

            <button
              onClick={addTask}
              className="bg-purple-300 text-white px-4 rounded-lg"
            >
              Add
            </button>

          </div>


          <div className="space-y-3">

            {tasks.map((t,i)=>(

              <div
                key={i}
                className="flex justify-between bg-[#f6f2ff] p-3 rounded-lg"
              >

                <div className="flex gap-3">

                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={()=>toggleTask(i)}
                  />

                  <span className={t.done ? "line-through text-gray-400":""}>
                    {t.text}
                  </span>

                </div>

                <button
                  onClick={()=>deleteTask(i)}
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

export default GateTimetable
