import { Link } from "react-router-dom";
import workoutGirl from "../assets/images/workoutGirl.jpg"
import Navbar from "../components/Navbar"
function Workout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2edff] via-[#e6dcff] to-[#d9ccff] flex flex-col">
    <Navbar />
      {/* Header */}
      <div className="text-center pt-10 pb-6">

        <h1 className="text-6xl font-bold text-purple-500 tracking-wide">
          Sereni
        </h1>

        <p className="text-gray-700 mt-3 text-xl font-semibold">
          Move gently. Grow stronger.
        </p>

        <h2 className="text-3xl text-purple-700 mt-6 font-bold">
          Workout
        </h2>

      </div>


      {/* Main section */}
      <div className="flex-1 flex items-center justify-center px-12 pb-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl">

          {/* Image section */}
          <div className="flex justify-center">
            <img
              src={workoutGirl}
              alt="Workout"
              className="max-h-[650px] object-contain drop-shadow-2xl"
            />
          </div>


          {/* Cards */}
          <div className="grid grid-cols-2 gap-10">

            {/* Card 1 */}
            <Link to="/workout/today" className="bg-gradient-to-br from-white to-[#f3efff] p-14 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center block">
              <h3 className="text-2xl font-bold text-purple-400">
                Today's Workout
              </h3>
            </Link>

            {/* Card 2 */}
            <Link to="/workout/timer" className="bg-gradient-to-br from-white to-[#f3efff] p-14 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center block">
              <h3 className="text-2xl font-bold text-purple-400">
                Workout Timer
              </h3>
            </Link>

            {/* Card 3 */}
            <Link to="/workout/progress" className="bg-gradient-to-br from-white to-[#f3efff] p-14 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center block">
              <h3 className="text-2xl font-bold text-purple-400">
                Weekly Progress
              </h3>
            </Link>

            {/* Card 4 */}
            <Link to="/workout/ideas" className="bg-gradient-to-br from-white to-[#f3efff] p-14 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center block">
              <h3 className="text-2xl font-bold text-purple-400">
                Workout Ideas
              </h3>
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Workout



