import { useEffect, useRef, useState } from "react";

function Slider() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  const timeoutRef = useRef(null);
  const [delay, setDelay] = useState(8000);

  const images = [
    "beef01.jpg",
    "beef03.jpg",
    "1box.jpg",
    "3box.jpg",
    "5box.jpg",
    "maca01.jpg",
    "macabox1.jpg",
    "macabox3.jpg",
    "rown01.jpg",
    "rown03.jpg",
    "rown05.jpg",
    "stone1.jpg",
    "stone3.jpg",
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

  const handelNext = () => {
    setTransL(true);
    setTransR(false);
  };

  const moveDot = (inde) => {
    // if (index > images.length - 1) {
    //   setIndex(index);
    //   setIndex1(0);
    // } else {
    //   setIndex(index);
    //   setIndex1(index + 1);
    // }
    setIndex(inde % images.length);
    setIndex1((inde + 1) % images.length);
    console.log(index, index1);
  };

  return (
    <>
      <div className="w-full text-center text-6xl font-bold tracking-normal sm:mb-4">
        <p>熱銷產品</p>
      </div>
      <div className="flex relative justify-center lg:mt-5 lg:h-1/2 lg:w-1/2 lg:mx-auto sm:mb-10">
        <div className="flex justify-between relative sm:w-full w-2/3 border-8 h-80 overflow-hidden border-gray-200 rounded-xl shadow-xl">
          <button
            className="h-full z-20 w-5 text-white bg-gray-300 opacity-20 hover:opacity-80 font-extrabold text-3xl transform transition duration-300 ease-out"
            onClick={handelPrev}
          >
            {"<"}
          </button>

          <img
            className={`absolute object-cover z-10 w-full h-full  ${
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
            className={`absolute object-cover z-0 w-full h-full  ${
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

        <div className=" absolute flex justify-center w-full top-72">
          {images.map((item, i) => (
            <div
              key={i}
              onClick={() => moveDot(i)}
              className={
                index === i
                  ? " w-6 h-6 rounded-full ml-2 text-center z-40  bg-black border-4 border-white cursor-pointer mb-2"
                  : "w-6 h-6 rounded-full ml-2 text-center z-40  border-4 border-white cursor-pointer mb-2"
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
