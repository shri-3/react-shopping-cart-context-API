import React, { useEffect, useState } from "react";
import useProductContext from "../contexts/ProductContext";

export default function CartPage() {
  const { products, cartRemoveItems, increaseQty, decreaseQty } =
    useProductContext();

  const addOnlySelectedProducts = products.filter(
    (product) => product.isSelected,
  );
  const [cart, setCart] = useState(addOnlySelectedProducts);

  const removeItem = (id) => {
    // setCart((prev) => prev.filter((item) => item.id !== id));
    cartRemoveItems(id);
  };

  // const clearCart = () => setCart([]);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = cart.length > 0 ? 3 : 0;
  const total = subtotal + shipping;

  useEffect(() => {
    const addOnlySelectedProducts = products.filter((product) => {
      if (product.isSelected) {
        return product.isSelected;
      } else {
        return false;
      }
    });
    setCart(addOnlySelectedProducts);
  }, [products]);

  return (
    <>
      {/* Table */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <div className="grid grid-cols-6 font-semibold text-gray-700 mb-4">
          <span>Products</span>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Handle</span>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center py-4 border-t"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-8 h-8 bg-gray-200 rounded-full"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="w-8 h-8 bg-gray-200 rounded-full"
              >
                +
              </button>
            </div>

            <span>${(item.price * item.quantity).toFixed(2)}</span>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 text-xl"
            >
              ✕
            </button>
          </div>
        ))}
        {cart.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <span className="text-2xl">🛒</span> Your cart is currently empty.
            Please add some products.
          </div>
        )}
      </div>

      {/* Cart Total */}
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold mb-6">Cart Total</h2>

        <div className="flex justify-between mb-3">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="border-t my-4"></div>

        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full bg-yellow-400 text-white py-3 rounded-full font-semibold hover:bg-yellow-500">
          PROCEED CHECKOUT
        </button>
      </div>
    </>
  );
}
