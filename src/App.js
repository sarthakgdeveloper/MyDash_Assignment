import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import BarChart from "./Components/BarChart/BarChart";

function App() {
  return (
    <Routes>
      <Route exact path="/graph" element={<BarChart />} />
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
