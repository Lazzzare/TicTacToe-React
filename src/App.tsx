import Board from "./components/Board";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <div className="bg-DarkNavy w-full h-screen flex items-center justify-center flex-col">
        <Board />
      </div>
    </>
  );
};

export default App;
