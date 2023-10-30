import React from "react";

const Features = () => {
  return (
    <div>
      {" "}
      <section className="container py-16">
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-6 justify-center">
          <div className="flex items-center justify-center gap-x-5 border border-primary-color py-5 px-9 rounded">
            <img
              src="./images/svg-icons/delivery-van.svg"
              className="w-12 h-12 object-contain"
              alt="Images Features 1"
            />
            <div>
              <h4 className="text-[18px] font-semibold font-roboto text-gray-900">
                Free shipping
              </h4>
              <p className="text-[13px] font-medium font-roboto text-slate-600">
                Orders over $200
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-5 border border-primary-color py-5 px-9 rounded">
            <img
              src="./images/svg-icons/money-back.svg"
              className="w-12 h-12 object-contain"
              alt="Images Features 2"
            />
            <div>
              <h4 className="text-[18px] font-semibold font-roboto text-gray-900">
                Money Returns
              </h4>
              <p className="text-[13px] font-medium font-roboto text-slate-600">
                30 Days money return
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-5 border border-primary-color py-5 px-9 rounded">
            <img
              src="./images/svg-icons/service-hours.svg"
              className="w-12 h-12 object-contain"
              alt="Images Features 3"
            />
            <div>
              <h4 className="text-[18px] font-semibold font-roboto text-gray-900">
                24/7 Support
              </h4>
              <p className="text-[13px] font-medium font-roboto text-slate-600">
                Customer support
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-7 mt-14">
          <div className="flex items-center justify-between bg-[#FBE3E4] rounded-sm py-6 px-9">
            <div className="info">
              <p className="text-lg text-primary-color font-semibold italic">
                30% offer
              </p>
              <h4 className="text-2xl font-semibold font-roboto">
                Free Shipping
              </h4>
              <p className="text-[15px] text-[#464545] font-roboto-mono mb-5">
                Attractive Natural Furniture
              </p>
              <button className="btn--shopnow py-2.5 px-4 font-semibold text-[15px]">
                Shop now
              </button>
            </div>
            <div className="images">
              <img
                src="./images/products/sofa-1.png"
                className="w-[200px] h-[180px] object-contain"
                alt="Images Features 1"
              />
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#EDECEC] rounded-sm py-6 px-9">
            <div className="info">
              <p className="text-lg text-primary-color font-semibold italic">
                50% offer
              </p>
              <h4 className="text-2xl font-semibold font-roboto">Flash Sale</h4>
              <p className="text-[15px] text-[#464545] font-roboto-mono mb-5">
                Attractive Natural Furniture
              </p>
              <button className="btn--shopnow py-2.5 px-4 font-semibold text-[15px]">
                Shop now
              </button>
            </div>
            <div className="images">
              <img
                src="./images/products/sofa-2.png"
                className="w-[200px] h-[180px] object-contain"
                alt="Images Features 2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
