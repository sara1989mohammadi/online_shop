import React, { ReactElement, createContext, useState } from "react";
import { Product } from "../models/shop";

export interface contextType {
  products: Product[];
  amounts: Number;
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
}

// const initStateContext: contextType[] = [];
export const CartContext = createContext<contextType | null>(null);

type childrenType = {
  children: ReactElement | ReactElement[];
};

export const CartProvider = ({ children }: childrenType) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [amount, setAmount] = useState<Number>(0);

  const handlerAddItem = (item: Product): void => {
    // code to add item in cart
    let price = 0;
    const updateProductItem = product.concat(item);
    product.forEach((element) => {
      price += element.price;
    });
    setProduct(updateProductItem);
    setAmount(price);
  };
  const handlerRemoveItem = (id: string): void => {
    // code to remove item in cart
    const newProducts = product.filter((item) => item.id !== +id);
    setProduct(newProducts);
  };
  const initStateProvider: contextType = {
    products: product,
    amounts: amount,
    addItem: handlerAddItem,
    removeItem: handlerRemoveItem,
  };
  return (
    <CartContext.Provider value={initStateProvider}>
      {children}
    </CartContext.Provider>
  );
};
