import React from "react";

export const Header = () => {
    return (
        <>
            <header className="bg-white w-full">
                <div className="flex justify-between overflow-x-hidden">
                    <div className=" flex xl:m-6 2xl:m-8">
                        <h1 className="xl:text-4xl 2xl:text-5xl text-black font-semibold">LOGO</h1>
                        <nav className="flex justify-center items-center xl:text-xl 2xd:text-2xl ml-10">
                            <ul className="text-black flex space-x-10">
                                <li><a href="#">Infantil</a></li>
                                <li><a href="#">Hombre</a></li>
                                <li><a href="#">Mujer</a></li>
                                <li><a href="#">Accesorios</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex justify-center items-center space-x-5 mr-5">
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-7 2xl:w-10 xl:h-7 2xl:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                        <div className="hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-8 2xl:w-10 xl:h-8 2xl:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};