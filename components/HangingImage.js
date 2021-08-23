import React, { useState } from "react";

function HangingImage (hanging){

  if (hanging === 6){
    return (
      <div className ="hanging-image">
        <img className="six-hp" src="/images/SVG/six-hp.svg" alt="six-hp Picture" />
      </div>
    )
  }
  if (hanging === 5){
    return (
      <img className="five-hp" src="/images/SVG/five-hp.svg" alt="five-hp Picture" />
    )
  }
  if (hanging === 4){
    return (
      <div className ="hanging-image">
        <img className="four-hp" src="/images/SVG/four-hp.svg" alt="four-hp Picture" />
      </div>
    )
  }
  if (hanging === 3){
    return (
      <div className ="hanging-image">
        <img className="three-hp" src="/images/SVG/thre-hp.svg" alt="three-hp Picture" />
      </div>
    )
  }
  if (hanging === 2){
    return (
      <div className ="hanging-image">
        <img className="two-hp" src="/images/SVG/two-hp.svg" alt="two-hp Picture" />
      </div>
    )
  }
  if (hanging === 1){
    return (
      <div className ="hanging-image">
        <img className="one-hp" src="/images/SVG/one-hp.svg" alt="one-hp Picture" />
      </div>
    )
  }
  if (hanging === 0){
    return (
      <div className ="hanging-image">
        <img className="zero-hp" src="/images/SVG/zero-hp.svg" alt="zero-hp Picture" />
      </div>
    )
  }
  return (
    <div className ="hanging-image"></div>
  )
}
export default HangingImage;
