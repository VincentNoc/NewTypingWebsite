import React from "react";
import { Link } from "react-router-dom";

export default function homeToTypeButton() {
  return (
    <div>
      <button className="flex justify-center relative top-5 bg-black rounded-3xl w-20 text-base text-white transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600">
        <Link to="typingpage">Start</Link>
      </button>
    </div>
  );
}
