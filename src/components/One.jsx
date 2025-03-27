import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function One() {
  const [products, setProducts] = useState();
  const route = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      setProducts(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const ProductClick = (id) => {
    console.log("Product Clicked", id);
    sessionStorage.setItem("ProductId", id);
    route("/detail");
  };
  return (
    <section className="text-gray-600 body-font max-w-[1200px] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {products &&
            products.map((product) => (
              <div
                className="p-4 md:w-1/4 max-md:w-[320px] transition-all hover:scale-105"
                key={product.id}
                onClick={() => ProductClick(product.id)}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden py-4">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center max-md:h-34"
                    src={product.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {product.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-1">
                      {product.title}
                    </h1>
                    <p className="leading-relaxed mb-3 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </p>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm  py-1 ">
                        {product.price}$
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
