import { useFormik } from "formik";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import background from "../assets/Background_login.png";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 2) {
      errors.name = "Must be 2 characters or more";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
        values.password
      )
    ) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogin = (values) => {
    const { email, password } = values;

    console.log("Values:", email, password);
    navigate("/dashboard");
    dispatch(
      addUsers({
        email: email,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <div className="flex p-4  m-4 ml-16">
      <div className="absolute">
        <img
          src={background}
          className=" h-screen object-cover "
          alt="bg-img"
        />
      </div>
      <div className=" ">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="  absolute my-12 min-h-[85%] sm:h-auto sm:min-h-[35rem] bg-white g-wh border rounded-lg w-full sm:w-6/12 lg:w-4/12 shadow-2xl  p-12 "
        >
          <img src={logo} className="h-24" alt="" />

          <h1 className="text-[#717070] font-semibold mb-12">
            Welcome to Digiflake
          </h1>
          <label
            htmlFor="email"
            className="-mb-[2rem] text-gray-400 ml-4 absolute bg-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className=" p-4 m-2 w-full border"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-800">{formik.errors.email}</div>
          ) : null}

          <div className="flex items-center w-full  ml-2 my-2">
            <label
              htmlFor="email"
              className="-mt-[3.5rem] text-gray-400 ml-2 absolute bg-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className=" p-4 border  w-full"
            />

            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-12 flex items-center pr-3 "
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          {!isSignIn && formik.touched.password && formik.errors.password ? (
            <div className="text-red-800">{formik.errors.password}</div>
          ) : null}

          {errorMessage && (
            <p className="py-2 mx-2 text-red-800 font-bold">{errorMessage}</p>
          )}

          <p
            className="cursor-pointer p-0 m-2 text-sm sm:text-md font-medium text-gray-300 "
            onClick={() => toggleSignIn()}
          >
            Forgot Password?
          </p>
          <button
            disabled={!formik.touched.email || !formik.touched.password}
            className="p-4 m-2 bg-[#5C218B] w-full rounded-lg font-bold transform active:scale-75 transition-transform"
            // className="shadow-lg filter-btn m-4 p-4 rounded-lg h-8 flex items-center border bg-gray-100 "

            type="submit"
            onClick={() => handleLogin(formik.values)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
