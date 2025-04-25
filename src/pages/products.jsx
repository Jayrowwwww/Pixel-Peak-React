import { useState } from 'react';
import Products from '../components/products.js';

export default function ProductCards() {
  const [message, setMessage] = useState();

  const handleClick = (productName) => {
    setMessage(`✔ ${productName} added to cart!`);
    setTimeout(() => setMessage(null), 3000); // Hide message after 3 sec
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-6 mt-10">
      {Products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:ring-1 hover:ring-sky-500 transition-shadow duration-100"
        >
          <a href={product.link}>
            <div className="p-6 flex justify-center">
              <img
                src={product.image}
                alt={product.alt}
                className="h-48 object-contain"
              />
            </div>

            <div className="px-6 pb-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg text-[#3B82F6] font-bold mb-4">
                {product.price}
              </p>
            </div>
          </a>

          <div className="px-6 pb-6">
            <button
              className="w-full bg-[#38BDF8] text-white py-2 rounded-lg hover:bg-[#3B82F6] transition-colors cursor-pointer"
              onClick={() => handleClick(product.name)}
            >
              Add to Cart
            </button>

            {message && (
              <p className="mt-4 text-green-600 text-sm font-medium">{message}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
