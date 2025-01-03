import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyMainContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../../AuthProvider/firebase";
import axios from "axios";

const SingUp = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const { singUphandel } = useContext(MyMainContext);
  const [errors, setErrors] = useState(null);

  const handelSingUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    // akhanthake suru
    //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    //   if (!passwordRegex.test(password)) {
    //     return toast.error("password not valid");
    //   }
    singUphandel(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => {
          axios
            .post("http://localhost:3000/user", {
              name,
              photoUrl,
              email,
            })
            .then((res) => {
              console.log(res.data);

              // toast.success("soccessfully create accunt");
              navigate("/");
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((error) => setErrors(error.message));

    // console.log(name, photoUrl, email, password, confirmpassword);
  };
  return (
    <div className="hero">
      <Helmet>
        <title>Marathon || SingUp</title>
      </Helmet>
      <div className=" flex-col lg:flex-row-reverse w-10/12 md:w-4/12 min-h-screen mt-10">
        <div className="card bg-base-100  shadow-2xl">
          <form className="card-body" onSubmit={handelSingUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              {/* 1 name */}
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              {/* 2 photo url */}
              <input
                name="url"
                type="text"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* 3 email */}
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
              {/* 4 password */}
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
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              {/* 5 confirmpassword */}
              <input
                name="confirmpassword"
                type={!passwordShow ? "password" : "text"}
                placeholder="Confirm Password"
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
              <label>
                {errors ? (
                  <p className=" text-red-600 text-sm ">{errors}</p>
                ) : (
                  ""
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn text-lg font-semibold btn-primary"
                type="submit"
              >
                SingUp
              </button>
            </div>

            <div>
              <p>
                Already haven account.Pleass?
                <NavLink
                  to={"/login"}
                  className=" underline underline-offset-4"
                >
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
