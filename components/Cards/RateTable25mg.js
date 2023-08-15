//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_list1
import React from "react";
import PropTypes from "prop-types";
//import Data from "../../data/data.json";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";



function Dataprop(prop){
  return (
      <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          <span className="ml-3 font-bold ">
            {prop.name}
          </span>
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {prop.pill}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {prop.savings}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          ${prop.price}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          ${prop.cost}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex items-center">
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Order Now
          </button>
          </div>
        </td>
      </tr>
  )
}

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Viagra 25mg
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left rounded-l-lg " +
                    (color === "light"
                      ? "bg-lightBlue-600 text-white"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Product Name
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-lightBlue-600 text-white"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Per Pill
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-lightBlue-600 text-white"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Saving(only Today)
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-lightBlue-600 text-white"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Price
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-lightBlue-600 text-white"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Discounted Price
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left " +
                    (color === "light"
                      ? "bg-lightBlue-600 text-white"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Order Now
                </th>
              </tr>
            </thead>
            <tbody>
              {Data.viagra1000.map((data)=> <Dataprop name={ data.name } pill={data.pill} savings={data.savings} price={data.price} cost={data.cost} />)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

const Data = {
  "viagra1000": [
      {
          "name": "10 pills",
          "pill": "$4.02",
          "savings": "0",
          "price": 40.2,
          "cost": 40.2
      },
      {
          "name": "20 pills",
          "pill": "$3.23",
          "savings": "$15.71",
          "price": 80.4,
          "cost": 64.69
      },
      {
          "name": "30 pills",
          "pill": "$2.97",
          "savings": "$31.43",
          "price": 120.61,
          "cost": 89.18
      },
      {
          "name": "60 pills",
          "pill": "$2.71",
          "savings": "$78.56",
          "price": 241.2,
          "cost": 162.64
      },
      {
          "name": "90 pills",
          "pill": "$2.62",
          "savings": "$125.70",
          "price": 361.8,
          "cost": 236.1
      },
      {
          "name": "120 pills",
          "pill": "$2.58",
          "savings": "$172.84",
          "price": 482.4,
          "cost": 309.56
      },
      {
          "name": "180 pills",
          "pill": "$2.54",
          "savings": "$267.11",
          "price": 723.6,
          "cost": 456.49
      },
      {
          "name": "270 pills",
          "pill": "$2.51",
          "savings": "$408.52",
          "price": 1085.4,
          "cost": 676.88
      },
      {
          "name": "360 pills",
          "pill": "$2.49",
          "savings": "$549.94",
          "price": 1447.2,
          "cost": 897.26
      }
  ],
  "viagra650": [
      {
          "name": "20 pills",
          "pill": "$1.85",
          "savings": "0",
          "price": 37,
          "cost": 37
      },
      {
          "name": "30 pills",
          "pill": "$1.60",
          "savings": "$7.44",
          "price": 55.5,
          "cost": 48.06
      },
      {
          "name": "60 pills",
          "pill": "$1.35",
          "savings": "$29.77",
          "price": 111,
          "cost": 81.23
      },
      {
          "name": "90 pills",
          "pill": "$1.27",
          "savings": "$52.10",
          "price": 166.5,
          "cost": 114.4
      },
      {
          "name": "120 pills",
          "pill": "$1.23",
          "savings": "$74.43",
          "price": 222,
          "cost": 147.57
      },
      {
          "name": "180 pills",
          "pill": "$1.19",
          "savings": "$119.10",
          "price": 333,
          "cost": 213.9
      },
      {
          "name": "270 pills",
          "pill": "$1.16",
          "savings": "$186.09",
          "price": 499.5,
          "cost": 313.41
      },
      {
          "name": "360 pills",
          "pill": "$1.15",
          "savings": "$253.08",
          "price": 666,
          "cost": 412.92
      }
  ],
  "viagra500": [
      {
          "name": "30 pills",
          "pill": "$1.01",
          "savings": "0",
          "price": 30.15,
          "cost": 30.15
      },
      {
          "name": "60 pills",
          "pill": "$0.71",
          "savings": "$17.43",
          "price": 60.3,
          "cost": 42.87
      },
      {
          "name": "90 pills",
          "pill": "$0.62",
          "savings": "$34.86",
          "price": 90.45,
          "cost": 55.59
      },
      {
          "name": "180 pills",
          "pill": "$0.52",
          "savings": "$87.16",
          "price": 180.9,
          "cost": 93.74
      },
      {
          "name": "240 pills",
          "pill": "$0.50",
          "savings": "$122.03",
          "price": 241.2,
          "cost": 119.17
      },
      {
          "name": "360 pills",
          "pill": "$0.47",
          "savings": "$191.75",
          "price": 361.8,
          "cost": 170.05
      }
  ],
  "viagra250": [
      {
          "name": "60 pills",
          "pill": "$0.56",
          "savings": "0",
          "price": 33.8,
          "cost": 33.8
      },
      {
          "name": "90 pills",
          "pill": "$0.50",
          "savings": "$6.08",
          "price": 50.69,
          "cost": 44.61
      },
      {
          "name": "120 pills",
          "pill": "$0.46",
          "savings": "$12.17",
          "price": 67.59,
          "cost": 55.42
      },
      {
          "name": "180 pills",
          "pill": "$0.43",
          "savings": "$24.33",
          "price": 101.38,
          "cost": 77.05
      },
      {
          "name": "270 pills",
          "pill": "$0.41",
          "savings": "$42.58",
          "price": 152.08,
          "cost": 109.5
      },
      {
          "name": "360 pills",
          "pill": "$0.39",
          "savings": "$60.83",
          "price": 202.77,
          "cost": 141.94
      }
  ]
}