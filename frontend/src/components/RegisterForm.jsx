import React from "react";

export const RegisterForm = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-4 font-semibold">Registrarse</h2>
            <form action="#" className="w-full max-w-xl">
                <p className="mb-4 text-xl">
                    Regístrate para poder acceder a todos los beneficios que tenemos para ti.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" className="border border-gray-400 py-1 px-2 text-2xl"/>
                    <input type="text" placeholder="Apellido" className="border border-gray-400 py-1 px-2 text-2xl"/>
                </div>
                <div className="mt-5">
                    <input type="email" placeholder="Correo electrónico" className="border border-gray-400 py-1 px-2 w-full text-2xl"/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Contraseña" className="border border-gray-400 py-1 px-2 w-full text-2xl"/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Confirmar Contraseña" className="border border-gray-400 py-1 px-2 w-full text-2xl"/>
                </div>
                <div className="mt-5">
                    <label className="flex items-center">
                        <input type="checkbox" className="border border-gray-400"/>
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