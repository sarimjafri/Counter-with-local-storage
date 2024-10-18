import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import SuccessMessage from "./SuccessMessage";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    setEmailError("");
    setSuccessMessage("Login Succeed");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  useEffect(() => {
    return () => {
      sessionStorage.clear();
    };
  }, []);

  return (
    <div className="bg-opacity-20 bg-gray-800 backdrop-blur-lg p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Login Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          error={emailError}
          required
        />
        <div className="relative">
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={setPassword}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-10 cursor-pointer text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-white text-gray-800 font-semibold rounded-full relative overflow-hidden transition-transform transform hover:scale-105 shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-70"></span>
          <span className="relative text-lg font-extrabold tracking-wider">
            Login
          </span>
        </button>
      </form>
      <SuccessMessage message={successMessage} />
    </div>
  );
};

export default Form;
