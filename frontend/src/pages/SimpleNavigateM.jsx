import React from "react";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { RecomendationCards } from "../components/RecomendationCards";
import { Footer } from "../components/Footer";
import { DiscountSection } from "../components/Discounts";
import { Products } from "../components/Products";

const slides = [
    {
        url: "https://picsum.photos/1760/652?random=1",   
    },
    {
        url: "https://picsum.photos/1760/652?random=2", 
    },
    {
        url: "https://picsum.photos/1760/652?random=3", 
    },
    {
        url: "https://picsum.photos/1760/652?random=4", 
    },
    {
        url: "https://picsum.photos/1760/652?random=5", 
    }
];

const recomendations = [
    {
        title: "Recomendation 1",
        price: "$100",
        image: "https://picsum.photos/1760/652?random=1"
    },
    {
        title: "Recomendation 2",
        price: "$200",
        image: "https://picsum.photos/1760/652?random=2"
    },
    {
        title: "Recomendation 3",
        price: "$300",
        image: "https://picsum.photos/1760/652?random=3"
    },
    {
        title: "Recomendation 4",
        price: "$400",
        image: "https://picsum.photos/1760/652?random=4"
    },
];

const products = [
    {
        title: "Product 1",
        price: "$100",
        image: "https://picsum.photos/1760/652?random=1"
    },
    {
        title: "Product 2",
        price: "$200",
        image: "https://picsum.photos/1760/652?random=2"
    },
    {
        title: "Product 3",
        price: "$300",
        image: "https://picsum.photos/1760/652?random=3"
    },
    {
        title: "Product 4",
        price: "$400",
        image: "https://picsum.photos/1760/652?random=4"
    },
    {
        title: "Product 5",
        price: "$500",
        image: "https://picsum.photos/1760/652?random=5"
    },
    {
        title: "Product 6",
        price: "$600",
        image: "https://picsum.photos/1760/652?random=6"
    },
    {
        title: "Product 7",
        price: "$700",
        image: "https://picsum.photos/1760/652?random=7"
    },
    {
        title: "Product 8",
        price: "$800",
        image: "https://picsum.photos/1760/652?random=8"
    },
];

export const SimpleNavigateM = () => {
    return(
        <div className="w-screen overflow-x-hidden">
            <Header />
            <Slider slides={slides} />
            <div className="mt-8 mb-4 flex justify-center">
                <h1 className="text-4xl font-semibold text-black">PARA TI</h1>
            </div>
            <RecomendationCards recomendations={recomendations} />
            <div className="mt-8 mb-4 flex justify-center">
                <h1 className="text-4xl font-semibold text-black">DESCUENTOS</h1>
            </div>
            <DiscountSection />
            <div className="mt-8 mb-4 flex justify-center">
                <h1 className="text-4xl font-semibold text-black">PARA MUJERES</h1>
            </div>
            <Products products={products} />
            <Footer />
        </div>
    );
}