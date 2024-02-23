import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../redux/userSlice";

const LogOutModal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? " inset-0   mt-32" : "hidden";
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  };
  return (
    <div className={`${modalClasses} z-10`}>
      <div className=" ">
        <Link to={"/"}>
          {" "}
          <button
            className="w-28 mt-2 px-4 py-2 bg-white  text-red-700 border border-red-700 shadow-xl rounded"
            onClick={onClose && handleLogout}
          >
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LogOutModal;
