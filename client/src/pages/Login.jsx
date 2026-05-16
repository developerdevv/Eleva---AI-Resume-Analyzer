import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  if (user) return <Navigate to="/" replace />;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

     
      login({ name: response.data.name, email: response.data.email });
      navigate("/dashboard");

    } catch (err) {
     
      setError("Invalid Email or Password");
    } finally {
    
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-6 py-16 bg-gray-50 min-h-[80vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">ELEVA</h1>
          <p className="mt-2 text-gray-500 text-sm">Login to continue your career journey</p>
        </div>

  
        {error && (
          <div className="mt-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-5">

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

   
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white font-semibold bg-blue-600 rounded-xl hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
