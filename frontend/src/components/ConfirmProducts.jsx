import React, { useState, useEffect } from "react";

export const ConfirmProducts = ({product, handleForm, countProducts, totalPrice}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(product);
    },[]);

    return(
        <div className="ml-12 overflow-x-hidden">
            <div>
                <h1 className="xl:text-3xl 2xl:text-4xl font-semibold text-black">Confirmar Productos</h1>
                <div>
                    <form>
                        <h2 className="xl:text-xl 2xl:text-2xl font-semibold text-black pt-3">Subtotal({countProducts()} productos): $({totalPrice()})</h2>
                        <div className="mt-5">
                            <label className="flex items-center">
                                <input type="checkbox" className="border border-gray-600 py-2 px-2 xl:text-xl 2xl:text-2xl"/>
                                <span className="ml-2 xl:text-lg 2xl:text-xl">Marcar esta orden como regalo</span>
                            </label>
                        </div>
                    </form>
                    <div>
                        <button className="border-amber-600 border-2 hover:bg-amber-600 hover:text-white text-black w-full py-2 mt-5 text-center rounded-xl xl:text-xl 2xl:text-2xl font-semibold" onClick={handleForm}>Comprar</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};