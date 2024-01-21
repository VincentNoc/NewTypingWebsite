import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.quotable.io/random",
};

export const fetchData = async () => {
  try {
    const response = await axios.request(options);
    // console.log(response.data.content.split(" "));

    console.log(response.data.content);
    return response.data.content;
    // return separatedResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const seperateQuote = (quote) => {
  // console.log(quote.split(""));
  return quote.split(" ");
};
