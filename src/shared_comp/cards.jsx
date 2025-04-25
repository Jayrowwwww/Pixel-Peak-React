import React from 'react';
import Product_cards from './products.js';

export default function Cards(){

    return (
        <div className="flex flex-col justify-center p-10 h-[80vh]">
            <h1 className='text-left ml-16 text-5xl font-semibold font-[Montserrat] text-gray-800'>Featured Products</h1>
            <div className="flex justify-center items-center gap-6 mt-10">
                {Product_cards.slice(0, 5).map(product => (
                    <a href={product.link} key={product.id}>
                    <div className="flex">
                        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg w-80 hover:ring-1 hover:ring-sky-400 hover:scale-102  duration-300 ease-out">
                            <div className="rounded-3xl bg-[#38BDF8] p-4 mb-4 flex justify-center">
                                <img
                                src={product.image}
                                alt={product.name}
                                className="h-60 object-contain"
                                />
                            </div>

                            <h2 className="text-xl font-semibold text-[#0F172A]">{product.name}</h2>
                            <p className="text-lg my-2 text-[#1E293B]">{product.price}</p>
                            <span className="text-[#3B82F6] underline">See more</span>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    );
};