import React from "react";

const Results = ({ errors, accuracyPercentage, total, className = " " }) => {
  return (
    <ul
      className={`flex flex-col items-center text-yellow-500 space-y-3 ${className} `}
    >
      <li className="text-white 2xl:">Results</li>
      <li>Accuracy: {accuracyPercentage}</li>
      <li>Typed: {total}</li>
      <li>Errors: {errors}</li>
    </ul>
  );
};

export default Results;
