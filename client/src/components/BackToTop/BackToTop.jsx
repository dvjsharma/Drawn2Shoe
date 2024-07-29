import React, { useState, useEffect } from "react";
import { animateScroll } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    animateScroll.scrollToTop({
      top: 0,
      behavior: "smooth",
      duration: 200
    });
  };

  return (
    <>
      <button
        className={`fixed bottom-5 right-5 z-50 bg-black text-white border-2 border-black p-2 text-sm cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center w-10 h-10
          ${showButton ? 'opacity-100' : 'opacity-0'} hover:bg-white hover:text-black hover:border-black focus:outline-none active:translate-y-1`}
        onClick={handleClick}
      >
        <i className="fas fa-arrow-up text-xl"></i>
      </button>
    </>
  );
};

export default BackToTop;
