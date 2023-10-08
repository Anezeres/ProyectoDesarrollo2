import React from "react";
import RegisterFormBG from "../assets/RegisterFormBG.png";

export const RegisterForm = () => {
    return (
        <>
            <div className="min-h-screen py-40 bg-gradient-to-br from-amber-600 to-amber-300">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12"
                            style={{
                                background: `url(${RegisterFormBG})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat" 
                            }}    
                        >
                            <h1 className="text-white text-4xl mb-3 font-semibold z-10">Bienvenid@</h1>
                            <div>
                                <p className="text-white font-semibold z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe nobis, tempora accusantium libero, dolore expedita ad iure minus nemo qui neque id cumque itaque quas dolores repellat, deleniti omnis?</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-16 px-12">
                            <h2 className="text-3xl mb-4">Registrarse</h2>
                            <p className="mb-4">
                                Registrate para poder acceder a todos los beneficios que tenemos para ti. Es gratis y solo tomará un par de minutos.
                            </p>
                            <form action="#">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Nombre" className="border border-gray-400 py-1 px-2"/>
                                    <input type="text" placeholder="Apellido" className="border border-gray-400 py-1 px-2"/>
                                </div>
                                <div className="mt-5">
                                    <input type="email" placeholder="Correo electrónico" className="border border-gray-400 py-1 px-2 w-full"/>
                                </div>
                                <div className="mt-5">
                                    <input type="email" placeholder="Contraseña" className="border border-gray-400 py-1 px-2 w-full"/>
                                </div>
                                <div className="mt-5">
                                    <input type="email" placeholder="Confirmar Contraseña" className="border border-gray-400 py-1 px-2 w-full"/>
                                </div>
                                <div className="mt-5">
                                    <input type="checkbox" className="border border-gray-400"/>
                                    <span className="ml-2">
                                        He leído y acepto los <a href="#" className="text-amber-600 font-semibold">términos y condiciones de uso </a> y la <a href="#" className="text-amber-600 font-semibold">política de privacidad de datos personales</a>.
                                    </span>
                                </div>
                                <div>
                                    <button className="bg-amber-600 text-white w-full py-2 mt-5 text-center">Registrarse</button>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}