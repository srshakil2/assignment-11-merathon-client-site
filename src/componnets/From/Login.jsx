import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const { singinhhandel } = useContext(MyMainContext);
  const { handelGoogleLogIn } = useContext(MyMainContext);

  const handelGoogle = () => {
    handelGoogleLogIn().then((res) => {
      navigate("/");
    });
  };

  const handelSingin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    singinhhandel(email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        // toast.error("sorry your info is not valid");
      });
  };
  return (
    <div className="hero">
      <Helmet>
        <title>Marathon || LogIn</title>
      </Helmet>
      <div className=" flex-col lg:flex-row-reverse w-10/12 md:w-4/12 min-h-screen mt-10">
        <div className="card bg-base-100  shadow-2xl">
          <form className="card-body" onSubmit={handelSingin}>
            <button onClick={handelGoogle} className="btn bg-orange-50">
              <p className=" flex justify-center items-center gap-3">
                <span>
                  <img
                    src="https://img.icons8.com/?size=48&id=17949&format=png"
                    alt=""
                  />
                </span>
                {/* <span className="">
                  <FcGoogle />
                </span> */}
                <span>Google Log In</span>
              </p>
            </button>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={!passwordShow ? "password" : "text"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              {!passwordShow ? (
                <span
                  onClick={() => setPasswordShow(true)}
                  className=" absolute right-5 top-[50px]"
                >
                  <FaEyeSlash />
                </span>
              ) : (
                <span
                  onClick={() => setPasswordShow(false)}
                  className=" absolute right-5 top-[50px]"
                >
                  <FaEye />
                </span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn text-lg font-semibold btn-primary"
                type="submit"
              >
                Login
              </button>
            </div>

            <div>
              <p className=" underline underline-offset-4">
                Do not have an account?{" "}
                <NavLink to={"/singup"}>Sign up</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
