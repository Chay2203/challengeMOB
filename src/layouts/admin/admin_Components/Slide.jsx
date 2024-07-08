import React from "react";




export default function Slide({img_src,week,challanges}){
  const Container={
    height:"100vh",
    width:"100vw"
  }

  return (
        <div className="slide" style={{ width: "370px"}}>

          <div className="img_slide">
            <img style={{ width: "370px", height: "200px", borderRadius: "20px"  }} src={img_src}></img>
          </div>
          <div className="slide_info">
           
            <h2 style={{ fontWeight: 700 }}>Week {week}</h2>
            <p>No of challanges {challanges}</p>
  
            <div className="button_comp">
            <button  className="rounded-xl bg-blue-500 px-20 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
            Start</button>
            </div>
          </div>
        </div>
  );
}
  
