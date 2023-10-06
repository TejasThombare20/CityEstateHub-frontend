import React from "react";

const Header = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-6 my-4 w-full">
        <div className="text-5xl max-w-xl font-bold text-gray-700 font-sans">
          Featured Listed Property
        </div>
        <div className="max-w-xl font-sans font-semibold text-lg ml-10 text-gray-700 ">
          Real estate can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity. The value of real estate can be..
        </div>
      </div>
    </>
  );
};

export default Header;
