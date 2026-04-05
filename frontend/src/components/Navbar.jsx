import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const logout = () => {
    navigate("/")
  }

  return (

    <div className="w-full flex justify-between items-center px-10 py-6">

      {/* App name */}
      <h1
        onClick={() => navigate("/dashboard")}
        className="text-2xl font-semibold text-purple-400 cursor-pointer"
      >
        Sereni
      </h1>

      {/* Navigation buttons */}
      <div className="flex gap-4">

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-purple-200 px-4 py-2 rounded-xl text-purple-700"
        >
          Dashboard
        </button>

        <button
          onClick={logout}
          className="bg-purple-300 px-4 py-2 rounded-xl text-white"
        >
          Logout
        </button>

      </div>

    </div>

  )
}

export default Navbar
