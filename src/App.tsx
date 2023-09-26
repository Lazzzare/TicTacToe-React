import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="bg-DarkNavy w-full h-screen flex items-center justify-center flex-col">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/board" element={<Board />}></Route>
      </Routes>
    </div>
  );
};

export default App;
