import React from "react";

const Products = () => {
  return (
    <section className="sec3 max-w-[80%] md:py-9 border-t-4 border-b-4 border-gray-500 flex flex-col py-8  gap-5 items-center justify-center text-black">
      <h1 className="text-2xl whitespace-nowrap capitalize">
        featured products
      </h1>
      <div className="card-container grid grid-cols-1 md:grid-cols-3 ">
        <div className="card px-3 py-2 flex flex-col items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1634449277780-81ab99e85416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="name">Air & linen fresh</div>
          <div className="price">7.7$</div>
        </div>
        <div className="card px-3 py-2 flex flex-col items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1608571702600-5a5419d31475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="name">Air & linen fresh</div>
          <div className="price">7.7$</div>
        </div>
        <div className="card px-3 py-2 flex flex-col items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1634449277780-81ab99e85416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="name">Air & linen fresh</div>
          <div className="price">7.7$</div>
        </div>
      </div>
      <button className="border-2 border-gray-400 bg-transparent px-2 py-1 ">
        shop all
      </button>
    </section>
  );
};

export default Products;
