import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;