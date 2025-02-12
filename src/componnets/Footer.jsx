import React, { useContext } from "react";
import { MyMainContext } from "../AuthProvider/AuthProvider";

const Footer = () => {
  const { themeColor } = useContext(MyMainContext);
  return (
    <footer
      className={
        themeColor === "light"
          ? "footer footer-center bg-orange-300  p-10 opacity-70 "
          : "footer footer-center bg-orange-300  p-10 opacity-70 text-white"
      }
    >
      <aside>
        <div className="flex items-center justify-center mb-5">
          <img
            className="w-4/12 md:w-5/12"
            src="https://ouch-cdn2.icons8.com/6rPG6llNvBIj6kNhFQ_4VpdY3MdSAnuyoXXCakCn_tI/rs:fit:368:368/extend:false/wm:1:re:0:0:0.8/wmid:ouch2/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzg5/L2U4ZTgyYmE2LThj/ZDAtNGUwMi05N2Rl/LTBiZWUxNDg5MjRm/Ny5wbmc.png"
            alt=""
          />
        </div>
        <p className="font-bold text-lg uppercase">marathon</p>
        <p className="lg:w-4/12 md:w-8/12">
          Participating in a marathon is a unique and unforgettable experience.
          From the early morning anticipation at the starting line to the
          cheering crowds along the route, every step is a testament to
          perseverance.
        </p>
        <div className="border border-b-0 border-gray-600 w-full my-4 "></div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-400"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-red-500"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-500"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
