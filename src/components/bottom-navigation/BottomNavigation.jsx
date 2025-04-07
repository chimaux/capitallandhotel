import React from "react";
import "./bottom.scss";
import telegram from "./telegram.png";
// import twitter from "./twitter.png";

export const BottomNavigation = () => {
  return (
    <div className="footer">
      <div className="top_bottom">
      {/*   <a
          href="https://t.me/+GpVvIv3hAqszM2M0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <img src={telegram} alt="" className="two_icons" />
        </a> */}
        {/* <a
          href="https://t.me/+GpVvIv3hAqszM2M0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#fff" }}
        >
           <img src={twitter} alt="" className="two_icons" />
        </a> */}

     
      </div>
      <div className="bottom_bottom">
        copyright &copy; 2025 JJCapital Land Hotel & Suites
      </div>
    </div>
  );
};

export default BottomNavigation;
