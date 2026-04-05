import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function TodayWorkout() {
  const [exercises, setExercises] = useState([
    { id: 1, name: "10 min Stretching", completed: false },
    { id: 2, name: "30 min Pilates", completed: false },
    { id: 3, name: "15 min Core", completed: false }
  ]);

  const toggleComplete = (id) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, completed: !ex.completed } : ex
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-4xl w-full mx-auto p-10">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl font-bold text-purple-700">Today's Routine</h1>
          <Link to="/workout" className="text-purple-600 hover:text-purple-800 font-semibold">← Back to Workout</Link>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          {exercises.map((exercise) => (
            <div 
              key={exercise.id} 
              className={`flex items-center p-6 mb-4 rounded-2xl transition-all duration-300 ${exercise.completed ? 'bg-purple-100/50' : 'bg-white shadow-md hover:shadow-lg'}`}
            >
              <button 
                onClick={() => toggleComplete(exercise.id)}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-6 transition-colors ${exercise.completed ? 'bg-purple-500 border-purple-500' : 'border-purple-300 hover:border-purple-500'}`}
              >
                {exercise.completed && <span className="text-white">✓</span>}
              </button>
              <span className={`text-xl font-medium ${exercise.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                {exercise.name}
              </span>
            </div>
          ))}

          <div className="mt-10 text-center">
            <p className="text-purple-500 font-semibold mb-4">
              {exercises.filter(e => e.completed).length} / {exercises.length} completed
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
              <div 
                className="bg-purple-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${(exercises.filter(e => e.completed).length / exercises.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayWorkout;
