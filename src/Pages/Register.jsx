import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container p-4 vh-100 d-flex align-items-center justify-content-center shadow-lg rounded">
      <div className="container">
        <h1
          className="text-center mb-4 text-primary"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
        >
          Register
        </h1>
        <form className="mx-auto" style={{ maxWidth: "400px" }}>
          <div className="form-group mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              required
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderBottom = "2px solid #007bff")
              }
              onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderBottom = "2px solid #007bff")
              }
              onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              required
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderBottom = "2px solid #007bff")
              }
              onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{
              padding: "12px 0",
              borderRadius: "25px",
              boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.2)",
            }}
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center" style={{ fontSize: "16px" }}>
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
