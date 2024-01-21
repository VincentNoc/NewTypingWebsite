import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Typingpage from "./pages/typingPage";
import "./style.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typingpage" element={<Typingpage />} />
      </Routes>
    </div>
  );
}

export default App;
