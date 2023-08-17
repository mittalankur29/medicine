/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Whatsapp from "components/whatsapp/whatsapps.js"
import RateTable25 from "components/Cards/RateTable25mg.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <div>
        <img 
        className="mx-auto max-w-full h-auto block"
        src="/img/banner-3.jpg"
        />
      </div>
      {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/banner-2.png')",
            }}
          >
          </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mr-auto my-auto mt-6">
              <div className="pr-12">
                <h1 className="text-lightBlue-600 font-bold text-6xl">
                  VIGRA HOME
                </h1>
                <div class="flex flex-wrap items-top mb-6">
                  <div class="w-4/12">
                    <div class="flex flex-wrap text-2xl md:text-4xl">
                    <h2 className="font-bold text-white mt-6">LONGER</h2>
                      <span class="text-lightBlue-600 font-extrabold">STAMINA</span>
                    </div>
                  </div>
                  <div class="w-4/12">
                    <div class="flex flex-wrap text-2xl md:text-4xl">
                    <h2 className="font-bold text-white mt-6">HARDER</h2>
                      <span class="text-lightBlue-600 font-extrabold">ERECTION</span>
                    </div>
                  </div>
                  <div class="w-4/12">
                    <div class="flex flex-wrap text-2xl md:text-4xl">
                    <h2 className="font-bold text-white mt-6">STRONGER</h2>
                      <span class="text-lightBlue-600 font-extrabold ">PERFORMANCE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> */}

      <section className="pb-20 relative">
        
        <div className="container mx-auto items-center flex flex-wrap">
        
          <div className="w-full text-center">
          <div className="mt-12">
                  <a
                    href="#orderList"
                    className="animate-pulseb get-started text-white font-bold px-12 py-8 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Buy Now Viagra Home
                  </a>
                </div>
          </div>
        </div>
          

        </section>

      <section id="orderList" className="pb-40 relative bg-white">
        <h2 className="text-3xl md:text-5xl font-bold text-lightBlue-600 text-center uppercase">
                Vigra Home Dosages
              </h2>
        <div className="container table-card-border md:border-30 mx-auto mt-8">
          <div className="home-outline md:border-20 flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-2 md:px-10 relative">
                <div className="w-full mt-6">
                  <RateTable25 />
                </div>
          </div>
        </div>
        <div className="container mx-auto mt-32">
        <h2 className="text-3xl md:text-5xl font-bold text-lightBlue-600 text-center uppercase">
                    Benifit of VIGRA Home
                  </h2>
          <div className="flex flex-wrap items-center">
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
                      <p className="mb-4 text-blueGray-500 text-xl px-12">
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
                      <p className="mb-4 text-blueGray-500 text-xl px-12">
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
                      <p className="mb-4 text-blueGray-500 text-xl px-12">
                      Regular use of Vigra Home may lead to successive delivery of blood to the penis, which may help increase penis size.
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
                      <p className="mb-4 text-blueGray-500 text-xl px-12">
                        Vigra Home formula contains natural testosterone enhancing ingredients for an enhanced sex life.
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
              <img
                  alt="..."
                  src="/img/icons/icon-10.svg"
                  className="w-full"
                />
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
              <h3 className="font-bold text-4xl text-lightBlue-600 leading-snug">
                Try Vigra Home Today and Boost Your Performance
              </h3>
              
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="#orderList"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i class="fa fa-cart-arrow-down mr-2 text-white"></i>
                  <span>Buy Vigra Home Now</span>
                </a>
              </div>
              <div className="md:w-6/12 text-center mx-auto mt-10">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-3/12 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-clock mx-auto text-5xl text-lightBlue-600"></i>
                    <span className="text-bold">2 min Purchase</span>
                    </div>
                  </div>
                  <div className="w-3/12 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-shipping-fast mx-auto text-5xl text-lightBlue-600"></i>
                    <span>Free Shipping</span>
                    </div>
                  </div>
                  <div className="w-3/12 ml-auto">
                    <div className="flex flex-wrap">
                    <i class="fa fa-vote-yea mx-auto text-5xl text-lightBlue-600"></i>
                    <span>Trusted Product</span>
                    </div>
                  </div>
                  <div className="w-3/12 ml-auto">
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
