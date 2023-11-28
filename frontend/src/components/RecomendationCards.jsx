import React from "react";

export const Card = ({ product }) => {
    return (
        <div className="bg-white rounded-lg m-2 transition-all duration-300 hover:m-0 hover:cursor-pointer">
            <div className="relative bg-transparent">
                <img src={product.image} alt={product.title} className="w-full h-full rounded-t-lg object-cover" />
            </div>
            <div className="flex px-2 py-1 bg-black bg-opacity-50 rounded-b-lg">
                <div className="flex flex-col w-[85%] 2xl:w-[90%]">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <h2 className="text-white text-lg font-semibold">{product.price}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <svg className="w-8 h-8 text-gray-800 dark:text-white hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4m-2 2V3M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.938-11H17l-2 7H5m0 0L3 4m0 0h2M3 4l-.792-3H1"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export const RecomendationCards = ({ recomendations }) => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2">
            {recomendations.map((recomendation, index) => (
                <Card key={index} product={recomendation} />
            ))}
        </div>
    );
}