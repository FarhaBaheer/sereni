import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function WorkoutProgress() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const activeDays = ["Mon", "Wed", "Fri"]; // mock data

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-5xl w-full mx-auto p-10">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold text-purple-700">Weekly Progress</h1>
          <Link to="/workout" className="text-purple-600 hover:text-purple-800 font-semibold">← Back to Workout</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Streak Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl flex flex-col items-center justify-center">
            <h2 className="text-2xl text-purple-400 font-bold mb-4">Current Streak</h2>
            <div className="text-8xl font-bold text-orange-400">
              3<span className="text-4xl text-orange-300 ml-2">days 🔥</span>
            </div>
            <p className="text-gray-500 mt-4">Keep it up! You're doing great.</p>
          </div>

          {/* Days Grid */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl">
            <h2 className="text-2xl text-purple-400 font-bold mb-8">This Week</h2>
            <div className="flex justify-between items-center">
              {days.map(day => (
                <div key={day} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full mb-3 flex items-center justify-center transition-all ${activeDays.includes(day) ? 'bg-purple-500 text-white shadow-lg shadow-purple-200' : 'bg-gray-100 text-gray-400'}`}>
                    {activeDays.includes(day) ? '✓' : ''}
                  </div>
                  <span className="text-sm font-semibold text-gray-500">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutProgress;
