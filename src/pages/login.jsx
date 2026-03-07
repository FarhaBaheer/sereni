import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f4ff] to-[#efe9ff] flex items-center justify-center relative overflow-hidden">

      {/* lavender background pattern */}
      <div className="absolute inset-0 opacity-20 animate-breathe">
        <div className="grid grid-cols-5 gap-24 text-3xl place-items-center h-full">
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>

          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>

          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
          <span>💜</span>
        </div>
      </div>

      {/* login card */}
      <div className="bg-white w-96 p-10 rounded-3xl shadow-xl text-center relative z-10">

        <h1 className="text-4xl font-semibold text-purple-400 mb-2">
          Sereni
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          calm.organized.fulfilled
        </p>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-200 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-200 rounded-xl"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-purple-300 text-white p-3 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login
