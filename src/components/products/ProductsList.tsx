import React from "react";

const ProductsList = () => {
  return (
    <div>
      <section className="products-list container py-16">
        <h2 className="heading__2">RECOMENDED FOR YOU</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="rounded bg-white shadow-lg overflow-hidden group">
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
                src="./images/products/product2.jpg"
                className="w-full h-full object-contain"
                alt="product2"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                PELAGIA Lounge
              </a>
              <p className="text-[15px] text-[#464545] my-2">
                Outdoor Modular Lounge
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
            <div className="images relative overflow-hidden">
              <div className="absolute z-20 top-4 right-4 bg-white text-primary-color w-[36px] h-[36px] flex items-center justify-center rounded-full cursor-pointer">
                <i className="fa-regular fa-heart text-xl"></i>
              </div>
              <div className="absolute z-20 cursor-pointer -bottom-[20%] left-0 right-0 bg-black bg-opacity-70 text-center text-white capitalize text-base py-2 group-hover:bottom-0">
                <i className="fa-regular fa-eye text-[15px] mr-1"></i>
                Quick view
              </div>
              <div className="overview-shape absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40"></div>
              <img
                src="./images/products/product3.jpg"
                className="w-full h-full object-contain"
                alt="product3"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                AVERY bed
              </a>
              <p className="text-[15px] text-[#464545] my-2">Queen Bed</p>
              <p className="text-primary-color font-bold text-xl">$549.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
            <div className="images relative overflow-hidden">
              <div className="absolute z-20 top-4 right-4 bg-white text-primary-color w-[36px] h-[36px] flex items-center justify-center rounded-full cursor-pointer">
                <i className="fa-regular fa-heart text-xl"></i>
              </div>
              <div className="absolute z-20 cursor-pointer -bottom-[20%] left-0 right-0 bg-black bg-opacity-70 text-center text-white capitalize text-base py-2 group-hover:bottom-0">
                <i className="fa-regular fa-eye text-[15px] mr-1"></i>
                Quick view
              </div>
              <div className="overview-shape absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40"></div>
              <img
                src="./images/products/product4.jpg"
                className="w-full h-full object-contain"
                alt="product4"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                white bed
              </a>
              <p className="text-[15px] text-[#464545] my-2">King Bed</p>
              <p className="text-primary-color font-bold text-xl">$699.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
            <div className="images relative overflow-hidden">
              <div className="absolute z-20 top-4 left-4 bg-green-600 text-white py-1 px-2 rounded text-[15px]">
                25%
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
                src="./images/products/product9.jpg"
                className="w-full h-full object-contain"
                alt="product9"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                GUYER Chair
              </a>
              <p className="text-[15px] text-[#464545] my-2">Queen Headboard</p>
              <p className="text-primary-color font-bold text-xl">$45.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
            <div className="images relative overflow-hidden">
              <div className="absolute z-20 top-4 right-4 bg-white text-primary-color w-[36px] h-[36px] flex items-center justify-center rounded-full cursor-pointer">
                <i className="fa-regular fa-heart text-xl"></i>
              </div>
              <div className="absolute z-20 cursor-pointer -bottom-[20%] left-0 right-0 bg-black bg-opacity-70 text-center text-white capitalize text-base py-2 group-hover:bottom-0">
                <i className="fa-regular fa-eye text-[15px] mr-1"></i>
                Quick view
              </div>
              <div className="overview-shape absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40"></div>
              <img
                src="./images/products/product1.jpg"
                className="w-full h-full object-contain"
                alt="product1"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                MADELINE sofa
              </a>
              <p className="text-[15px] text-[#464545] my-2">Fabric Sofa Bed</p>
              <p className="text-primary-color font-bold text-xl">$120.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
            <div className="images relative overflow-hidden">
              <div className="absolute z-20 top-4 left-4 bg-red-600 text-white py-1 px-2 rounded text-[14px]">
                HOT
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
                src="./images/products/product8.jpg"
                className="w-full h-full object-contain"
                alt="product8"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                BIANCO Chair
              </a>
              <p className="text-[15px] text-[#464545] my-2">
                Fabric Accent Chair
              </p>
              <p className="text-primary-color font-bold text-xl">$45.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
            <div className="images relative overflow-hidden">
              <div className="absolute z-20 top-4 right-4 bg-white text-primary-color w-[36px] h-[36px] flex items-center justify-center rounded-full cursor-pointer">
                <i className="fa-regular fa-heart text-xl"></i>
              </div>
              <div className="absolute z-20 cursor-pointer -bottom-[20%] left-0 right-0 bg-black bg-opacity-70 text-center text-white capitalize text-base py-2 group-hover:bottom-0">
                <i className="fa-regular fa-eye text-[15px] mr-1"></i>
                Quick view
              </div>
              <div className="overview-shape absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40"></div>
              <img
                src="./images/products/product10.jpg"
                className="w-full h-full object-contain"
                alt="product10"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                PELAGIA Lounge
              </a>
              <p className="text-[15px] text-[#464545] my-2">
                Outdoor Modular Lounge
              </p>
              <p className="text-primary-color font-bold text-xl">$59.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
          <div className="rounded bg-white shadow-lg overflow-hidden group">
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
                src="./images/products/product12.jpg"
                className="w-full h-full object-contain"
                alt="product12"
              />
            </div>
            <div className="info p-4">
              <a
                href="#"
                className="uppercase text-lg leading-6 font-semibold text-gray-800 font-roboto hover:text-primary-color">
                Black ARCHIE
              </a>
              <p className="text-[15px] text-[#464545] my-2">Black Bedside</p>
              <p className="text-primary-color font-bold text-xl">$159.00</p>
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
            <button className="btn--addCart rounded-tr-none rounded-tl-none">
              <i className="fa-solid fa-cart-shopping text-[14px]"></i>
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
