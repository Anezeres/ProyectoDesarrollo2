import React from "react";

export const DeliveryForm = ( {handleCancel} ) => {
    return (
        <div className="flex flex-col justify-center items-center border-2 xl:p-7 2xl:p-12  border-black rounded-xl overflow-x-hidden">
            <h2 className="xl:text-3xl 2xl:text-4xl text-black font-semibold xl:mb-1 2xl:mb-4">Entrega</h2>
            <form action="#" className="w-full max-w-xl">
                <div className="xl:mt-4 2xl:mt-5 xl:space-x-1 2xl:space-x-3 flex">
                    <input type="text" placeholder="Nombre" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                    <input type="text" placeholder="Apellido" className="border border-gray-600 px-2 xl:py-1 2xl:py2 w-full xl:text-xl 2xl:text-2xl"/>
                </div>
                <div className="xl:mt-4 2xl:mt-5">
                    <input type="text" placeholder="Dirección" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                </div>
                <div className="xl:mt-4 2xl:mt-5 xl:space-x-1 2xl:space-x-3 flex">
                    <input type="text" placeholder="Ciudad" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                    <input type="text" placeholder="Departamento" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                </div>
                <div className="xl:mt-4 2xl:mt-5">
                    <input type="text" placeholder="Codigo Postal" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                </div>
                <div className="xl:mt-4 2xl:mt-5">
                    <input type="tel" placeholder="Telefono" pattern="[0-9]{10}" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                </div>
                <div className="xl:mt-4 2xl:mt-5">
                    <input type="email" placeholder="Correo Electronico" className="border border-gray-600 px-2 xl:py-1 2xl:py-2 w-full xl:text-xl 2xl:text-2xl"/>
                </div>
                <div className="xl:mt-1 2xl:mt-5">
                    <button className="bg-white text-black w-full py-2 xl:mt-2 2xl:mt-5 text-center rounded-xl xl:text-xl 2xl:text-2xl font-semibold border-2 border-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-200">Enviar</button>
                </div>
                <div className="xl:mt-2 2xl:mt-5">
                    <button type="button" className="bg-white text-black w-full py-2 mt-0 text-center rounded-xl xl:text-xl 2xl:text-2xl font-semibold border-2 border-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-200" onClick={handleCancel}>Cancelar</button>
                </div>  
            </form>
        </div>
    );
}