import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function WorkoutIdeas() {
  const ideas = [
    { title: "Morning Yoga Flow", duration: "15 min", type: "Flexibility", color: "from-blue-100 to-indigo-100" },
    { title: "Core Crusher", duration: "20 min", type: "Strength", color: "from-orange-100 to-rose-100" },
    { title: "Cardio Blast", duration: "30 min", type: "Cardio", color: "from-green-100 to-emerald-100" },
    { title: "Evening Wind Down", duration: "10 min", type: "Relaxation", color: "from-purple-100 to-fuchsia-100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-5xl w-full mx-auto p-10">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold text-purple-700">Workout Ideas</h1>
          <Link to="/workout" className="text-purple-600 hover:text-purple-800 font-semibold">← Back to Workout</Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <div key={index} className={`bg-gradient-to-br ${idea.color} rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-white/60 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {idea.type}
                </span>
                <span className="text-gray-500 font-semibold">
                  {idea.duration}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{idea.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutIdeas;
