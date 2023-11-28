import React from "react";

const discounts = [
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
];

export const DiscountSection = () => {
    return(
        <div className="flex m-2">
            <div className="w-1/2 m-2 rounded-lg transition-all duration-300">
                <img src={discounts[0].url} alt="main discount" className="w-full h-full rounded-lg" />
            </div>
            <div className="flex w-1/2 m-2">
                <div className="space-y-2 flex flex-col mr-2">
                    <img src={discounts[1].url} alt="discount 1" className="h-1/2 w-full rounded-lg" />
                    <img src={discounts[2].url} alt="discount 2" className="h-1/2 w-full rounded-lg" />
                </div>
                <div className="ml-2">
                    <img src={discounts[3].url} alt="discount 3" className="h-full rounded-lg" />
                </div>
            </div>
        </div>
    );
}