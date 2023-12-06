import React, { useState } from "react";

export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const url = import.meta.env.VITE_URL
        const apiUrl = url + "/api/login";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });


            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const data = await response.json();
            setResponseMessage(`Inicio de sesión exitoso: ${data.message}`);
        } catch (error) {
            setResponseMessage(`Error al iniciar sesión: ${error.message}`);
        }
    };

    return (
        <div className="h-full flex flex-col xl:p-14 2xl:p-5 justify-center items-center">
            <h2 className="xl:text-4xl 2xl:text-5xl mb-4 font-semibold">Iniciar Sesión</h2>
            <form action="#" className="w-full max-w-xl" onSubmit={handleFormSubmit}>
                <p className="mb-4 xl:text-lg 2xl:text-xl text-center">
                    ¿Qué vamos a comprar hoy?
                </p>
                <div className="mt-5">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Correo electrónico" className="border border-gray-400 py-1 px-2 w-full xl:text-xl 2xl:text-2xl" />
                </div>
                <div className="mt-5">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Contraseña" className="border border-gray-400 py-1 px-2 w-full xl:text-xl 2xl:text-2xl" />
                </div>
                <div>
                    <button className="bg-amber-600 text-white w-full py-2 mt-5 text-center rounded-xl xl:text-xl 2xl:text-2xl font-semibold">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    );
}