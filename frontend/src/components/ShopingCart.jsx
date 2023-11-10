import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const productsTest = [
    {
        id: 1,
        name: "Producto 1",
        description: "Lorem ipsum dolor sit ame",
        price: 100,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        name: "Producto 2",
        description: "Lorem ipsum dolor sit ame",
        price: 200,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        name: "Producto 3",
        description: "Lorem ipsum dolor sit ame",
        price: 300,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 4,
        name: "Producto 4",
        description: "Lorem ipsum dolor sit ame",
        price: 400,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 5,
        name: "Producto 5",
        description: "Lorem ipsum dolor sit ame",
        price: 500,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 6,
        name: "Producto 6",
        description: "Lorem ipsum dolor sit ame",
        price: 600,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 7,
        name: "Producto 7",
        description: "Lorem ipsum dolor sit ame",
        price: 700,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 8,
        name: "Producto 8",
        description: "Lorem ipsum dolor sit ame",
        price: 800,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 9,
        name: "Producto 9",
        description: "Lorem ipsum dolor sit ame",
        price: 900,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 10,
        name: "Producto 10",
        description: "Lorem ipsum dolor sit ame",
        price: 1000,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 11,
        name: "Producto 11",
        description: "Lorem ipsum dolor sit ame",
        price: 1100,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
    {
        id: 12,
        name: "Producto 12",
        description: "Lorem ipsum dolor sit ame",
        price: 1200,
        quantity: 1,
        image: "https://picsum.photos/200/300"
    },
]


export const ShopingCart = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(productsTest);
        console.log(products);
    },[])

    const handleAddProduct = (index) => {
        const newProducts = [...products];
        newProducts[index].quantity++;
        setProducts(newProducts);
    }

    const handleRemoveProduct = (index) => {
        const newProducts = [...products];
        if (newProducts[index].quantity > 0) {
            newProducts[index].quantity--;
        }
        setProducts(newProducts);
    }

    const handleDeleteProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    }

    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center py-4 px-7 w-1/2">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div>
                        <div className="flex-1 border-t-4  border-black"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div>
                        <div className="flex-1 border-t-4 border-black"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-1/2 px-4">
                        <p>&nbsp;Carrito</p>
                        <p>&nbsp;Identificacion</p>
                        <p>Enviado</p>
                    </div>
                </div>
                <div className="flex m-8 h-[60vh]">
                    <div className="flex flex-col w-2/3">
                        <div className="flex text-3xl font-semibold justify-between ml-5 mr-10">
                            <h2 className="w-2/3">Productos</h2>
                            <h2>Cantidad</h2>
                            <h2>Total</h2>
                        </div>
                        <hr className="border-t-2 border-black" />
                        <div className="overflow-y-scroll flex flex-col h-full">
                            {products.map((product, index) => (
                                <div className="flex justify-between items-center m-5" key={index}>
                                    <div className="flex w-2/3 h-100">
                                        <img src={product.image} alt={product.name} className="w-40 h-40 rounded-xl" />
                                        <div className="flex flex-col justify-between h-full">
                                            <h2 className="ml-5 font-semibold text-2xl mb-4">{product.name}</h2>
                                            <p className="ml-5 text-lg mb-4">{product.description}</p>
                                            <h3 className="ml-5 text-3xl font-semibold">${product.price}</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mx-2 hover:cursor-pointer" onClick={() => handleDeleteProduct(index)}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:cursor-pointer" onClick={() => handleRemoveProduct(index)}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="flex justify-center items-center bg-white text-black w-10 border-2 border-black rounded-lg mx-2">
                                                <h2>{product.quantity}</h2>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:cursor-pointer" onClick={() => handleAddProduct(index)}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center mr-4 w-[40px]">
                                        <h2 className="text-2xl font-semibold">${product.price * product.quantity}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 m-9">
                        <div className="flex flex-col justify-center items-center border-2 p-12  border-black rounded-xl">
                            <h2 className="text-4xl text-black font-semibold mb-4">Entrega</h2>
                            <form action="#" className="w-full max-w-xl">
                                <div className="mt-5 space-x-3 flex">
                                    <input type="text" placeholder="Nombre" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                    <input type="text" placeholder="Apellido" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                </div>
                                <div className="mt-5">
                                    <input type="text" placeholder="Dirección" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                </div>
                                <div className="mt-5 space-x-3 flex">
                                    <input type="text" placeholder="Ciudad" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                    <input type="text" placeholder="Departamento" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                </div>
                                <div className="mt-5">
                                    <input type="text" placeholder="Codigo Postal" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                </div>
                                <div className="mt-5">
                                    <input type="tel" placeholder="Telefono" pattern="[0-9]{10}" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                </div>
                                <div className="mt-5">
                                    <input type="email" placeholder="Correo Electronico" className="border border-gray-600 py-2 px-2 w-full text-2xl"/>
                                </div>
                                <div className="mt-5">
                                    <button className="bg-white text-black w-full py-2 mt-5 text-center rounded-xl text-2xl font-semibold border-2 border-gray-600 hover:bg-black hover:text-white transition-all duration-200">Enviar</button>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};