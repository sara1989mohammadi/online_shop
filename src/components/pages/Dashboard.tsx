import React, {
  ChangeEventHandler,
  FormEvent,
  InputHTMLAttributes,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { create } from "domain";
import Create from "./Create";
import List from "./List";
import "./Dashboard.css";
import { getProductAll } from "../../api/Api";
import { Product } from "../../models/shop";

import Edit from "./Edit";
const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>();
  const [selectProduct, setSelectProduct] = useState<Product>();
  useEffect(() => {
    getProductAll().then((item) => {
      setProducts(item);
    });
  }, []);
  const updateProduct = () => {
    getProductAll().then((item) => {
      setProducts(item);
      console.log(item);
    });
  };
  const selectedProduct = (product: Product) => {
    setSelectProduct(product);
  };

  const content = selectProduct ? (
    <Edit selectProduct={selectProduct} updateProduct={updateProduct} />
  ) : (
    <Create updateProduct={updateProduct} />
  );
  return (
    <>
      {content}
      <List
        productsItem={products}
        updateProduct={updateProduct}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default Dashboard;
