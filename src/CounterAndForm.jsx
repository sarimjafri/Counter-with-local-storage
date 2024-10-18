import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

const CounterAndForm = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
      {/* Counter Part */}
      <div className="lg:w-1/2">
        <Counter />
      </div>

      {/* Form*/}
      <div className="lg:w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default CounterAndForm;
