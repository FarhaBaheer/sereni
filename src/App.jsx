import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Workout from "./pages/Workout"
import DietHealth from "./pages/DietHealth"
import Finance from "./pages/Finance"; 

function App() {
  return (
    <Routes>

       <Route path="/" element={<Login />} />

       <Route path="/dashboard" element={<Dashboard />} />

       <Route path="/workout" element={<Workout />} />

       <Route path="/diet" element={<DietHealth />} />

       <Route path="/finance" element={<Finance />} />
</Routes>

  )
}

export default App
