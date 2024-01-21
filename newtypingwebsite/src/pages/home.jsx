import React from "react";
import "../style.css";
import HomeToTypeButton from "../components/homeToTypeButton";

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex flex-col items-center justify-center font-Hedvig relative top-96 tracking-widest text-white text-2xl">
        Welcome to QuickType
        <HomeToTypeButton />
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <div className="font-Hedvig text-xs text-white">
          Inspired by Typeracer
        </div>
      </div>
    </div>
  );
}
