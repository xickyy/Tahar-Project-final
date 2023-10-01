import "./OpenTaharResponse.css";

import React from "react";


function OpenTaharResponse({review}) {


  return (
    <div className="tahar-response-modal-container">
      <p className="tahar-response-name">{review.name} reply to: <br></br>{review.author_title}</p>
      <p>{review.owner_answer}</p>
    </div>
  )
}


export default OpenTaharResponse;
