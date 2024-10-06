import React from "react";

import menuIcon from "/src/assets/images/menu/teenyicons_home-solid.svg";
import proIcon from "/src/assets/images/menu/pro.svg";

const Menu = () => {
  return (
    <div className="w-[240px] p-4">
      <ul className="flex flex-col gap-4">
        <li>
          <button className="w-full flex gap-4 justify-start items-center py-3 px-6 focus:bg-primary/10 rounded-lg">
            <img
              className="w-6 h-6 fill-slate-500"
              src={menuIcon}
              alt="homeIcon"
            />
            <span className="text-[14px] font-[500] text-primary">داشبورد</span>
          </button>
        </li>
        <li>
          <button className="w-full flex gap-4 justify-start items-center py-3 px-6 text-[#828892] focus:bg-primary/10 focus:text-primary rounded-lg">
            <img
              className="w-6 h-6 text-[#828892]"
              src={proIcon}
              alt="homeIcon"
            />
            <span className="text-[14px] font-[500] text-primary">داشبورد</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
