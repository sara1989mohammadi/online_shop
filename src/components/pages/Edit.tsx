import React, {
  FormEvent,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Product } from "../../models/shop";
import { updateProduct as editProduct } from "../../api/Api";

type propsType = {
  selectProduct: Product;
  updateProduct: () => void;
};

const Edit = ({ selectProduct, updateProduct }: propsType) => {
  const [product, setProduct] = useState(selectProduct);

  const handlerCreateProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editProduct(product.id, product);
    updateProduct();
    product.name = "";
    product.description = "";
    product.price = 0;
  };
  return (
    <form onSubmit={handlerCreateProduct} className="form">
      <div className="formGroup">
        <div className="inputgrop">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={(e) =>
              setProduct((oldPoduct) => {
                return { ...oldPoduct, name: e.target.value };
              })
            }
          />
        </div>

        <div className="inputgrop">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={product.description}
            onChange={(e) =>
              setProduct((oldPoduct) => {
                return { ...oldPoduct, description: e.target.value };
              })
            }
          />
        </div>

        <div className="inputgrop">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={product.price}
            onChange={(e) =>
              setProduct((oldPoduct) => {
                return { ...oldPoduct, price: +e.target.value };
              })
            }
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" />
        </div>
      </div>
      <button>Edit</button>
    </form>
  );
};

export default Edit;
