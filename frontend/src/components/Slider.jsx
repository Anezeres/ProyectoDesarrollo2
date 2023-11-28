import React, { useState } from "react";

export const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }

    return (
        <div className="max-w-full w-full h-[300px] m-auto px-4 relative group">
            <div style={{backgroundImage: `url(${slides[currentSlide].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-300">
                {/* Left Arrow */}
                <div onClick={() => prevSlide()} className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 rounded-full bg-black bg-opacity-40 p-1 m-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-10 h-10 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                {/* Right Arrow */}
                <div onClick={() => nextSlide()} className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full bg-black bg-opacity-40 p-1 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-10 h-10 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, index) => (
                    <div key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 hover:w-5 hover:h-5 mx-2 rounded-full bg-black bg-opacity-50 hover:cursor-pointer hover:bg-opacity-100 transition-all duration-300 ${currentSlide === index ? "bg-opacity-100" : ""}`}></div>
                ))}
            </div>
        </div>
    );
};