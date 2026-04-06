import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import useProductContext from "../contexts/ProductContext";

export function Navbar() {
  const { products, clearCart } = useProductContext();
  const totalItems = products.filter((p) => p.isSelected).length;
  const location = useLocation();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-green-600">
        <Link to="/">FruitsCart</Link>
      </h1>
      {"/cart" !== location.pathname && (
        <div className="relative flex gap-4 text-green-600">
          <span className="text-2xl cursor-pointer">
            <Link to="/cart">🛒</Link>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </span>
        </div>
      )}
      {"/cart" === location.pathname && (
        <button
          onClick={clearCart}
          className="bg-red-100 text-red-500 px-4 py-2 rounded-full shadow cursor-pointer"
        >
          🗑 Clear Cart
        </button>
      )}
    </div>
  );
}
