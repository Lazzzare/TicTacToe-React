import Board from "./components/Board";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const Xicon = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Combined Shape"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.2406 1.14742C52.0691 -0.0241513 50.1696 -0.0241497 48.998 1.14742L32 18.1454L15.002 1.14742C13.8304 -0.0241506 11.9309 -0.0241496 10.7594 1.14742L1.14742 10.7594C-0.0241497 11.9309 -0.0241481 13.8304 1.14742 15.002L18.1454 32L1.14742 48.998C-0.0241506 50.1696 -0.0241496 52.0691 1.14742 53.2406L10.7594 62.8526C11.9309 64.0241 13.8304 64.0241 15.002 62.8526L32 45.8546L48.998 62.8526C50.1696 64.0242 52.0691 64.0241 53.2406 62.8526L62.8526 53.2406C64.0242 52.0691 64.0241 50.1696 62.8526 48.998L45.8546 32L62.8526 15.002C64.0242 13.8304 64.0241 11.9309 62.8526 10.7594L53.2406 1.14742Z"
      fill="#31C3BD"
    />
  </svg>
);
const Oicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32ZM18.963 32C18.963 24.7998 24.7998 18.963 32 18.963C39.2002 18.963 45.037 24.7998 45.037 32C45.037 39.2002 39.2002 45.037 32 45.037C24.7998 45.037 18.963 39.2002 18.963 32Z"
      fill="#F2B137"
    />
  </svg>
);

const App = () => {
  return (
    <div className="bg-DarkNavy w-full h-screen flex items-center justify-center flex-col">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/board"
          element={<Board Xicon={Xicon} Oicon={Oicon} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
