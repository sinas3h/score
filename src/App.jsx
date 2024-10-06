import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/SignUp/SignUp";
import Score from "./components/Score/Score";
import Menu from "./components/Menu/Menu";
import Logo from "./components/Logo/Logo";
import News from "./components/News/News";
import Price from "./components/Price/Price";
import Home from "./components/Home/Home";
import { useState } from "react";
import Animation from "./components/Animation/Animation";
import Video from "./components/Video/Video";

function App() {
  return (
    <>
      {/* <Animation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/score"
          element={
            <Score
              title={"مشاورین برتر ماه"}
              award={{
                first: "Mobile Xiaomi Note 12",
                second: "بیمه تکمیلی سامان بمدت یکسال",
                third: "Powerbank Xiaomi",
              }}
            />
          }
        />
        <Route
          path="/score-yearly"
          element={
            <Score
              title={"مشاورین برتر سال"}
              award={{
                first: "تور ترکیه",
                second: "تور کیش",
              }}
            />
          }
        />
        '
        <Route path="/logo" element={<Logo />} />
        <Route path="/video" element={<Video />} />
        <Route path="/news" element={<News title={"Better News"} />} />
        <Route
          path="/news-notif"
          element={<News title={"Better Bulletin"} />}
        />
        <Route path="/price" element={<Price />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
