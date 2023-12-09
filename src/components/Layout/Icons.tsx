import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

const Icons = () => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-center relative hover:text-primary-color">
          <i className="fa-regular fa-heart text-[26px]"></i>
          <div className="text-[14px] font-semibold font-roboto-mono leading-6">
            Whist list
          </div>
          <span className="absolute -top-2 right-4 w-5 h-5 rounded-full text-[13px] flex items-center justify-center bg-primary-color text-white">
            6
          </span>
        </a>
        <a href="#" className="text-center relative hover:text-primary-color">
          <i className="fa-solid fa-basket-shopping text-[26px]"></i>
          <div className="text-[14px] font-semibold font-roboto-mono leading-6">
            Cart
          </div>
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[13px] flex items-center justify-center bg-primary-color text-white">
            {ctx?.products.length}
          </span>
        </a>
        <a href="#" className="text-center relative hover:text-primary-color">
          <i className="fa-regular fa-user text-[26px]"></i>
          <div className="text-[14px] font-semibold font-roboto-mono leading-6">
            Account
          </div>
        </a>
      </div>
    </div>
  );
};

export default Icons;
