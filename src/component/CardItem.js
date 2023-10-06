import React from "react";
import { NavLink } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { LiaBedSolid } from "react-icons/lia";
import { BsBuilding } from "react-icons/bs";
import { LuBath } from "react-icons/lu";
import { BsArrowsMove } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import {  useDispatch} from 'react-redux'
import { propertyReducer } from "../Redux/estateSlice";


const CardItem = ({ estate }) => {
  //  const disptch = useDispatch();
    
  // disptch(propertyReducer(estate));

  return (
    <div>
      <NavLink
       className=" flex flex-col justify-center items-start gap-4 rounded-xl bg-white p-1"
       to={{ pathname : `/property/:${estate._id}` , state : estate}}>
        <div className=" relative w-full h-96 rounded-lg ">
          {estate.image ? (
            <>
              <img
                className="w-full h-full object-fill  rounded-xl "
                src={estate.image}
                alt=""
              />
              {/* {console.log("popular : ", estate.popular)} */}
              {estate.popular === true  && (
                <div className=" absolute  -bottom-6  inline-flex items-center px-8 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Popular
                </div>
              )}
              <div className="absolute  top-2 right-6 bg-white rounded-full text-blue-700 p-2 inline-flex items-center text-3xl font-medium text-center">
              <CiHeart/>       
              </div>
              <div className="absolute  top-2 left-6 bg-white rounded-3xl  text-blue-700 px-4 py-2 inline-flex items-center  font-medium text-center">
              {estate.stats}
              </div>

            </>
          ) : (
            <div className="bg-slate-200 h-full w-full">loading</div>
          )}
        </div>

        <div className=" flex justify-center items-center gap-2 ml-4 mt-2 ">
          <ImLocation2 className="text-blue-400" />
          <div className="text-base ">{estate.address}</div>
        </div>

        <div className="text-xl font-bold ml-4 my-2 text-gray-700">
          {estate.name}
        </div>
        <div className="w-full">
          <div className="flex  justify-evenly items-center gap-6  ">
            <div className="flex flex-col justify-center items-center gap-1 p-4 text-xl font-semibold text-gray-600  border border-dashed border-gray-100">
              <BsBuilding />
              <div>3 Rooms</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 p-4 text-xl font-semibold text-gray-600  border border-dashed border-gray-100">
              <LiaBedSolid />
              <div>4Beds</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 p-4 text-xl font-semibold text-gray-600  border border-dashed border-gray-100">
              <LuBath />
              <div>1Bath</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 p-4 text-xl font-semibold text-gray-600  border border-dashed border-gray-100">
              <BsArrowsMove />
              <div> 732sft</div>
            </div>
          </div>
        </div>
        <div className="w-full my-4 ">
          <div className=" mx-4 flex justify-between items-center ">
            <div className="flex justify-center items-center ">
              <BsCurrencyDollar className="text-xl font-bold text-blue-600" />
              <span className="text-xl font-bold text-blue-600">
                {estate.price}
              </span>
              /month
            </div>
            <NavLink className="rounded-3xl text-blue-500 font-bold  border border-blue-700 px-4 py-2">
              Read More
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CardItem;
