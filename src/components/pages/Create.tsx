import { FormEvent, LegacyRef, useRef, useState } from "react";
import { createProduct } from "../../api/Api";
import { Product } from "../../models/shop";
type propsType = {
  updateProduct: () => void;
};
const Create = ({ updateProduct }: propsType) => {
  const [base64Img, setBase64Img] = useState<string>();
  const name: LegacyRef<HTMLInputElement> = useRef(null);
  const description: LegacyRef<HTMLInputElement> = useRef(null);
  const price: LegacyRef<HTMLInputElement> = useRef(null);
  const image: LegacyRef<HTMLInputElement> = useRef(null);

  function getBase64(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setBase64Img(reader.result?.toString());
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handlerCreateProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let product: Product = {
      id: 0,
      name: name.current?.value!,
      description: description.current?.value!,
      price: +price.current?.value!,
      image: base64Img!,
    };

    await createProduct(product);
    updateProduct();
    name.current!.value = "";
    description.current!.value = "";
    price.current!.value = "";
    image.current!.value = "";
  };

  return (
    <form onSubmit={handlerCreateProduct} className="form">
      <div className="formGroup">
        <div className="inputgrop">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={name} />
        </div>

        <div className="inputgrop">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={description} />
        </div>

        <div className="inputgrop">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" ref={price} />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" ref={image} onChange={getBase64} />
        </div>
      </div>
      <button>Save</button>
    </form>
  );
};

export default Create;
