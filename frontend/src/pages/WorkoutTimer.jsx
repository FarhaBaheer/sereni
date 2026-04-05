import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function WorkoutTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-4xl w-full mx-auto p-10 flex flex-col">
        <div className="flex items-center justify-between mb-20">
          <h1 className="text-5xl font-bold text-purple-700">Workout Timer</h1>
          <Link to="/workout" className="text-purple-600 hover:text-purple-800 font-semibold">← Back to Workout</Link>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md rounded-[4rem] p-20 shadow-2xl flex flex-col items-center">
            <div className="text-9xl font-bold text-purple-600 tracking-wider mb-16 tabular-nums">
              {formatTime(seconds)}
            </div>
            
            <div className="flex gap-8">
              <button 
                onClick={toggle}
                className={`px-12 py-4 rounded-full text-2xl font-bold text-white shadow-lg transition-transform hover:scale-105 ${isActive ? 'bg-orange-400' : 'bg-purple-500'}`}
              >
                {isActive ? 'Pause' : 'Start'}
              </button>
              <button 
                onClick={reset}
                className="px-12 py-4 rounded-full text-2xl font-bold bg-white text-purple-500 shadow-lg transition-transform hover:scale-105"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutTimer;
