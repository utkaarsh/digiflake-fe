import React, { useState } from "react";
import main_logo from "../assets/main_logo.svg";
import vector from "../assets/User_icon.png";
import LogOutModal from "./LogOutModal";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" absolute -mt-24 lg:flex lg:justify-between lg:items-center  h-28 px-4 bg-[#662671]  z-10 w-full  text-white">
      <div className="flex items-center">
        <img src={main_logo} className={` "h-28" sm:h-[2rem] `} alt="logo" />
      </div>
      <div className="profile">
        <img src={vector} className="h-[2rem]" alt="" onClick={openModal} />
        <LogOutModal isOpen={isModalOpen} onClose={closeModal}></LogOutModal>
      </div>
    </div>
  );
};

export default Header;
