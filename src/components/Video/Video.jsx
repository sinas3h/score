import React, { useEffect } from "react";
import { fullScreen } from "../../func/full";

const Video = () => {
  
  return (
    <div className="w-screen h-screen">
      <video
        id="full"
        className="w-screen h-screen"
        src="https://video021.s3.ir-tbz-sh1.arvanstorage.ir/BetterHome.mp4"
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Video;

{
  /* <video id="myVideo" width="100%" height="100%"  autoplay onended="restartVideo()" muted>
        <source src="https://video021.s3.ir-tbz-sh1.arvanstorage.ir/BetterHome.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    
    <script>
        function restartVideo() {
            var video = document.getElementById("myVideo");
            video.currentTime = 0; // نقطه شروع را به ابتدا باز می‌گرداند
            video.play(); // ویدیو را دوباره پخش می‌کند
        }
    
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("myVideo").play();
        });
    </script> */
}
