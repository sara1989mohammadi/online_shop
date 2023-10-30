import React from "react";

const Categories = () => {
  return (
    <div>
      {" "}
      <section className="categories container pt-4">
        <h2 className="heading__2">Shop by categories</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <img src="./images/products/category-1.jpg" alt="Categoy Image 1" />
            <a href="#" className="link__categories">
              <h5>Bedroom</h5>
              <i className="fa-solid fa-arrow-right-long text-base ml-0.5 mt-1 opacity-0 group-hover:opacity-100"></i>
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="./images/products/category-2.jpg" alt="Categoy Image 2" />
            <a href="#" className="link__categories">
              <h5>Mattresses</h5>
              <i className="fa-solid fa-arrow-right-long text-base ml-0.5 mt-1 opacity-0 group-hover:opacity-100"></i>
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="./images/products/category-3.jpg" alt="Categoy Image 3" />
            <a href="#" className="link__categories">
              <h5>Office</h5>
              <i className="fa-solid fa-arrow-right-long text-base ml-0.5 mt-1 opacity-0 group-hover:opacity-100"></i>
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="./images/products/category-4.jpg" alt="Categoy Image 4" />
            <a href="#" className="link__categories">
              <h5>Out door</h5>
              <i className="fa-solid fa-arrow-right-long text-base ml-0.5 mt-1 opacity-0 group-hover:opacity-100"></i>
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="./images/products/category-5.jpg" alt="Categoy Image 5" />
            <a href="#" className="link__categories">
              <h5>Lounges & Sofas</h5>
              <i className="fa-solid fa-arrow-right-long text-base ml-0.5 mt-1 opacity-0 group-hover:opacity-100"></i>
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src="./images/products/category-6.jpg" alt="Categoy Image 6" />
            <a href="#" className="link__categories">
              <h5>Living & Dining</h5>
              <i className="fa-solid fa-arrow-right-long text-base ml-0.5 mt-1 opacity-0 group-hover:opacity-100"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
