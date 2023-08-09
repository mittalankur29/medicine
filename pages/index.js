/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Whatsapp from "components/whatsapp/whatsapps.js"
import RateTable from "components/Cards/RateTable25mg.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/banner.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-1/2 h-full absolute opacity-75"
              style={{
                backgroundImage:
                  "url('/img/hero-shadow.png')",
              }}
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-lightBlue-600 font-bold text-5xl">
                  VIGRA CONNECT
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                  A medical strength male enhancement.
                  </p>
                  <div className="mt-6">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-12 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Buy Now
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      {/* <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-lightBlue-600">
                VIGRA CONNECT - A medical strength male enhancement.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus NextJS is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/threepacks-min_1_0.png"
          alt="..."
        />
      </section> */}

      <section className="pb-20 relative bg-lightBlue-600">
      
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
        <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 z-2">
          <img
          className="sm:mt-0 max-h-860-px"
          src="/img/threepacks-min_1_0.png"
          alt="..."
        />
        </div>
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="sm:pt-0">
              <h2 className="font-bold text-3xl text-white">
                Longer Stamina | Harder Erection | Stronger Performance
              </h2>
            </div>
          </div>
        </div>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-lightBlue-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-white">
      <h2 className="text-3xl font-bold text-lightBlue-600 text-center uppercase">
                Vigra connect Dosages
              </h2>
        <div className="container table-card-border border-8 mx-auto mt-8">
          <div className="home-outline flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-2 px-6 relative">
                <div className="w-full mt-6">
                  <RateTable />
                </div>

              {/* <table class="table-auto">
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table> */}
          </div>
        </div>
        <div className="container mx-auto mt-32">
        <h2 className="text-3xl font-bold text-lightBlue-600 text-center uppercase">
                    Benifit of VIGRA Connect
                  </h2>
          <div className="flex flex-wrap items-center">
          
            {/* <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h2 className="text-xl font-bold text-white">
                    Benifit of VIGRA Connect
                  </h2>
                  <p className="text-md font-light mt-2 text-white">
                  Vigra Connect Male Enhancement System offers multiple sexual health benefits to help you enjoy hard erections, increased stamina and peak performance.
                  </p>
                </blockquote>
              </div>
            </div> */}

            <div className="w-full px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto text-center">
                      <div className="bg-lightBlue-600 p-2 w-1/2 h-1/2 mb-5 shadow-lg rounded-full mx-auto">
                        <img
                          src="/img/img-1.jpg"
                          alt="..."
                          className="w-full h-full rounded-full border-2 border-blueGray-50 shadow"
                        ></img>
                      </div>
                      <h4 className="text-2xl mb-1 font-bold text-lightBlue-600">
                      LONGER STAYING POWER
                      </h4>
                      <p className="mb-4 text-blueGray-500">
                      Boosts the penis's blood holding capacity, delaying ejaculations to help you last long during sexual encounters.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto text-center">
                    <div className="bg-lightBlue-600 p-2 w-1/2 h-1/2 mb-5 shadow-lg rounded-full mx-auto">
                        <img
                          src="/img/img-2.jpg"
                          alt="..."
                          className="w-full h-full rounded-full border-2 border-blueGray-50 shadow"
                        ></img>
                      </div>
                      <h6 className="text-2xl mb-1 font-bold text-lightBlue-600">
                      ENHANCED PERFORMANCE
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      You can experience heightened pleasure and improved performance every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto text-center">
                    <div className="bg-lightBlue-600 p-2 w-1/2 h-1/2 mb-5 shadow-lg rounded-full mx-auto">
                        <img
                          src="/img/img-3.jpg"
                          alt="..."
                          className="w-full h-full rounded-full border-2 border-blueGray-50 shadow"
                        ></img>
                      </div>
                      <h6 className="text-2xl mb-1 font-bold text-lightBlue-600">INCREASED PENIS SIZE</h6>
                      <p className="mb-4 text-blueGray-500">
                      Regular use of Vigra Connect may lead to successive delivery of blood to the penis, which may help increase penis size.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto text-center">
                    <div className="bg-lightBlue-600 p-2 w-1/2 h-1/2 mb-5 shadow-lg rounded-full mx-auto">
                        <img
                          src="/img/img-4.jpg"
                          alt="..."
                          className="w-full h-full rounded-full border-2 border-blueGray-50 shadow"
                        ></img>
                      </div>
                      <h6 className="text-2xl mb-1 font-bold text-lightBlue-600">
                      SUPPORT TESTOTERONE
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Vigra Connect formula contains natural testosterone enhancing ingredients for an enhanced sex life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20 mt-48">
        
          <h2 className="text-3xl font-bold text-lightBlue-600 text-center uppercase">
          <div className="text-blueGray-500 p-4 text-center inline-flex items-center justify-center w-16 h-16 rounded-full bg-white">
              <img
                  alt="..."
                  src="/img/icons/icon-3.svg"
                  className="w-full"
                />
              </div>
              Experience Erectile Dysfunction in your Sex Life?
          </h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <img
                  alt="..."
                  src="/img/icons/icon-10.svg"
                  className="w-full"
                />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              52% of men experience some kind of erectile dysfunction throughout their life
              </h3>
            </div>

            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 w-full md:mt-0">
                <img
                  alt="..."
                  src="/img/img-1.svg"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 w-full md:mt-0">
                <img
                  alt="..."
                  src="/img/img-2.svg"
                  className="w-full"
                />
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Erection problems can impact any relationship, but treating them has never been easier now medications are over the counter
              </h3>
            </div>
          </div>
        </div>        
      </section>

      <section className="pb-16 bg-lightBlue-600 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-lightBlue-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-bold text-5xl text-lightBlue-600">
                Try Vigra Connect Today and Boost Your Performance
              </h3>
              
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i class="fa fa-cart-arrow-down mr-2 text-white"></i>
                  <span>Buy Vigra Connect Now</span>
                </a>
              </div>
              <div className="w-1/2 text-center mx-auto mt-10">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-3/12 px-4 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-clock mx-auto text-5xl text-lightBlue-600"></i>
                    <span className="text-bold">2 min Purchase</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-shipping-fast mx-auto text-5xl text-lightBlue-600"></i>
                    <span>Free Shipping</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-vote-yea mx-auto text-5xl text-lightBlue-600"></i>
                    <span>Trusted Product</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-people-carry mx-auto text-5xl text-lightBlue-600"></i>
                    <span>Safe Packaging</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Whatsapp />
    </>
  );
}
