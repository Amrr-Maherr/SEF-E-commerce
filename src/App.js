import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.min.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
