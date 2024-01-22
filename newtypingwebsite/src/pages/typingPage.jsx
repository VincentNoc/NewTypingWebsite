// import React, { useState, useEffect } from "react";
import CountDownTimer from "../components/countDownTimer";
import QuoteDisplay from "../components/quoteDisplay";
import RestartButton from "../components/restartButton";
import Results from "../components/results";

export default function TypingPage() {
  const timeLimit = 30;

  // console.log("hi there");
  // console.log(FetchRandomQuoteFromApi);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 h-screen w-screen">
      <div className="flex flex-col relative items-center justify-center w-1/2 h-screen">
        <CountDownTimer timeLeft={timeLimit} />
        <p className="text-white font-Hedvig text-2xl tracking-wider">
          <QuoteDisplay />
        </p>
        <Results
          className="mt-10"
          errors={10}
          accuracyPercentage={100}
          total={120}
        />
        <RestartButton />
      </div>
    </div>
  );
}
