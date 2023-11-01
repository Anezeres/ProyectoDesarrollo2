import React from "react";

export const LoginForm = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-4 font-semibold">Iniciar Sesión</h2>
            <form action="#" className="w-full max-w-xl">
                <p className="mb-4 text-xl">
                    Que bueno verte de nuevo, ¿Qué vamos a comprar hoy?
                </p>
                <div className="mt-5">
                    <input type="email" placeholder="Correo electrónico" className="border border-gray-400 py-1 px-2 w-full text-2xl"/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Contraseña" className="border border-gray-400 py-1 px-2 w-full text-2xl"/>
                </div>
                <div>
                    <button className="bg-amber-600 text-white w-full py-2 mt-5 text-center rounded-xl text-2xl font-semibold">Iniciar Sesión</button>
                </div> 
            </form>
        </div>
    );
}