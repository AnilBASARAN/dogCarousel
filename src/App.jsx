import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importing specific icons
import './App.css';
import { useState } from "react";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

const App = () => {
  const [number, setNumber] = useState(2);
  const [isActiveRight, setIsActiveRight] = useState(true);
  const [isActiveLeft, setIsActiveLeft] = useState(true);
  
  const buttonLeftStyle = isActiveLeft
    ? "text-center bg-orange-200 w-[45px] h-[45px] rounded-full"
    : "text-center bg-gray-200 w-[45px] h-[45px] rounded-full";
  
  const buttonRightStyle = isActiveRight
    ? "text-center bg-orange-200 w-[45px] h-[45px] rounded-full"
    : "text-center bg-gray-200 w-[45px] h-[45px] rounded-full";
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-4 text-2xl text-cyan-400 dogTitle">Dog {number + 1}</div>
      
      <div className="imageContainer flex items-center justify-center">
        <button 
          onClick={() => {
            if (number >= 1) {
              setIsActiveRight(true);
              setNumber(number - 1);
            } else {
              setIsActiveLeft(false);
            }
          }}
          className={buttonLeftStyle}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>

        <img
          className="h-[350px] w-[300px] m-4 object-cover"
          src={IMAGE_URLS[number]}
          alt=""
        />

        <button
          onClick={() => {
            if (number < IMAGE_URLS.length-1) {
              setNumber(number + 1);
              setIsActiveLeft(true);
            } else {
              setIsActiveRight(false);
            }
          }}
          className={buttonRightStyle}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default App;
