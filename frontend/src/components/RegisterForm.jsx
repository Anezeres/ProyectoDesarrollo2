import React, { useState } from "react";

export const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [resultadoConsulta, setResultadoConsulta] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            email: email,
            ced: cedula,
            tel: telefono,
            nombre: nombre,
            password: password,
        };


        const url = import.meta.env.VITE_URL
        const apiUrl = url + "/api/cliente/";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const data = await response.json();
            setResultadoConsulta(JSON.stringify(data));
        } catch (error) {
            setResultadoConsulta(`Error al realizar la consulta: ${error.message}`);
        }
    };

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-4 font-semibold">Registrarse</h2>
            <form action="#" className="w-full max-w-xl" onSubmit={handleFormSubmit}>
                <p className="mb-4 text-xl">
                    Regístrate para poder acceder a todos los beneficios que tenemos para ti.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" className="border border-gray-400 py-1 px-2 text-2xl" />
                    <input value={cedula} onChange={(e) => setCedula(e.target.value)} type="text" placeholder="Cedula" className="border border-gray-400 py-1 px-2 text-2xl" />
                </div>
                <div className="mt-5">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo electrónico" className="border border-gray-400 py-1 px-2 w-full text-2xl" />
                </div>
                <div className="mt-5">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" className="border border-gray-400 py-1 px-2 w-full text-2xl" />
                </div>
                <div className="mt-5">
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" placeholder="Telefono" className="border border-gray-400 py-1 px-2 w-full text-2xl" />
                </div>
                <div className="mt-5">
                    <label className="flex items-center">
                        <input type="checkbox" className="border border-gray-400" />
                        <span className="ml-2 text-xl">
                            He leído y acepto los <a href="#" className="text-amber-600 font-semibold">términos y condiciones de uso</a> y la <a href="#" className="text-amber-600 font-semibold">política de privacidad de datos personales</a>.
                        </span>
                    </label>
                </div>
                <div>
                    <button className="bg-amber-600 text-white w-full py-2 mt-5 text-center rounded-xl text-2xl font-semibold">Registrarse</button>
                </div>
            </form>
        </div>
    );
}