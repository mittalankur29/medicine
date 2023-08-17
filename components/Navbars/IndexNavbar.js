import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  var [scroll, setScroll] = React.useState("");
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log(scroll)
  return (
    <>
      <nav
      className={
        "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-lightBlue-600 shadow " +
        (scroll > 20 ? "block" : "hidden")
        }
      >
        <div className="container px-4 mx-auto flex flex-row items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-xl font-bold leading-relaxed inline-block whitespace-nowrap uppercase"
                href="/"
              >
                <img
                  className="sm:mt-0 h-10"
                  src="/img/brand/logo-3.png"
                  alt="viagra home"
                />
              </a>
            </Link>
          </div>
          <div
            className="flex items-center bg-lightBlue-600 lg:bg-opacity-0 lg:shadow-none"
            id="example-navbar-warning"
          >
            <ul className="flex flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-white py-4 lg:py-2 flex items-center text-base font-bold"
                  href="sms:[2134782761]&body=[Hi Viagra Home, I am interested in buying Viagra Home. Ho can I get started?]"
                >
                  Text us +1 213-478-2761
                </a>
              </li>
            </ul>
            <ul className="hidden md:block flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="flex items-center">
                <a
                  className="bg-white hover:text-lightBlue-600 text-blueGray-700 active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  href="#orderList"
                >
                  <i className="fas fa-cart-arrow-down"></i> Buy Viagra Home Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
