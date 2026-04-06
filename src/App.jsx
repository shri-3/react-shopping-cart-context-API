import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import Review from "./pages/Review";
import { AppProvider } from "./contexts/ProductContext";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <AppProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </AppProvider>
      </div>
    </>
  );
}
