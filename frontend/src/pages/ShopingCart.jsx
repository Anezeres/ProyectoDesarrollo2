import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ProductSummary } from "../components/ProductSummary";
import { DeliveryForm } from "../components/DeliveryForm";
import { ConfirmProducts } from "../components/ConfirmProducts";
import { Footer } from "../components/Footer";
import { FooterAux } from "../components/FooterAux";

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
]

export const ShopingCart = () => {
    const [products, setProducts] = useState([]);
    const [deliveryForm, setDeliveryForm] = useState(false);

    const handleDeliveryForm = () => {
        setDeliveryForm(!deliveryForm);
    };
    
    useEffect(() => {
        setProducts(productsTest);
    },[]);

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

        //Contar cuantos productos hay en la lista product
    const countProducts = () => {
        let count = 0;
        products.forEach(product => {
            count += product.quantity;
        });
        return count;
    }

    //Contar el precio total de los productos
    const totalPrice = () => {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }

    return (
        <div className="flex flex-col overflow-x-hidden">
            <Header />
            <div className="container mx-auto overflow-x-hidden">
                <div className="flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center xl:py-2 2xl:py-4 px-7 w-1/2">
                        <div className="flex flex-col items-center">
                            <div className="xl:w-6 2xl:w-8 xl:h-6 2xl:h-8 bg-black rounded-full"></div>
                        </div>
                        <div className="flex-1 border-t-4  border-black"></div>
                        <div className="flex items-center">
                            <div className="xl:w-6 2xl:w-8 xl:h-6 2xl:h-8 bg-black rounded-full"></div>
                        </div>
                        <div className="flex-1 border-t-4 border-black"></div>
                        <div className="flex items-center">
                            <div className="xl:w-6 2xl:w-8 xl:h-6 2xl:h-8 bg-black rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-1/2 xl:px-3 2xl:px-4">
                        <p>&nbsp;Carrito</p>
                        <p>&nbsp;Identificacion</p>
                        <p>Enviado</p>
                    </div>
                </div>
                <div className="flex flex-col m-0 2xl:m-8 h-[72vh] items-center 2xl:flex-row 2xl:overflow-hidden 2xl:items-start"> 
                    <div className="flex flex-col w-2/3">
                        <ProductSummary
                            handleAddProduct={handleAddProduct}
                            handleRemoveProduct={handleRemoveProduct}
                            handleDeleteProduct={handleDeleteProduct}
                            products={products}
                        />
                    </div>
                    <div className="w-1/3 m-9 h-[55vh]">
                        {deliveryForm ? (
                            <DeliveryForm 
                                handleCancel={handleDeliveryForm}
                            />
                        ) : (
                            <ConfirmProducts 
                                product={productsTest}
                                handleForm={handleDeliveryForm}
                                countProducts={countProducts}
                                totalPrice={totalPrice}
                            />
                        )}
                    </div>
                    <FooterAux />
                </div>
            </div>
            <Footer />
        </div>
    );
};