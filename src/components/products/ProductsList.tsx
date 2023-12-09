import React, { useContext, useEffect } from "react";
import { getProductAll } from "../../api/Api";
import { Product } from "../../models/shop";
import { CartContext } from "../../store/CartProvider";

const ProductsList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const ctx = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await getProductAll());
    };
    getProducts();
  }, []);
  const addItemToCart = (product: Product) => {
    ctx?.addItem(product);
  };

  return (
    <div>
      <section className="products-list container py-16">
        <h2 className="heading__2">RECOMENDED FOR YOU</h2>
        <div className="grid grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              className="rounded bg-white shadow-lg overflow-hidden group"
              key={product.id}>
              <div className="images relative overflow-hidden">
                <div className="absolute z-20 top-4 left-4 bg-yellow-500 text-white py-1 px-2 rounded text-[15px]">
                  50%
                </div>
                <div className="absolute z-20 top-4 right-4 bg-white text-primary-color w-[36px] h-[36px] flex items-center justify-center rounded-full cursor-pointer">
                  <i className="fa-regular fa-heart text-xl"></i>
                </div>
                <div className="absolute z-20 cursor-pointer -bottom-[20%] left-0 right-0 bg-black bg-opacity-70 text-center text-white capitalize text-base py-2 group-hover:bottom-0">
                  <i className="fa-regular fa-eye text-[15px] mr-1"></i>
                  Quick view
                </div>
                <div className="overview-shape absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40"></div>
                <img
                  src={product.image}
                  className="w-full h-full object-contain"
                  alt="product2"
                />
              </div>
              <div className="info p-4">
                <a
                  href="#"
                  className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                  {product.name}
                </a>
                <p className="text-[15px] text-[#464545] my-2">
                  {[product.description]}
                </p>
                <p className="text-primary-color font-bold text-xl">$499.00</p>
                <div className="rating mt-1.5 text-yellow-500 text-[15px] space-x-0.5">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <span className=" text-[#464545] text-lg italic font-roboto-mono inline-block pl-2">
                    (150)
                  </span>
                </div>
              </div>
              <button
                className="btn--addCart rounded-tr-none rounded-tl-none"
                onClick={() => addItemToCart(product)}>
                <i className="fa-solid fa-cart-shopping text-[14px]"></i>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
