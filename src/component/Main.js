import React from "react";
import Header from "./Header";
import Cards from "./Cards";

const Main = () => {
  return (
    <>
      <div className="flex flex-col  overflow-x-hidden justify-center items-center gap-6 mx-5">
        <Header />
        <Cards />
      </div>
    </>
  );
};

export default Main;
