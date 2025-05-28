import React from "react";
import FlowerMain from "./FlowerMain";

const BackgroundFlowers = () => {
  return (
    <>
      <FlowerMain className="animate-emma-float invisible sm:visible absolute size-[250px] left-[2%] -top-[20%] rotate-z-75" />
      <FlowerMain className="animate-emma-float-delay-1 invisible sm:visible absolute size-[250px] right-[2%] top-[4%] rotate-z-75" />
      <FlowerMain className="animate-emma-float-delay-2 invisible sm:visible absolute size-[100px] left-0 bottom-[4%] rotate-z-215" />
      <FlowerMain className="animate-emma-float invisible sm:visible absolute size-[300px] right-[23%] -bottom-[11%] -rotate-z-70" />
      <FlowerMain className="animate-emma-float-delay-1 invisible sm:visible absolute size-[170px] right-[1%] -bottom-[4%] rotate-z-215" />
    </>
  );
};

export default BackgroundFlowers;