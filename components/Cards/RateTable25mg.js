//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_list1
import React from "react";
import PropTypes from "prop-types";
//import Data from "../../data/data.json";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";



function Dataprop(prop){
  return (
      <tr>
        <th className="px-2 md-px-4 align-middle text-xs md:text-2xl whitespace-nowrap p-4 text-left text-left">
          <span className="font-bold ">
            {prop.name}
          </span>
        </th>
        <td className="px-2 md:px-4 align-middle text-xs md:text-2xl whitespace-nowrap p-4">
          {prop.pill}
        </td>
        <td className="px-2 md:px-4 align-middle text-xs md:text-2xl whitespace-nowrap p-4">
          {prop.savings}
        </td>
        <td className="px-2 md:px-4 align-middle text-xs md:text-2xl whitespace-nowrap p-4">
        <span className="text-red-500 line-through">${prop.price}</span> ${prop.cost}
        </td>
        <td className="px-2 md:px-4 align-middle text-xs md:text-2xl whitespace-nowrap p-4">
          <div className="flex items-center">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <i className="fa fa-cart-arrow-down text-lightBlue-600 mr-2"></i>Order Now
          </button>
          </div>
        </td>
      </tr>
  )
}



export default function CardTable({ color }) {
  var [rate, setRate] = React.useState(1);
  var listData = []
  
  if (rate == 1) { listData = Data.viagra50 }else{ listData = Data.viagra100}
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >

        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2">
                <button
                onClick={()=> setRate(1)}
                className={
                  "inline-block p-4 px-6 rounded-t-lg hover:text-gray-600 dark:bg-gray-800 dark:text-blue-500 " +
                  (rate == 1 ? "active bg-lightBlue-600 text-white" : "bg-blueGray-100 text-black" )
                }
                >
                  Viagra 50mg
                  </button>
            </li>
            <li class="mr-2">
                <button
                 onClick={()=> setRate(2)}
                  className={
                    "px-6 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " +
                    (rate == 2 ? "active bg-lightBlue-600 text-white" : "bg-blueGray-100 text-black" )
                  }
                  >
                    Viagra 100mg
                    </button>
            </li>
        </ul>

        
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-2 md:px-4 align-middle py-3 text-xs md:text-2xl whitespace-nowrap font-bold text-left rounded-l-lg bg-lightBlue-600 text-white"
                  }
                >
                  Product
                </th>
                <th
                  className={
                    "px-2 md:px-4 align-middle py-3 text-xs md:text-2xl whitespace-nowrap font-bold text-left bg-lightBlue-600 text-white"
                  }
                >
                  Pill
                </th>
                <th
                  className={
                    "px-2 md:px-4 align-middle py-3 text-xs md:text-2xl whitespace-nowrap font-bold text-left bg-lightBlue-600 text-white"
                  }
                >
                  Saving
                </th>
                <th
                  className={
                    "px-2 md:px-4 align-middle py-3 text-xs md:text-2xl whitespace-nowrap font-bold text-left bg-lightBlue-600 text-white"
                  }
                >
                  Price
                </th>
                <th
                  className={
                    "px-2 md:px-4 align-middle py-3 text-xs md:text-2xl whitespace-nowrap font-bold text-left rounded-r-lg bg-lightBlue-600 text-white"
                  }
                >
                
                </th>
              </tr>
            </thead>
            <tbody>
              {listData.map((data)=> <Dataprop name={ data.name } pill={data.pill} savings={data.savings} price={data.price} cost={data.cost} />)}
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
  "viagra50": [
      {
          "name": "10 pills",
          "pill": "$4.02",
          "savings": "$0.0",
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
  "viagra100": [
    {
      "name": "10 pills",
      "pill": "$8",
      "savings": "$0",
      "price": 80,
      "cost": 80
  },  
    {
          "name": "20 pills",
          "pill": "$6",
          "savings": "$40",
          "price": 160,
          "cost": 120
      },
      {
          "name": "30 pills",
          "pill": "$5.5",
          "savings": "$75",
          "price": 240,
          "cost": 165
      },
      {
          "name": "40 pills",
          "pill": "$5",
          "savings": "$120",
          "price": 320,
          "cost": 200
      },
      {
        "name": "60 pills",
        "pill": "$4.65",
        "savings": "$201",
        "price": 480,
        "cost": 279
    },
      {
          "name": "90 pills",
          "pill": "$4",
          "savings": "$360",
          "price": 720,
          "cost": 360
      },
      {
          "name": "120 pills",
          "pill": "$3.75",
          "savings": "$510",
          "price": 960,
          "cost": 450
      },
      {
          "name": "180 pills",
          "pill": "$3.25",
          "savings": "$855",
          "price": 1440,
          "cost": 585
      },
      {
          "name": "270 pills",
          "pill": "$2.75",
          "savings": "$1417.5",
          "price": 2160,
          "cost": 742.5
      },
      {
          "name": "360 pills",
          "pill": "$2.5",
          "savings": "$1980",
          "price": 2880,
          "cost": 900
      }
  ]
}