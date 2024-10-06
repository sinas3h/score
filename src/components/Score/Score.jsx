import React from "react";
import Animation from "../Animation/Animation";
import { fullScreen } from "../../func/full.js";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Score = ({ title, award }) => {
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setInterval(() => {
  //     if (location.pathname === "/score-yearly") {
  //       navigate("/logo");
  //     }
  //       else {
  //         navigate("/score-yearly");
  //       }

  //   }, 3000);
  // }, []);

  console.log(location);

  const expirationDate = new Date("2023-12-21T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const timeDifference = expirationDate.getTime() - new Date().getTime();
    if (timeDifference <= 0) {
      clearInterval(intervalId);
      console.log("تایمر به پایان رسید!");
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days: days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="full" onClick={() => fullScreen()}>
      <Animation />

      <div className="LOGO flex items-center justify-center">
        <div className="w-[2500px] min-w-[1239px] p-2 mx-auto mt-[-50px] z-50 scale-[68%]">
          <div className="w-full relative h-[85px] bg-[#363636] p-1 rounded-3xl">
            <div className="w-full relative">
              <div className="h-24 w-[420px] text-center absolute left-[50%] translate-x-[-50%] mx-auto bottom-[-40px] rounded-t-[60px] bg-[#262626] z-10">
                <span className="text-white relative top-5">{title}</span>
              </div>
              <div className="h-8 w-full absolute bottom-[-40px] right-0 rounded-xl bg-[#4A4A4A] z-20"></div>
              <div className="h-8 w-full text-white absolute bottom-[-50px] right-0 rounded-xl bg-[#363636] z-30">
                <div className="flex items-center justify-center gap-8 text-[11px] relative top-[6px]">
                  <div className="flex flex-col gap-1 items-center justify-between">
                    <div className="border-[1px] border-white w-8 h-8 rounded-md flex justify-center items-center">
                      <span>{timeLeft.days}</span>
                    </div>
                    <span>روز</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-between">
                    <div className="border-[1px] border-white w-8 h-8 rounded-md flex justify-center items-center">
                      <span>{timeLeft.hours}</span>
                    </div>
                    <span>ساعت</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-between">
                    <div className="border-[1px] border-white w-8 h-8 rounded-md flex justify-center items-center">
                      <span> {timeLeft.minutes}</span>
                    </div>
                    <span>دقیقه</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-between">
                    <div className="border-[1px] border-white w-8 h-8 rounded-md flex justify-center items-center">
                      <span>{timeLeft.seconds}</span>
                    </div>
                    <span>ثانیه</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#CB9044] flex flex-col items-center justify-center gap-2 text-white absolute left-8 top-[-30px] w-32 h-32 border-8 border-[#262626] rounded-full z-40">
                <span className="text-[14px] font-[400]">مشاورین</span>
                <span className="text-[14px] font-[700]">رهن و اجاره</span>
              </div>
              <div className="bg-[#CB9044] flex flex-col items-center justify-center gap-2 text-white absolute right-8 top-[-30px] w-32 h-32 border-8 border-[#262626] rounded-full z-40">
                <span className="text-[14px] font-[400]">مشاورین</span>
                <span className="text-[14px] font-[700]">خرید و فروش</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-11 h-[580px] mx-4 rounded-3xl overflow-hidden relative top-[-5px] -z-10">
            <div className="col-span-4 grid grid-rows-11">
              <div className="row-span-1 bg-[#A9B0CC] py-4"></div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
                <img
                  className="medal"
                  src="src/assets/images/first-Medal.svg"
                  alt=""
                />
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
                <img
                  className="medal"
                  src="src/assets/images/second-Medal.svg"
                  alt=""
                />
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
                {award.third && (
                  <img
                    className="medal"
                    src="src/assets/images/third-Medal.svg"
                    alt=""
                  />
                )}
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
            </div>
            <div className="col-span-3 text-center flex flex-col justify-between items-center bg-[#19275E] text-white">
              <div>
                <img
                  className="pt-8"
                  src="src/assets/images/Group-12.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[300]">جایزه نفر اول</p>
                <p className="text-[16px] font-[800] text-[#ffd52d]">
                  {award.first}
                </p>
                <p className="text-[16px] font-[400]">پکیج سوپر استار</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[300]">جایزه نفر دوم</p>
                <p className="text-[16px] font-[800] text-[#747474]">
                  {award.second}
                </p>
                <p className="text-[16px] font-[400]">پکیج سوپر استار</p>
              </div>
              {award.third && (
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-[300]">جایزه نفر سوم</p>
                  <p className="text-[16px] font-[800] text-[#ffbe51]">
                    {award.third}
                  </p>
                  <p className="text-[16px] font-[400]">پکیج سوپر استار</p>
                </div>
              )}
              <div>
                <img src="src/assets/images/Group-14.svg" alt="" />
              </div>
            </div>
            <div className="col-span-4 grid grid-rows-11">
              <div className="row-span-1 bg-[#A9B0CC] py-4"></div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
                <img
                  className="medal"
                  src="src/assets/images/first-Medal.svg"
                  alt=""
                />
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
                <img
                  className="medal"
                  src="src/assets/images/second-Medal.svg"
                  alt=""
                />
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
                {award.third && (
                  <img
                    className="medal"
                    src="src/assets/images/third-Medal.svg"
                    alt=""
                  />
                )}
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#DDDFEB] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
              <div className="row-span-1 bg-[#A9B0CC] flex items-center gap-16 pr-6">
                <img
                  className="w-[36px] h-auto"
                  src="src/assets/images/user.png"
                  alt=""
                />
                <span className="text-[15px]">در حال انتظار...</span>
                <span className="text-[15px] mr-4">0 امتیاز</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
