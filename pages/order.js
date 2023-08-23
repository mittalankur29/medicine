import React from "react";
import { useRouter } from "next/router";
import { PayPalButton } from "react-paypal-button-v2";
import Link from "next/link";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  // const script = document.createElement('script')
  // script.src = "https://paypal.com/sdk/js?client-id=AZMfxvcWToTSavLcPcoy6eaDc26vYVJj6q5Xw9Z8vjj8J9O8kN_y9nuu3dfbAt9AMO0SvXNUeRZMd2jz"
  // script.type = "text/javascript"
  // script.async = true
  //document.body.appendChild(script)
  const router = useRouter()
  const data = router.query;
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative block py-24 md:px-10">
          <div className="container mx-auto px-4">
            <div id="orderForm" className="flex flex-col md:flex-row justify-center min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
              {/* <div className="w-full lg:w-8/12 px-2">
                <div className="relative flex flex-col">
                  <div className="p-5 lg:p-10">
                  <h2 className="m-2 text-xl font-semibold">Personal Detail</h2>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="first-name"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="last-name"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone No.
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone No."
                      />
                    </div>

                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <h2 className="m-2 text-xl font-semibold">Shipping Detail</h2>
                  <div className="flex flex-col md:flex-row">
                    
                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="street-address"
                      >
                        Street Address
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Address...."
                      />
                    </div>
                    <div className="relative w-full md:w-6/12 m-2 flex flex-col">
                    <div className="relative w-full mb-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Country
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="relative w-full">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="province"
                      >
                        Province
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Province"
                      />
                    </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="city"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="City"
                      />
                    </div>

                    <div className="relative w-full md:w-6/12 m-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="zipcode"
                      >
                        Zipcode
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Zipcode"
                      />
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div> */}
              <div className="w-full lg:w-4/12 px-2 mx-auto">
                <div className="relative flex flex-col">
                  <div className="flex-auto p-5 lg:p-10">
                    <table className="items-center w-full bg-transparent border-collapse mb-4">
                      <tr>
                        <th className="text-lg" colspan="2">Your order</th>
                      </tr>
                      <tr className="text-lg py-2">
                        <td>{data.name} x 1(Qty)</td>
                        <td className="text-right">${data.price}</td>
                      </tr>
                      <tr className="text-lg py-2">
                        <td>Discount</td>
                        <td className="text-right">{data.savings}</td>
                      </tr>
                      <tr className="text-lg">
                        <td>Subtotal</td>
                        <td className="text-right">${data.cost}</td>
                      </tr>
                      <tr className="text-lg">
                        <td>Shipping</td>
                        <td className="text-right text-lightBlue-600">Free shipping</td>
                      </tr>
                      <tr className="text-lg font-bold">
                        <td>Total</td>
                        <td className="text-right">${data.cost}</td>
                      </tr>
                      <tr className="text-lg font-bold">
                        
                      </tr>
                    </table>
                    <PayPalButton
                      amount={data.cost}
                      options={{clientId:"AWy2jNU3__JzC_FVj8Ezmx1cu2NXS4KzfLWgEHxfFURWI1C64kFwLXhSHsa_RhX2r46m8nkI24N2FZw9", currency:"USD",intent:"capture"}}
                      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                      shippingPreference="GET_FROM_FILE"
                      onSuccess={(details, resp) => {
                        //console.log(details)
                        console.log(resp)
                        var success = document.getElementById("success");
                        success.classList.remove("hidden");
                        success.classList.add("block");
                        var orderForm = document.getElementById("orderForm");
                        orderForm.classList.add("hidden");
                        var transactionID = document.getElementById("transactionId");
                        transactionID.innerText = details.id
                        //alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        // return fetch("/paypal-transaction-complete", {
                        //   method: "post",
                        //   body: JSON.stringify({
                        //     orderID: data.orderID
                        //   })
                        // });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="success" className="hidden flex flex-col md:flex-row justify-center min-w-0 break-words w-full lg:w-8/12 mx-auto mb-6 shadow-lg rounded-lg bg-blueGray-200">
              <div className="w-full lg:w-8/12 px-2">
                <div className="relative flex flex-col">
                  <div className="p-5 lg:p-10">
                  <div className="flex flex-col">
                    <div className="relative w-full m-2 text-center">
                    <i class="fa fa-check mx-auto text-7xl text-lightBlue-600"></i>
                    </div>

                    <div className="relative w-full m-2 text-center text-xl leading-relaxed">
                      <p>Thanks you for the payment. Your order has been accepted by Viagra Home.</p>
                      <p>Order will be delivered within 7 Days to your given Shipping Address</p>
                      <table className="items-center w-full bg-transparent border-collapse mt-4">
                      <tr>
                        <th className="text-lg" colspan="2">Your order summary</th>
                      </tr>
                      <tr className="text-lg py-2">
                        <td className="">{data.name} x 1(Qty)</td>
                        <td className="text-right">${data.price}</td>
                      </tr>
                      <tr className="text-lg py-2">
                        <td>Transaction Id</td>
                        <td id="transactionId" className="text-right"></td>
                      </tr>
                      <tr className="text-lg font-bold">
                        <td>Total Paid</td>
                        <td className="text-right">${data.cost}</td>
                      </tr>
                      <tr className="text-lg font-bold">
                        
                      </tr>
                    </table>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
