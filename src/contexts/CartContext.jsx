import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = (children) => {
  cosnt[(items, setItems)] = useState([]);

  const clear = () => setItems([]);

  const onAdd = (item) => 
    setItems((prev) => {
        return [...prev, item];
    });

    console.log(items);

  return (
    <CartContext.Provider value={{Items, clear, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};
