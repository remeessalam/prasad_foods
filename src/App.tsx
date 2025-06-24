import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import FranchisePage from "./Pages/FranchisePage";
import AboutPage from "./Pages/AboutPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fanchise" element={<FranchisePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
