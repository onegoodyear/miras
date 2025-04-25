import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Ressources from "./pages/Ressources";
import Subject from "./pages/Subject";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route element={<MainLayout />}>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/Ressources"
              element={<Ressources />}
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
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
