import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center py-32">
        <div className="container">
          <h2 className="text-[60px] leading-[4rem] tracking-tight w-3/5 font-semibold capitalize text-slate-800">
            Best Collection For Home Decoration
          </h2>
          <p className="mt-4 text-base leading-7 w-3/5 text-slate-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            rhoncus pellentesque id integer neque, vel accumsan dolor diam
          </p>
          <div className="mt-12">
            <a href="#" className="btn--shopnow">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
