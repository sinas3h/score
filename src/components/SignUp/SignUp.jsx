import React, { useState } from "react";
import Header from "../Header/Header";

const SignUp = () => {
  const [openList, setOpenList] = useState(false);
  const [selectList, setSelectList] = useState("انتخاب کنید");

  return (
    <div>
      <Header />
      <div className="container sm:w-2/3 md:w-2/3 max-w-[522px] text-color-text-primary">
        <form className=" bg-white flex flex-col gap-10 py-6 px-4 md:py-8 md:px-7 top-[-130px] md:top-[-60px] z-20 relative shadow-xl shadow-black/5 rounded-xl">
          <h2 className="text-[15px] md:text-[18px] font-[700] text-[#000929]">
            فرم ثبت نام را تکمیل کنید
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 w-full">
              <label className="text-[14px] font-[500] text-right w-full">
                نام و نام خانوادگی
              </label>
              <input
                className="w-full outline-none border-[1px] border-[#E0DEF7] py-[12px] px-[16px] h-[48px] rounded-lg bg-[#F7F7FA]"
                type="text"
              />
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <label className="text-[14px] font-[500] text-right w-full">
                کد ملی
              </label>
              <input
                className="w-full outline-none border-[1px] border-[#E0DEF7] py-[12px] px-[16px] h-[48px] rounded-lg bg-[#F7F7FA]"
                type="text"
              />
            </div>
            <div className="flex flex-col relative items-center gap-2 w-full">
              <label className="text-[14px] font-[500] text-right w-full">
                منطقه فعالیت خود را انتخاب کنید{" "}
                <span className="text-[8px] md:text-[14px]">
                  (قابلیت تغییر: دوبار در ماه)
                </span>
              </label>
              <div
                className={`w-full py-[12px] px-[16px] h-[48px] cursor-pointer ${
                  openList && "border-b-0 rounded-b-none"
                }  flex flex-col items-center gap-4 border-[1px] border-[#E0DEF7] rounded-lg bg-[#F7F7FA] select-none`}
                onClick={() => setOpenList(!openList)}
                type="text"
              >
                <div className="flex w-full justify-between items-center">
                  <span
                    className={`text-[14px] font-[500] ${
                      selectList === "انتخاب کنید"
                        ? "text-[#434C5D]"
                        : "text-primary opacity-80"
                    } opacity-50`}
                  >
                    {selectList}
                  </span>
                  <span>
                    <img
                      className={`${openList && "rotate-180"} transition-all`}
                      src="src/assets/images/Dropdown/Icon.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div
                  className={`absolute overflow-hidden text-[14px] right-0 left-0 top-16 w-full border-[1px] border-t-0 border-[#E0DEF7] pt-4 rounded-b-lg bg-[#F7F7FA] ${
                    openList ? "block" : "hidden"
                  } flex flex-col`}
                >
                  <span
                    className="w-full hover:bg-[#e2e2e5] p-4 transition-all"
                    onClick={() => setSelectList("منطقه یک")}
                  >
                    منطقه یک
                  </span>
                  <hr />
                  <span
                    className="w-full hover:bg-[#e2e2e5] p-4 transition-all"
                    onClick={() => setSelectList("منطقه دو")}
                  >
                    منطقه دو
                  </span>
                  <hr />
                  <span
                    className="w-full hover:bg-[#e2e2e5] p-4 transition-all"
                    onClick={() => setSelectList("منطقه سه")}
                  >
                    منطقه سه
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full text-[14px] font-[500] py-[14px] px-[16px] bg-primary rounded-lg text-white">
            ثبت
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
