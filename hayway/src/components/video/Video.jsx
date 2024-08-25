import React from "react";
import timelapse from "../../assets/grow.mp4";

const Video = () => {
  return (
    <div>
      <video autoPlay loop muted width="100%">
        <source src={timelapse} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;