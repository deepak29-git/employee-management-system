import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Shortlist from "./pages/Shortlist";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/shortlist" element={<Shortlist />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
