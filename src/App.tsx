import { Routes, Route, Link } from "react-router-dom";
import LifeSkillCalculator from "@/components/LifeSkillCalculator";
import FocusEfficiency from "@/pages/FocusEfficiency";

export default function App() {
  return (
    <div>
      <nav className="flex justify-center gap-4 p-3 bg-[#0b0f14] text-sm text-slate-300 border-b border-[#1b2530]">
        <Link to="/">🐣 Calculator</Link>
        <Link to="/focus">🙀 Focus Efficiency</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LifeSkillCalculator />} />
        <Route path="/focus" element={<FocusEfficiency />} />
      </Routes>
    </div>
  );
}
