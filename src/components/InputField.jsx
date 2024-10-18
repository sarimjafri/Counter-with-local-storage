import React from "react";

const InputField = ({ label, type, value, onChange, error, required }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-white">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-gray-700 text-white border ${
          error ? "border-red-500" : "border-gray-600"
        } rounded-lg focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        } transition`}
        required={required}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
