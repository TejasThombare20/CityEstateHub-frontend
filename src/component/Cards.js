import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import CardItem from "./CardItem";
import { toast } from "react-hot-toast";
import Loader from "./Loader";
import { setEstateDataReducer } from "../Redux/estateSlice";
import {useSelector , useDispatch} from "react-redux"
import { propertyReducer } from "../Redux/estateSlice";
import { API } from "../utils";


const Cards = () => {
const dispatch = useDispatch()
const EstatesData = useSelector((state)=>state.estate.EstateList)
console.log("EstatesData", EstatesData)

  const [Estates, setEstates] = useState();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const [active, setactive] = useState("New York");

  useEffect(() => {
    fetchAllProduct();
  }, [page, active]);

  const fetchAllProduct = async () => {
    try {
      // console.log("page in function :  ", page);
      // setactive(null);
      // console.log("active :", active);
      const response = await axios.get(
        `${API}/api/new/fetctAllestate?page=${page}&active=${active}`
      );

      const newEstates = response.data.estate;
      const count = response.data.count;
      // console.log("count: ", count)
      setCount(count);

      // setEstates(newProducts);
      // setEstates((prevEstates) => [...(prevEstates || []), ...newEstates]);
      dispatch(setEstateDataReducer( [...(EstatesData || []), ...newEstates]));
     
    } catch (error) {
      console.log("error in fetching product : ", error);
    }
  };
  const handleClick = () => {
    const productSize = EstatesData.length;
    console.log("productSize", productSize);
    if (productSize < count) {
      setPage((prevPage) => prevPage + 1);
      console.log("page : ", page);
    } else {
      toast.error(` ${active} city's Estates are over`);
    }
  };

  const handleActiveClick = (link) => {
    setactive(link);
    // setEstates(null);
    dispatch(setEstateDataReducer(null))
    setPage(1);
  };

  const handleEstateClick = (estate) => {
    console.log("hello")
    console.log("estate",estate);
        dispatch(propertyReducer(estate));
  }

  return (
    <>
      <div className=" w-full flex flex-col  items-center justify-center  mx-4 gap-4 ">
        <div className="w-full flex flex-initial justify-between items-center gap-6">
          <div className="flex justify-center items-center gap-2">
            <NavLink
              className={` rounded-3xl px-4 py-2 font-bold ${
                active === "New York"
                  ? "bg-blue-600 text-white "
                  : "bg-slate-300  text-gray-800 "
              }`}
              onClick={() => {
                console.log("active", active);
                handleActiveClick("New York");
              }}
            >
              NewYork
            </NavLink>
            <NavLink
              className={` rounded-3xl px-4 py-2 font-bold ${
                active === "Mumbai"
                  ? "bg-blue-600 text-white "
                  : "bg-slate-300  text-gray-800 "
              }`}
              onClick={() => {
                console.log("active", active);
                handleActiveClick("Mumbai");
              }}
            >
              Mumbai
            </NavLink>
            <NavLink
              className={` rounded-3xl px-4 py-2 font-bold ${
                active === "Paris"
                  ? "bg-blue-600 text-white "
                  : "bg-slate-300  text-gray-800 "
              }`}
              onClick={() => handleActiveClick("Paris")}
            >
              Paris
            </NavLink>
            <NavLink
              className={` rounded-3xl px-4 py-2 font-bold ${
                active === "london"
                  ? "bg-blue-600 text-white "
                  : "bg-slate-300  text-gray-800 "
              }`}
              onClick={() => handleActiveClick("london")}
            >
              London
            </NavLink>
          </div>
          <div className="flex flex-initial ml-auto justify-center items-center gap-2 border border-blue-700 px-4 py-2 rounded-3xl">
            <div className=" font-bold text-blue-600  ">View All</div>
            <HiArrowSmRight size={25} className="text-blue-600" />
          </div>
        </div>
        {EstatesData ? (
          <div className=" w-full grid grid-cols-3 gap-14">
            {EstatesData.map((estate) => (
              <div onClick={()=>handleEstateClick(estate)}>
                <CardItem id={estate.id} estate={estate}  />
              </div>
              
            ))}
          </div>
        ) : (
          <div className="w-full h-[500px]">
            <Loader />
          </div>
        )}

        <div
          className=" my-2 cursor-pointer flex justify-center items-center gap-1 bg-blue-600 text-white font-semibold rounded-lg px-4 py-1"
          onClick={handleClick}
        >
          <ImSpinner2 />
          <div>Show More</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
