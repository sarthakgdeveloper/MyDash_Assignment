import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import BarChart from "./Components/BarChart/BarChart";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/graph" element={<BarChart />} />
    </Routes>
  );
}

export default App;
