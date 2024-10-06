import React, { useEffect } from "react";
import Animation from "../Animation/Animation";
import { fullScreen } from "../../func/full.js";
import { useLocation, useNavigate } from "react-router-dom";

const Logo = () => {
  //  const navigate = useNavigate();

  //  useEffect(() => {
  //    setInterval(() => {
  //        navigate("/news");
  //    }, 3000);
  //  }, []);
  return (
    <div id="full" onClick={() => fullScreen()}>
      <Animation />
      <div className="LOGO flex items-center justify-center text-white mx-auto h-screen w-full">
        <img
          className="w-[500px] h-auto mx-auto"
          src="src/assets/images/Better-Logo-1.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Logo;
