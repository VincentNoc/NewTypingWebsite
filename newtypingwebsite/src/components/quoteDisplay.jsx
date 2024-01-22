import React, { useState, useEffect } from "react";
import { fetchData, seperateQuote } from "../services/api";

export default function QuoteDisplay() {
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
  return <div>{displayQuote}</div>;
}
