import React from "react";
import { Card } from "./RecomendationCards";

export const Products = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product, index) => (
                <div key={index} className="w-1/4 m-2 rounded-lg transition-all duration-300">
                    <Card product={product} />
                </div>
            ))}
        </div>
    );
}