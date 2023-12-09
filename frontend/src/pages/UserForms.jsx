import React, {useState} from "react";
import { RegisterForm } from "../components/RegisterForm";
import { LoginForm } from "../components/LoginForm";

export const UserForms = () => {
    const [isLoginForm, setActiveForm] = useState(true);

    const handleFormChange = () => {
        setActiveForm(!isLoginForm);
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-amber-600 to-amber-300 h-screen">
            <div className="bg-white w-[75%] h-[55%] flex justify-center items-center rounded-xl">
                <div className="w-1/2 h-[100%] z-10 flex flex-col justify-center items-center">
                    <h2 className="font-sans font-bold xl:text-3xl 2xl:text-4xl mb-5px">¿Ya tienes tu cuenta?</h2>
                    <button onClick={handleFormChange} className="bg-amber-600 text-white mt-5 text-center rounded-xl xl:text-2xl 2xl:text-3xl font-semibold py-2 px-4">Iniciar Sesión</button>
                </div>
                <div className="w-1/2 h-[100%] z-10 flex flex-col justify-center items-center">
                    <h2 className="font-sans font-bold xl:text-3xl 2xl:text-4xl mb-5px">¿Aún no tienes una cuenta?</h2>
                    <button onClick={handleFormChange} className="bg-amber-600 text-white mt-5 text-center rounded-xl xl:text-2xl 2xl:text-3xl font-semibold py-2 px-4">Registrarse</button>
                </div>
                <div className={`${isLoginForm === true ? "left-[15%]" : "left-[48%]"} absolute z-50 left-[15%] h-[80%] w-[37%] bg-white shadow-2xl transition-all duration-300 flex justify-center items-center overflow-hidden rounded-xl`}>
                    <div className={`absolute ${isLoginForm === true ? "top-[0%]" : "top-[100%]"} transition-all duration-300 absolute flex items-center justify-center h-full`} >
                        <LoginForm />
                    </div>
                    <div className={`absolute ${isLoginForm === true ? "top-[100%]" : "top-[0%]"} transition-all duration-300 absolute flex items-center justify-center h-full`}>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}