import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Typingpage from "./pages/typingPage";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

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
