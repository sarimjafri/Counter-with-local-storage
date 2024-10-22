import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem("counter");
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const resetCounter = () => setCounter(0);

  return (
    <div className="bg-opacity-30 bg-gray-800 backdrop-blur-lg p-10 rounded-lg shadow-xl text-center text-white max-w-md mx-auto mt-12">
      <h2 className="text-4xl font-extrabold mb-6">Counter</h2>
      <p className="text-6xl font-extrabold mb-8">{counter}</p>

      {/* Increment Button */}
      <button
        onClick={incrementCounter}
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition transform hover:scale-105 focus:ring-4 focus:ring-blue-300 mb-4 mr-4"
      >
        Increment
      </button>

      {/* Decrement Button */}
      <button
        onClick={decrementCounter} // onClick for decrement
        className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition transform hover:scale-105 focus:ring-4 focus:ring-yellow-300 mb-4 mr-4"
      >
        Decrement
      </button>

      {/* Reset Button */}
      <button
        onClick={resetCounter}
        className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition transform hover:scale-105 focus:ring-4 focus:ring-red-300 mb-4"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
