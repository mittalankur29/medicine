import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-lightBlue-600 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/"
              >
                <img
                  className="sm:mt-0 h-10"
                  src="/img/brand/logo-3.png"
                  alt="viagra home"
                />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-lightBlue-600 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="sms:[2134782761]&body=[Hi Viagra Home, I am interested in buying Viagra Home. Ho can I get started?]"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://instagram.com/"
                  target="_blank"
                >
                  <i className="text-white fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Follow us Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://web.whatsapp.com/send?phone= +1213-948-2161&amp;text=Hi, Please share your query and our team will connect with you soon!!Thanks"
                  target="_blank"
                >
                  <i className="text-white fab fa-whatsapp text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Whatsapp</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="bg-white hover:text-lightBlue-600 text-blueGray-700 active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  href="#orderList"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Buy Viagra Home Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
