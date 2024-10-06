import React from 'react';
import style from "./animation.module.css"

const Animation = () => {
    return (
      <div className='w-screen h-[100svh] absolute top-0 -z-20'>
        <div class={style.bg}>
          <div id={style.stars}></div>
          <div id={style.stars2}></div>
          <div id={style.stars3}></div>
        </div>
      </div>
    );
};

export default Animation;