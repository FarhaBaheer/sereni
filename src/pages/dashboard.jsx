import Card from "../components/Card"

import gate from "../assets/images/gate.png"
import academics from "../assets/images/academics.png"
import flow from "../assets/images/flow.png"
import finance from "../assets/images/finance.png"
import diet from "../assets/images/diet.png"
import workout from "../assets/images/workout.png"

function Dashboard() {
  return (
  <div className="min-h-screen bg-[#e9e1ff] flex flex-col">

      {/* Top section */}
      <div className="text-center pt-12 pb-10">

        <h1 className="text-5xl font-semibold text-purple-400 tracking-wide">
          Sereni
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Each day, a step ahead.
        </p>

      </div>


      {/* Cards section */}
      <div className="flex-1 flex items-center justify-center px-16 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">

          <Card image={gate} title="Gate" />
          <Card image={academics} title="Academics" />
          <Card image={flow} title="Flow" />
          <Card image={finance} title="Finance" />
          <Card image={diet} title="Diet" />
          <Card image={workout} title="Workout" />

        </div>

      </div>

    </div>
  )
}

export default Dashboard
