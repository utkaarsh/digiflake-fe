import React from "react";
import home_icon from "../assets/home-icon.png";
import product_icon from "../assets/products-icon.png";
import category_icon from "../assets/category-icon.png";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-5 -ml-6  w-48 bg-[#F4F4F4] fixed h-full ">
        <ul>
          <li
            className=" flex my-6"
            onClick={() => navigate("/dashboard")}
            role="button"
          >
            <img src={home_icon} className="h-6 mr-2" alt="" />
            <h1>Home</h1>
          </li>
          <li
            className=" flex my-6"
            onClick={() => navigate("/category")}
            role="button"
          >
            <img src={category_icon} className="h-6 mr-2" alt="" />
            <h1>Category</h1>
          </li>
          <li
            className=" flex my-6"
            onClick={() => navigate("/product")}
            role="button"
          >
            <img src={product_icon} className="h-6 mr-2" alt="" />
            <h1>Product</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
