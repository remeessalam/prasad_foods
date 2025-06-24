import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import FranchisePage from "./Pages/FranchisePage";
import AboutPage from "./Pages/AboutPage";
import CareersPage from "./Pages/CareersPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fanchise" element={<FranchisePage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
