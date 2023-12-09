import React, { useEffect, useState } from "react";

export const ProductSummary = ({ handleAddProduct, handleRemoveProduct, handleDeleteProduct, products }) => {
    return (
        <div className="mt-5">
            <div className="flex text-3xl font-semibold justify-between ml-5 mr-10">
                <h2 className="w-2/3">Productos</h2>
                <h2 >Cantidad</h2>
                <h2>Total</h2>
            </div>
            <hr className="border-t-2 border-black" />
            <div className="overflow-y-scroll flex flex-col h-[50vh] 2xl:h-[65vh]">
                {products.map((product, index) => (
                    <div className="flex justify-between items-center m-5" key={index}>
                        <div className="flex w-2/3 h-100">
                            <img src={product.image} alt={product.name} className="xl:w-28 2xl:w-40 xl:h-28 2xl:h-40 rounded-xl" />
                            <div className="flex flex-col justify-between h-full">
                                <h2 className="xl:ml-3 2xl:ml-5 font-semibold xl:text-xl 2xl:text-2xl xl:mb-3 2xl:mb-4">{product.name}</h2>
                                <p className="xl:ml-3 2xl:ml-5 xl:text-base 2xl:text-lg xl:mb-3 2xl:mb-4">{product.description}</p>
                                <h3 className="xl:ml-3 2xl:ml-5 xl:text-2xl 2xl:text-3xl font-semibold">${product.price}</h3>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-6 2xl:w-7 xl:h-6 2xl:h-7 mx-2 hover:cursor-pointer" onClick={() => handleDeleteProduct(index)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-6 2xl:w-7 xl:h-6 2xl:h-7 hover:cursor-pointer" onClick={() => handleRemoveProduct(index)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="flex justify-center items-center bg-white text-black xl:w-8 2xl:w-10 border-2 border-black rounded-lg xl:mx-1 2xl:mx-2">
                                    <h2 className="xl:text-sm 2xl:text-base">{product.quantity}</h2>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-6 2xl:w-7 xl:h-6 2xl:h-7 hover:cursor-pointer" onClick={() => handleAddProduct(index)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mr-4 w-[40px]">
                            <h2 className="xl:text-xl 2xl:text-2xl font-semibold">${product.price * product.quantity}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}