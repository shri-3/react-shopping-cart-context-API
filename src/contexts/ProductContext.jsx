import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

const useProductContext = () => useContext(ProductContext);
export default useProductContext;

const productsList = [
  {
    id: 1,
    name: "Grapes",
    category: "Fruits",
    price: 4.19,
    image: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg",
    isSelected: false,
  },
  {
    id: 2,
    name: "Raspberries",
    category: "Fruits",
    price: 6.99,
    image: "https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg",
    isSelected: false,
  },
  {
    id: 3,
    name: "Apple",
    category: "Fruits",
    price: 2.59,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    isSelected: false,
  },
  {
    id: 4,
    name: "Banana",
    category: "Fruits",
    price: 2.28,
    image: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg",
    isSelected: false,
  },
  {
    id: 5,
    name: "Bread",
    category: "Bread",
    price: 1.88,
    image: "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg",
    isSelected: false,
  },
  {
    id: 6,
    name: "Mango", // replaced Meat
    category: "Fruits",
    price: 6.99,
    image: "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg",
    isSelected: false,
  },
  {
    id: 7,
    name: "Broccoli",
    category: "Vegetables",
    price: 5.99,
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
    isSelected: false,
  },
  {
    id: 8,
    name: "Tomato",
    category: "Vegetables",
    price: 1.99,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    isSelected: false,
  },
];

export function AppProvider({ children }) {
  const [productItems, setproductItems] = useState(productsList);

  function cartItems(proId) {
    const updatedReviewItems = productItems.map((productItem) => {
      if (productItem.id !== proId) {
        return productItem;
      }
      return {
        ...productItem,
        isSelected: true,
        quantity: 1,
      };
    });
    setproductItems(updatedReviewItems);
  }

  function cartRemoveItems(proId) {
    const updatedReviewItems = productItems.map((productItem) => {
      if (productItem.id !== proId) {
        return productItem;
      }
      return {
        ...productItem,
        isSelected: !productItem.isSelected,
      };
    });
    setproductItems(updatedReviewItems);
  }

  function clearCart() {
    const updatedReviewItems = productItems.map((productItem) => {
      return {
        ...productItem,
        isSelected: false,
      };
    });

    setproductItems(updatedReviewItems);
  }
  const increaseQty = (id) => {
    setproductItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQty = (id) => {
    setproductItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products: productItems,
        cartItems,
        cartRemoveItems,
        clearCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
