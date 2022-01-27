import { useEffect, useRef, useState } from "react";

function PublicitySlider() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  const timeoutRef = useRef(null);
  const [delay, setDelay] = useState(8000);

  const images = [
    "publicity01.png",
    "publicity02.png",
    "publicity03.png",
    "publicity04.png",
    "publicity05.png",
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
      setIndex1((prevIndex1) =>
        prevIndex1 === images.length - 1 ? 0 : prevIndex1 + 1,
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index, index1]);

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false);
      }, 800);
    }

    if (transL) {
      setTimeout(() => {
        setTransL(false);
        setIndex((index + 1) % images.length);
        setIndex1((index1 + 1) % images.length);
      }, 800);
    }
  }, [transL, transR]);

  const handelPrev = () => {
    setTransL(false);
    setTransR(true);
    const nextIndex = index - 1;
    const nextIndex1 = index1 - 1;

    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }

    if (nextIndex1 < 0) {
      setIndex1(images.length - 1);
    } else {
      setIndex1(nextIndex1);
    }
  };

  const moveDot = (index) => {
    if (index > images.length - 2) {
      setIndex(index);
      setIndex1(0);
    } else {
      setIndex(index);
      setIndex1(index + 1);
    }
  };

  const handelNext = () => {
    setTransL(true);
    setTransR(false);
  };

  return (
    <>
      <div className="w-full text-center text-6xl font-bold tracking-normal">
        <p>最新資訊</p>
      </div>
      <div className="relative flex justify-center w-full lg:h-[710px] sm:h-[800px] sm:mt-10">
        <div className="flex justify-between relative w-3/4 border-8  overflow-hidden border-gray-200 rounded-xl shadow-xl">
          <button
            className="h-full z-20 w-5 text-white bg-gray-300 opacity-20 hover:opacity-80 font-extrabold text-3xl transform transition duration-300 ease-out"
            onClick={handelPrev}
          >
            {"<"}
          </button>
          <img
            className={`absolute object-cover z-10   ${
              transL
                ? "transition duration-500 ease-linear transform -translate-x-full"
                : transR
                ? "animate-slideL"
                : ""
            }`}
            src={images[index]}
            alt=""
          />
          <img
            className={`absolute object-cover z-0  ${
              transL
                ? "animate-slideR"
                : transR
                ? "transition duration-500 ease-linear transform translate-x-full"
                : ""
            }`}
            src={images[index1]}
            alt=""
          />
          <button
            className="h-full z-20 w-5 text-white bg-gray-300 opacity-20 hover:opacity-80 font-extrabold text-3xl transform transition duration-300 ease-out"
            onClick={handelNext}
          >
            {">"}
          </button>
        </div>

        <div className="absolute flex justify-center w-full top-[650px]">
          {Array.from({ length: 5 }).map((item, i) => (
            <div
              key={i}
              onClick={() => moveDot(i)}
              className={
                index === i
                  ? " w-4 h-4 rounded-full ml-2 text-center z-50  bg-black border-2 border-white cursor-pointer"
                  : "w-4 h-4 rounded-full ml-2 text-center z-50  border-2 border-white cursor-pointer"
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PublicitySlider;
