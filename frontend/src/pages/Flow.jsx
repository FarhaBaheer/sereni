import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

// Flow intensity options
const flowLevels = [
  { label: "No Flow", color: "bg-white" },
  { label: "Light", color: "bg-pink-200" },
  { label: "Medium", color: "bg-purple-300" },
  { label: "Heavy", color: "bg-purple-600 text-white" },
]

// Spotting button (green)
const spottingOption = { label: "Spotting", color: "bg-green-300 text-white" }

// Month names
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function Flow() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split("T")[0])
  const [flowData, setFlowData] = useState({})
  const [flowLevel, setFlowLevel] = useState(0)
  const [symptoms, setSymptoms] = useState("")
  const [notes, setNotes] = useState("")

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("flowData")
    if (saved) setFlowData(JSON.parse(saved))
  }, [])

  // Save data
  useEffect(() => {
    localStorage.setItem("flowData", JSON.stringify(flowData))
  }, [flowData])

  // Select a day
  const selectDate = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    setSelectedDate(dateStr)
    const data = flowData[dateStr]
    if (data) {
      if (data.spotting) setFlowLevel(flowLevels.length) // last index = Spotting
      else setFlowLevel(data.level ?? 0)
      setSymptoms(data.symptoms || "")
      setNotes(data.notes || "")
    } else {
      setFlowLevel(0)
      setSymptoms("")
      setNotes("")
    }
  }

  // Save flow/spotting for selected date
  const saveFlow = () => {
    const isSpotting = flowLevel === flowLevels.length
    setFlowData({
      ...flowData,
      [selectedDate]: {
        level: isSpotting ? 0 : flowLevel,
        symptoms,
        notes,
        spotting: isSpotting,
      },
    })
  }

  // Get number of days in month
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()

  // Month navigation
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else setCurrentMonth(currentMonth - 1)
  }
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else setCurrentMonth(currentMonth + 1)
  }

  // Calculate stats (only Light, Medium, Heavy)
  const cycleDays = Object.keys(flowData).filter(
    d => flowData[d].level > 0 // Ignore No Flow and Spotting
  )
  const avgFlowDays =
    cycleDays.length > 0
      ? Math.round(cycleDays.length / Math.max(1, new Set(cycleDays.map(d => d.split("-")[1])).size))
      : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="text-center pt-10 pb-6">
        <h1 className="text-6xl font-bold text-purple-500 tracking-wide">Sereni</h1>
        <p className="text-gray-700 mt-3 text-xl font-semibold">Track your menstrual flow calmly</p>
        <h2 className="text-3xl text-purple-700 mt-6 font-bold">Flow Tracker</h2>
      </div>

      {/* Main section */}
      <div className="flex-1 flex flex-col items-center px-8 pb-12">

        {/* Month Navigation */}
        <div className="flex items-center justify-between w-full max-w-4xl mb-6">
          <button onClick={prevMonth} className="bg-purple-200 px-4 py-2 rounded-xl">← Prev</button>
          <h3 className="text-xl font-bold text-purple-500">{monthNames[currentMonth]} {currentYear}</h3>
          <button onClick={nextMonth} className="bg-purple-200 px-4 py-2 rounded-xl">Next →</button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 w-full max-w-4xl mb-10">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="text-center font-semibold text-gray-500">{day}</div>
          ))}
          {Array.from({ length: getDaysInMonth(currentMonth, currentYear) }, (_, i) => i + 1).map(day => {
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
            const data = flowData[dateStr]
            let cellColor = "bg-white"
            if (data) {
              if (data.spotting) cellColor = spottingOption.color
              else cellColor = flowLevels[data.level].color
            }
            return (
              <div
                key={day}
                onClick={() => selectDate(day)}
                className={`h-12 flex items-center justify-center rounded-lg cursor-pointer border ${selectedDate === dateStr ? "border-purple-500" : "border-transparent"} ${cellColor} hover:scale-105 transition`}
              >
                {day}
              </div>
            )
          })}
        </div>

        {/* Flow + Spotting Entry Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl grid grid-cols-1 gap-6">
          <h3 className="text-2xl font-bold text-purple-400 text-center">Log Flow for {selectedDate}</h3>

          {/* Flow + Spotting buttons */}
          <div className="flex justify-around">
            {flowLevels.map((f, i) => (
              <button
                key={i}
                onClick={() => setFlowLevel(i)}
                className={`px-4 py-2 rounded-xl ${flowLevel === i ? "ring-2 ring-purple-400" : ""} ${f.color}`}
              >
                {f.label}
              </button>
            ))}
            {/* Spotting button */}
            <button
              onClick={() => setFlowLevel(flowLevels.length)}
              className={`px-4 py-2 rounded-xl ${flowLevel === flowLevels.length ? "ring-2 ring-purple-400" : ""} ${spottingOption.color}`}
            >
              {spottingOption.label}
            </button>
          </div>

          {/* Symptoms */}
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Symptoms (cramps, mood swings, fatigue...)"
            className="w-full p-3 border rounded-xl"
          />

          {/* Notes */}
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes..."
            className="w-full p-3 border rounded-xl"
          />

          <button
            onClick={saveFlow}
            className="bg-purple-300 text-white p-3 rounded-xl w-full text-lg"
          >
            Save
          </button>
        </div>

        {/* Statistics */}
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl mt-10 grid grid-cols-2 gap-6 text-center">
          <div>
            <h4 className="text-purple-400 font-bold">Days with Flow</h4>
            <p className="text-3xl font-semibold">{cycleDays.length}</p>
          </div>
          <div>
            <h4 className="text-purple-400 font-bold">Avg Flow Days / Month</h4>
            <p className="text-3xl font-semibold">{avgFlowDays}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Flow


