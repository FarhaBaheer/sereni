import { useState, useEffect } from "react"
import dietImage from "../assets/images/diet.png"
import Navbar from "../components/Navbar"

function DietHealth() {

  const today = new Date().toISOString().split("T")[0]

  const [date, setDate] = useState(today)
  const [food, setFood] = useState("")
  const [foods, setFoods] = useState([])
  const [water, setWater] = useState(0)
  const [notes, setNotes] = useState("")

  // Load data for selected date
  useEffect(() => {
    const saved = localStorage.getItem(date)

    if (saved) {
      const data = JSON.parse(saved)
      setFoods(data.foods || [])
      setWater(data.water || 0)
      setNotes(data.notes || "")
    } else {
      setFoods([])
      setWater(0)
      setNotes("")
    }
  }, [date])

  // Save data whenever it changes
  useEffect(() => {
    const data = { foods, water, notes }
    localStorage.setItem(date, JSON.stringify(data))
  }, [foods, water, notes, date])

  // Add food
  const addFood = () => {
    if (food.trim() === "") return

    const newFood = {
      name: food,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }

    setFoods([...foods, newFood])
    setFood("")
  }

  // Delete food
  const deleteFood = (index) => {
    const updatedFoods = foods.filter((_, i) => i !== index)
    setFoods(updatedFoods)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
    <Navbar />
      {/* Header */}
      <div className="text-center pt-10 pb-6">

        <h1 className="text-6xl font-bold text-purple-500">
          Sereni
        </h1>

        <p className="text-gray-700 mt-3 text-xl">
          Care for your body kindly.
        </p>

        <h2 className="text-3xl text-purple-700 mt-6 font-bold">
          Diet & Health
        </h2>

        {/* Date selector */}
        <div className="mt-6">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 rounded-xl border border-purple-200"
          />
        </div>

      </div>


      {/* Main section */}
      <div className="flex-1 flex items-center justify-center px-12 pb-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl">

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src={dietImage}
              alt="Diet"
              className="max-h-[620px] object-contain drop-shadow-2xl"
            />
          </div>


          {/* Cards */}
          <div className="grid grid-cols-2 gap-10">

            {/* Food Log */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">

              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Food Log
              </h3>

              <div className="flex gap-2 mb-4">

                <input
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                  placeholder="Add food..."
                  className="flex-1 p-2 border rounded-lg"
                />

                <button
                  onClick={addFood}
                  className="bg-purple-300 text-white px-4 rounded-lg"
                >
                  +
                </button>

              </div>

              <div className="space-y-2 max-h-32 overflow-y-auto">

                {foods.map((item, i) => (

                  <div
                    key={i}
                    className="flex justify-between items-center bg-[#f8f5ff] p-2 rounded-lg"
                  >

                    <div>
                      <span>{item.name}</span>
                      <span className="text-sm text-gray-400 ml-2">
                        {item.time}
                      </span>
                    </div>

                    <button
                      onClick={() => deleteFood(i)}
                      className="text-red-400 hover:text-red-600"
                    >
                      ✕
                    </button>

                  </div>

                ))}

              </div>

            </div>


            {/* Hydration */}
            <div className="bg-white p-10 rounded-3xl shadow-xl text-center flex flex-col items-center">

              <h3 className="text-2xl font-bold text-purple-400 mb-6">
                Hydration
              </h3>

              <p className="text-5xl font-semibold text-purple-500 mb-2">
                {water}
              </p>

              <p className="text-gray-500 mb-6">
                glasses
              </p>

              <div className="flex gap-6">

                <button
                  onClick={() => setWater(Math.max(0, water - 1))}
                  className="bg-purple-200 px-4 py-2 rounded-xl text-xl"
                >
                  −
                </button>

                <button
                  onClick={() => setWater(water + 1)}
                  className="bg-purple-300 text-white px-4 py-2 rounded-xl text-xl"
                >
                  +
                </button>

              </div>

            </div>


            {/* Self Care Notes */}
            <div className="bg-white p-10 rounded-3xl shadow-xl col-span-2">

              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Self Care Notes
              </h3>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write how you felt today..."
                className="w-full p-3 border rounded-xl h-24"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DietHealth
