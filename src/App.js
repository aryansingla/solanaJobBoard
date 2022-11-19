import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./components/jobList/JobList";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="jobs" element={<JobList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
