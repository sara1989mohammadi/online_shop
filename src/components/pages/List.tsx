import React, { useEffect } from "react";
import { getProductAll, deleteProduct } from "../../api/Api";
import { Product } from "../../models/shop";

type propsType = {
  productsItem: Array<Product> | undefined;
  updateProduct: () => void;
  selectedProduct: (product: Product) => void;
};
const List = ({ productsItem, updateProduct, selectedProduct }: propsType) => {
  const removeProduct = async (id: number): Promise<void> => {
    await deleteProduct(id);
    updateProduct();
  };
  const editProduct = (item: Product) => {
    selectedProduct(item);
  };
  return (
    <div>
      <h3>List Products</h3>
      <table>
        <tr>
          <th>name</th>
          <th>description</th>
          <th>Image</th>
          <th></th>
        </tr>
        {productsItem?.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <img src={item.image} className="img" />
            </td>
            <td>
              <button className="btn" onClick={() => editProduct(item)}>
                Edit
              </button>
              <button className="btn" onClick={() => removeProduct(item.id)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default List;
