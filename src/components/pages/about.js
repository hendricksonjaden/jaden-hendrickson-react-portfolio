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
    When you want a thing bad enough to go out and fight for it,
To work day and night for it,
To give up your peace and your sleep and your time for it;
If only the desire of it makes your aim strong enough never to tire of it;
If life seems all empty and useless without it,
And all that you dream and you scheme is about it;
If gladly you’ll sweat for it, fret for it, plan for it,
Pray with all your strength for it;
If you’ll simply go after the thing that you want with all your capacity,
Strength and sagacity; faith, hope, and confidence, stern pertinacity;
If neither poverty nor cold nor famish nor gaunt
Nor sickness of pain to body or brain can turn you away from the aim
That you want;
If dogged and grim, you besiege and beset it, you’ll get it!
[Author unknown]
    </div>
    </div>
  );
}


