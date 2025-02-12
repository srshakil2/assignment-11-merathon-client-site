import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyMainContext } from "../AuthProvider/AuthProvider";
import Privet from "./Privet/Privet";
import { IoIosArrowDown } from "react-icons/io";

const Navber = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { handelLogOut } = useContext(MyMainContext);
  const { user, themeColor, setThemeColor } = useContext(MyMainContext);

  const exsistUser = (
    <ul className="menu menu-horizontal px-1 items-center">
      <NavLink className={"mr-5 text-lg font-semibold"}>
        <li>HOME</li>
      </NavLink>

      <NavLink className={"text-lg font-semibold"}>
        <li>ABOUT US</li>
      </NavLink>
      <li className="text-lg font-semibold">
        <details>
          <summary className=" ">PAGES</summary>
          <ul className="z-20 p-2 ">
            <li className="">
              <Link to={"/marathons"}>Marathon Page</Link>
            </li>
            <li>
              <Link>Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
  const nathingUser = (
    <ul className="menu menu-horizontal px-1 items-center">
      <NavLink className={"mr-5 text-lg font-semibold"}>
        <li>HOME</li>
      </NavLink>

      <NavLink className={"text-lg font-semibold"}>
        <li>ABOUT US</li>
      </NavLink>
      <li className="text-lg font-semibold">
        <details>
          <summary className=" ">PAGES</summary>
          <ul className="z-20 p-2 ">
            <li className="">
              <Link to={"/marathons"}>Marathon Page</Link>
            </li>
            <li>
              <Link>Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );

  // theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    setThemeColor(theme);
  }, [theme]);

  const themeTogle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // console.log("----------", themeColor);
  return (
    <div className="navbar bg-orange-200 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? " mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                  : "mr-5 text-lg font-semibold"
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"/marathons"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                  : "mr-5 text-lg font-semibold"
              }
            >
              <li>Marathons</li>
            </NavLink>

            <NavLink
              to={"/addmarathon"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                  : "mr-5 text-lg font-semibold"
              }
            >
              <li>Add Marathon</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                  : "mr-5 text-lg font-semibold"
              }
              to={"/myMarathon"}
            >
              <li>My Marathon List</li>
            </NavLink>

            <NavLink
              to={"/marathons/myApply"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                  : "mr-5 text-lg font-semibold"
              }
            >
              <li>My Apply List</li>
            </NavLink>
          </ul>
        </div>
        <NavLink to={"/"}>
          <img
            className="w-[80px]"
            src="https://ouch-cdn2.icons8.com/6rPG6llNvBIj6kNhFQ_4VpdY3MdSAnuyoXXCakCn_tI/rs:fit:368:368/extend:false/wm:1:re:0:0:0.8/wmid:ouch2/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzg5/L2U4ZTgyYmE2LThj/ZDAtNGUwMi05N2Rl/LTBiZWUxNDg5MjRm/Ny5wbmc.png"
            alt=""
          />
        </NavLink>
      </div>
      {/* lg navlink */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                : "mr-5 text-lg font-semibold "
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to={"/marathons"}
            className={({ isActive }) =>
              isActive
                ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                : "mr-5 text-lg font-semibold"
            }
          >
            <li>Marathons</li>
          </NavLink>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="flex">
              <div className="mr-5 text-lg font-semibold">Dashboard</div>
              <span className="flex items-center justify-start -ml-4">
                <IoIosArrowDown />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/addmarathon"}
                  className={({ isActive }) =>
                    isActive
                      ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                      : "mr-5 text-lg font-semibold"
                  }
                >
                  Add Marathon
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                      : "mr-5 text-lg font-semibold"
                  }
                  to={"/myMarathon"}
                >
                  My Marathon List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/marathons/myApply"}
                  className={({ isActive }) =>
                    isActive
                      ? "mr-5 text-lg font-semibold bg-gray-200 p-1 rounded-lg"
                      : "mr-5 text-lg font-semibold"
                  }
                >
                  My Apply List
                </NavLink>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      {/* btn profile */}
      <div className="navbar-end">
        {user ? (
          <div className=" flex justify-center items-center">
            <div className=" flex justify-center items-center gap-3">
              <img
                className="w-16 h-16 rounded-full"
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <button
              onClick={handelLogOut}
              className={
                themeColor === "light"
                  ? "btn bg-orange-300 text-black font-semibold ml-3"
                  : "btn bg-orange-300 text-white font-semibold ml-3"
              }
            >
              LogOut
            </button>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={
              themeColor === "light"
                ? "btn bg-orange-300 text-black font-semibold ml-3"
                : "btn bg-orange-300 text-white font-semibold ml-3"
            }
          >
            Login now
          </NavLink>
        )}
      </div>
      {/* data-theme */}
      <div>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onChange={themeTogle} type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;
