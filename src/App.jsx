import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskBoard from "./components/TaskBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
