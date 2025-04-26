import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      if (studentId === "admin" && password === "admin") {
        navigate("/home");
      } else {
        setError("Invalid credentials");
      }
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/backgroundvideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* Login Card */}
      <div className="z-20 w-full max-w-md p-8 bg-[#0084bd] bg-opacity-40 backdrop-blur-sm rounded-2xl shadow-[4px_4px_40px_rgba(0,0,0,0.5)]">
        <div className="text-center mb-6 text-white">
          <MdSchool className="mx-auto h-12 w-12 mb-2" />
          <h2 className="text-3xl font-bold">Miras</h2>
          <p className="text-gray-200 mt-1">Sign in to your student account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-white"
        >
          <div className="mb-4 flex flex-col justify-start items-start">
            {error && (
              <div className="mb-4 text-center text-red-300 font-medium">
                {error}
              </div>
            )}
            {/* Student ID Label and Input */}
            <label className="block text-sm font-medium text-white mb-2">
              Student ID
            </label>
            <div className="relative w-full">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                required
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-3 border border-white border-opacity-30 rounded-md bg-white bg-opacity-10 text-white placeholder-gray-300 pl-10 focus:outline-none focus:ring-2 focus:ring-[#0084bd]"
                placeholder="Enter your student ID"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col justify-start items-start">
            {/* Password Label and Input */}
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <div className="relative w-full">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-white border-opacity-30 rounded-md bg-white bg-opacity-10 text-white placeholder-gray-300 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0084bd]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-300" />
                ) : (
                  <FaEye className="text-gray-300" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-[#0084bd] bg-transparent border-gray-300 rounded"
              />
              <span className="text-gray-200">Remember me</span>
            </label>
            <a
              href="#"
              className="text-[#aad9f0] hover:text-white"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 rounded-md text-white bg-[#0084bd] hover:bg-[#006a9b] transition shadow-md"
          >
            {isLoading ? (
              "Signing in..."
            ) : (
              <>
                Sign in <FaArrowRight className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
