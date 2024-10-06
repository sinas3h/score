import React from "react";
import Animation from "../Animation/Animation";
import { fullScreen } from "../../func/full.js";
import { useState, useEffect } from "react";
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
const News = ({ title }) => {
  const [todayInPersian, setTodayInPersian] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [newsItems, setNewsItems] = useState([]);

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
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const fetchData = async () => {
    const apiUrl = "https://api-bot-pro-dubz.ir/API/agent.news.php";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        if (title === "Better Bulletin") {
          setNewsItems(["اطلاعیه موجود نیست"]);
        } else {
          setNewsItems(data);
        }
      } else {
        console.error("Invalid data format or empty data from the API.");
      }
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };
  console.log(newsItems);
  return (
    <div id="full" onClick={() => fullScreen()}>
      <Animation />
      <div className="LOGO flex items-center justify-center">
        <div
          className={`w-[2500px] min-w-[1239px] scale-[50%] mx-auto ${
            title === "Better Bulletin" ? "mt-2" : "mt-[-150px]"
          }  flex flex-col gap-8`}
        >
          <div className="bg-secondary w-full px-8 py-6 flex justify-between items-center text-white rounded-xl">
            <span className="text-[24px] font-[700]">{title}</span>
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
          <div className="flex flex-col gap-4">
            {newsItems.map((item) => (
              <div className="bg-[#DCDFE6] w-full px-6 py-4 flex justify-start items-center gap-8 text-white rounded-xl">
                <div className="w-[56px] h-[56px] bg-primary flex items-center justify-center rounded-lg">
                  <div className="w-[35px] h-[35px] flex items-center justify-center bg-[#DCDFE6] rounded-full">
                    <img
                      src="src/assets/images/qeshm_air_logo_574831_13940718-194105.svg"
                      alt=""
                    />
                  </div>
                </div>
                <span className="text-[#041128] text-[18px] font-[500]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
