import "./OpenLargeImg.css";

import React from "react";


function OpenLargeImg({review}) {


  return (
    <div className="m-2">
      <img className="open-large-image-img w-full h-full max-w-full " src={review} alt=''></img>
    </div>
    )
}


export default OpenLargeImg;
