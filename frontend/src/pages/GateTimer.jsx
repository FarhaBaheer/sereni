import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

function GateTimer() {

  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {

    let interval

    if (running) {

      interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)

    }

    return () => clearInterval(interval)

  }, [running])


  const stopTimer = () => {

    setRunning(false)

    const minutes = seconds / 60

    const today = new Date().toISOString().split("T")[0]

    const stored = JSON.parse(localStorage.getItem("studyData")) || {}

    stored[today] = (stored[today] || 0) + minutes/60

    localStorage.setItem("studyData", JSON.stringify(stored))

    setSeconds(0)

  }


  const formatTime = () => {

    const h = Math.floor(seconds/3600)
    const m = Math.floor((seconds%3600)/60)
    const s = seconds%60

    return `${h}:${m}:${s}`

  }


  return (

    <div className="min-h-screen bg-[#efe9ff]">

      <Navbar />

      <div className="text-center mt-16">

        <h1 className="text-4xl text-purple-500 font-bold">
          Study Timer
        </h1>

        <p className="text-6xl mt-10 font-semibold text-purple-600">
          {formatTime()}
        </p>

        <div className="mt-10 space-x-4">

          <button
            onClick={() => setRunning(true)}
            className="bg-purple-300 px-6 py-3 rounded-xl text-white"
          >
            Start
          </button>

          <button
            onClick={stopTimer}
            className="bg-red-300 px-6 py-3 rounded-xl text-white"
          >
            Stop
          </button>

        </div>

      </div>

    </div>

  )
}

export default GateTimer
