import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    const endpoint = isRegistering ? "http://127.0.0.1:8000/api/register/" : "http://127.0.0.1:8000/api/login/";
    
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.user.username);
        navigate("/dashboard");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f4ff] to-[#efe9ff] flex items-center justify-center relative overflow-hidden">
      {/* lavender background pattern */}
      <div className="absolute inset-0 opacity-20 animate-breathe pointer-events-none">
        <div className="grid grid-cols-5 gap-24 text-3xl place-items-center h-full">
          {[...Array(15)].map((_, i) => (
            <span key={i}>💜</span>
          ))}
        </div>
      </div>

      {/* login card */}
      <div className="bg-white w-96 p-10 rounded-3xl shadow-xl text-center relative z-10">
        <h1 className="text-4xl font-semibold text-purple-400 mb-2">
          Sereni
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          calm. organized. fulfilled
        </p>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-300 text-white p-3 rounded-xl hover:bg-purple-400 transition-colors"
        >
          {isRegistering ? "Register" : "Login"}
        </button>

        <p className="text-gray-400 text-sm mt-4">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <span 
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
