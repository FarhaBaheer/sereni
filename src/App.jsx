import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import DietHealth from "./pages/DietHealth";
import Finance from "./pages/Finance";
import Flow from "./pages/Flow";
import Academics from "./pages/Academics"
import Subjects from "./pages/Subjects"
import Chapters from "./pages/Chapters"
import Notes from "./pages/Notes"
import Gate from "./pages/Gate"
import GateConsistency from "./pages/GateConsistency"
import GateTimetable from "./pages/GateTimetable"
import GateNotes from "./pages/GateNotes"
import GateTimer from "./pages/GateTimer"
import GateSyllabus from "./pages/GateSyllabus"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/workout" element={<Workout />} />
      <Route path="/diet" element={<DietHealth />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/flow" element = {<Flow/>}/>
      <Route path="/academics" element={<Academics />} />
      <Route path="/subjects/:semId" element={<Subjects />} />
      <Route path="/chapters/:subjectId" element={<Chapters />} />
      <Route path="/notes/:chapterId" element={<Notes />} />
      <Route path="/gate" element={<Gate />} />
      <Route path="/gate-consistency" element={<GateConsistency />} />
      <Route path="/gate-timetable" element={<GateTimetable />} />
      <Route path="/gate-notes" element={<GateNotes />} />
      <Route path="/gate-timer" element={<GateTimer />} />
      <Route path="/gate-syllabus" element={<GateSyllabus />} />


    </Routes>
  );
}

export default App;

