import React, { useState } from "react";
import useProductContext from "../contexts/ProductContext";

const categories = ["All Products", "Vegetables", "Fruits", "Bread"];

export default function FruitsCart() {
  const { products, cartItems } = useProductContext();
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Categories */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-yellow-400 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Fresh and organic product
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">
                  ${item.price} / kg
                </span>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 cursor-pointer"
                  onClick={() => cartItems(item.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
