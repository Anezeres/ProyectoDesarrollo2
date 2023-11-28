import React from "react";

export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white hidden xl:block overflow-x-hidden">
                <div className="container mx-auto py-7">
                    <div className="flex flex-row justify-between px-5">
                        <div className="flex flex-col">
                            <h3 className="xl:text-xl 2xl:text-2xl font-semibold xl:mb-3 2xl:mb-4">Contacto</h3>
                            <p className="mb-2">Teléfono: 123456789</p>
                            <p className="mb-2">Correo: ejemplo@gmail.com</p>
                            <p className="mb-2">Dirección: Calle 123</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="xl:text-xl 2xl:text-2xl font-semibold xl:mb-3 2xl:mb-4">Redes Sociales</h3>
                            <a href="#" className="mb-2">Facebook</a>
                            <a href="#" className="mb-2">Instagram</a>
                            <a href="#" className="mb-2">Twitter</a>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="xl:text-xl 2xl:text-2xl font-semibold xl:mb-3 2xl:mb-4">Productos</h3>
                            <a href="#" className="mb-2">Hombre</a>
                            <a href="#" className="mb-2">Mujer</a>
                            <a href="#" className="mb-2">Niños</a>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="xl:text-xl 2xl:text-2xl font-semibold xl:mb-3 2xl:mb-4">Información</h3>
                            <a href="#" className="mb-2">Sobre nosotros</a>
                            <a href="#" className="mb-2">Política de privacidad</a>
                            <a href="#" className="mb-2">Términos y condiciones</a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 text-center xl:text-sm 2xl:text-base py-4">
                    <p>© 2023 Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
};