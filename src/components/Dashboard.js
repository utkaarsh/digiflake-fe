import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../redux/userSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  //   const user = useSelector(selectCurrentUser);
  //   const token = useSelector(selectCurrentToken);

  //   const tokenAbbr = `${token.slice(0, 9)}...`;
  //   console.log("TOKEN", tokenAbbr);
  return (
    <div>
      <div className="grid grid-flow-col mt-24 p-4">
        <div className="grid grid-flow-col">
          <div className="col-span-1 ">
            <Sidebar />
          </div>
          <div className="col-span-11    ">
            <div className="dashboard flex justify-center ">
              <div>
                <img src={logo} className="h-44 mt-24 my-2" alt="" />
                <h1 className="text-black font-semibold ml-24">
                  Welcome to Digiflake
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
