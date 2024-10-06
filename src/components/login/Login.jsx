import React from "react";
import Header from "../Header/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="container sm:w-2/3 md:w-2/3 max-w-[522px] text-color-text-primary">
        <form className=" bg-white flex flex-col gap-10 py-6 px-4 md:py-8 md:px-7 top-[-130px] md:top-[-60px] z-20 relative shadow-lg shadow-black/5 rounded-xl">
          <h2 className="text-[15px] md:text-[18px] font-bold text-[#000929]">
            ورود/ثبت نام
          </h2>
          <div className="flex flex-col items-center gap-2 w-full">
            <label className="text-[14px] font-[500] text-right w-full">
              شماره همراه خود را وارد کنید
            </label>
            <input
              className="w-full outline-none border-[1px] border-[#E0DEF7] py-[12px] px-[16px] h-[48px] rounded-lg bg-[#F7F7FA]"
              type="tel"
            />
          </div>
          <button className="w-full text-[14px] font-[500] py-[14px] px-[16px] bg-primary rounded-lg text-white">
            ادامه
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
