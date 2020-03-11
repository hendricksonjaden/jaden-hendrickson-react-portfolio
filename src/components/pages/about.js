import React, { Component } from 'react';
import profilePicture from "../../../static/assets/images/auth/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper"> 
    <div 
      className="left-column"
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
    <div className="right-column">
      "Form ranks you maggots! Pikes in front, archers behing!"
      "Arise! Arise riders of Theoden! Spears shall be shaken! Spears shall be splintered! 
      A sword day. A red day. And the sun rises! Ride now! Ride now! Ride! 
      Ride for ruin and the worlds ending! DEATH!! DEATH!! DEATH!! Forth erolingas!!"
    </div>
    </div>
  );
}


