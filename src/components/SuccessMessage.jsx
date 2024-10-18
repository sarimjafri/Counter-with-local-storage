import React from "react";

const SuccessMessage = ({ message }) => {
  return (
    message && (
      <p
        className="text-green-500 text-lg mt-4 font-semibold"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {message}
      </p>
    )
  );
};

export default SuccessMessage;
