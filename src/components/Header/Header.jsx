import React from "react";

const Header = () => {
  return (
    <div className="bg-[#3b4c8b] h-[265px] bg-[url('src/assets/images/header-background.svg')] bg-center">
      <div className="container w-full pt-12 md:pt-20 gap-4">
        <span className="">
          <img
            src="src/assets/images/Frame9.svg"
            alt=""
            className="w-[94px] md:w-[120px] h-auto mx-auto"
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
