import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/subjects/:subjectId"
            element={<Subject />}
          />
          <Route
            path="/quiz"
            element={<Quiz />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
