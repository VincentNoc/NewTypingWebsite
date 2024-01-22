import { fetchData, seperateQuote } from "../services/api";
import React, { useState, useEffect } from "react";
import CountDownTimer from "../components/countDownTimer";
export default function TypingPage() {
  const [randomWords, setRandomWords] = useState([]);
  const [error, setError] = useState(null);

  //this fetches the response from the api service
  const FetchRandomQuoteFromApi = async () => {
    try {
      const response = await fetchData();
      const seperateResponse = seperateQuote(response);
      setRandomWords(seperateResponse);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    FetchRandomQuoteFromApi();
  }, []);

  const displayQuote = randomWords.map((word, index) => (
    <span key={index}>
      <span className="inline-block p-1">{word}</span>
    </span>
  ));

  // console.log("hi there");
  // console.log(FetchRandomQuoteFromApi);

  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-800 h-screen w-screen">
        <div className="flex flex-col">
          <CountDownTimer timeLeft={30} />
        </div>
        <p className="text-white font-Hedvig text-2xl tracking-wider">
          {displayQuote}
        </p>
      </div>
    </div>
  );
}
