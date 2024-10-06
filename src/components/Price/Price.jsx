import React from "react";
import { fullScreen } from "../../func/full.js";
import Animation from "../Animation/Animation";
import { useState, useEffect } from "react";
const apiKeyDollar = "cif9gcz1v18qobirieru";
const apiUrlAll =
  "https://studio.persianapi.com/index.php/web-service/common?format=json&limit=368&page=1";

async function fetchDataFromAPI() {
  try {
    // Fetch data from the first API
    const response1 = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=CCCAGG&api_key=${apiKeyDollar}`
    );
    const data1 = await response1.json();
    console.log("Data from the first API:", data1);

    // Fetch data from the second API
    const response2 = await fetch(apiUrlAll, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKeyDollar}`,
      },
    });
    const data2 = await response2.json();
    console.log("Data from the second API:", data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function slicePrice(Number) {
  const formattedNumber = Number.toLocaleString("fa-IR");
  return formattedNumber;
}

function rialToToman(price) {
  return Number(price.toString().slice(0, -1));
}
function getPersianDayOfWeek() {
  const today = new Date();
  const persianDaysOfWeek = [
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];
  const dayOfWeek = today.getDay();
  return persianDaysOfWeek[dayOfWeek];
}
const Price = () => {
  const [todayInPersian, setTodayInPersian] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [BtcPrice, SetbtcPrice] = useState(0);
  const [AllPrice, SetAllprice] = useState([]);

  useEffect(() => {
    // Call fetchDataFromAPI initially
    fetchDataFromAPI();

    // Set interval to call fetchDataFromAPI every 10 seconds
    const interval = setInterval(() => {
      fetchDataFromAPI();
    }, 15000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const fetchBtcPrice = async () => {
    try {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=CCCAGG"
      );
      const data = await response.json();
      SetbtcPrice(data.USD);
    } catch (error) {
      console.error("Error fetching BTC price:", error);
    }
  };

  useEffect(() => {
    fetchBtcPrice();

    const interval = setInterval(() => {
      fetchBtcPrice();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchDateTime = () => {
      const interval = setInterval(() => {
        setTodayInPersian(getPersianDayOfWeek());
        setCurrentDate(new Date().toLocaleDateString("fa-IR"));
        setCurrentTime(
          new Date().toLocaleTimeString("fa-IR", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })
        );
      }, 1000);
      return () => clearInterval(interval);
    };

    fetchDateTime();
  }, []);

  return (
    <div id="full" onClick={() => fullScreen()}>
      <Animation />
      <div className=" LOGO flex items-center justify-center">
        <div className="w-[2500px] min-w-[1239px] scale-[68%] mx-auto mt-[-30px] flex flex-col gap-8">
          <div className="bg-secondary w-full px-8 py-6 flex justify-between items-center text-white rounded-2xl">
            <span className="text-[24px] font-[700]">
              قیمت
              <span className="mr-2 text-[16px]">(قیمت ها به تومان است)</span>
            </span>
            <div className="flex gap-3 justify-end items-center">
              <img
                className="w-[32px] h-auto"
                src="src/assets/images/calendar.svg"
                alt="calender"
              />
              <span className="text-[24px] font-[700]">
                امروز {todayInPersian}
              </span>
              <span className="text-[20px] mr-2">{currentTime}</span>
              <span className="text-[20px]">{currentDate}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 text-[20px] font-[700] gap-0 w-full rounded-3xl overflow-hidden relative">
            <div>
              <div className="bg-[#cedef9c4] p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-white/90 p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-[#cedef9c4] p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-white/90 p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-[#cedef9c4] p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
            </div>
            <div>
              <div className="bg-[#cedef9c4] p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-white/90 p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-[#cedef9c4] p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
              <div className="bg-white/90 p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className=""> بیت کویین </span>
                </div>
                <span>{slicePrice(BtcPrice)}</span>
              </div>
              <div className="bg-[#cedef9c4] p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[14px] h-[14px]"
                    src="src/assets/images/Polygon-2.svg"
                    alt=""
                  />
                  <span className="">ارزش شاخص کل بورس</span>
                </div>
                <span>2،055،944</span>
              </div>
            </div>
            <span className="absolute border-l-2 border-dashed border-primary left-[50%] translate-x-[-50%] z-10 h-full text-transparent">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
