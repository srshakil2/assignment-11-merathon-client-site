import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyMainContext } from "../AuthProvider/AuthProvider";
import Privet from "./Privet/Privet";
import { IoIosArrowDown } from "react-icons/io";

const Navber = () => {
  const { handelLogOut } = useContext(MyMainContext);
  const { user } = useContext(MyMainContext);

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
  return (
    <div className="navbar bg-orange-200 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {/* gfhfghfghg ---------- */}
            {user ? (
              <>
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
              </>
            ) : (
              ""
            )}
            {/* fddffdgfgd */}
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
          {/* -------------------------now */}
          {user ? (
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
          ) : (
            ""
          )}
        </ul>
      </div>
      {/* btn profile */}
      <div className="navbar-end">
        {user ? (
          <div className=" flex justify-center items-center">
            <div className=" flex justify-center items-center gap-3">
              {/* <p className=" hidden md:flex text-lg font-semibold">
                {user?.displayName}
              </p> */}
              <img
                className="w-16 h-16 rounded-full"
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <button
              onClick={handelLogOut}
              className="btn bg-orange-300 text-black font-semibold ml-3"
            >
              LogOut
            </button>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={"btn text-black text-lg bg-orange-300"}
          >
            Login now
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
