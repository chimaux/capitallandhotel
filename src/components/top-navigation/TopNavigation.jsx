import React, { useEffect, useState } from "react";
import "./topNavigation.scss";
import logo from "./logo.jpg";
import { Link } from 'react-scroll';
import { UseGlobalContext } from "../../Context";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import "animate.css";

export const TopNavigation = () => {

  const { page, set_page } = UseGlobalContext();
  const [nav_hover, set_nav_hover] = useState("");
  const [open_close_nav, set_open_close_nav] = useState(false);


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={`top-navigation-container  ${isScrolled ? 'scrolled' : ''} ${page !== "home" ?"top_nav_color":"" }`}>
      <div
        className={`${
          open_close_nav === false
            ? "mobile_nav_container"
            : "mobile_nav_container_active"
        } `}
      >
        {open_close_nav === true ? (
          <>
            <Link className="mnc_link_container" 
                      to="home" 
                      smooth={true} 
                      duration={500} 
                      offset={-200}
                      style={{ cursor: 'pointer', color:"#fff"}} 
                      onClick={()=>{
                        set_open_close_nav(false)
                        set_page("home")
                      }}
            >

              <div
                className={`mlc_item `}
              >
                Home
              </div>
            </Link>
            <Link className="mnc_link_container" 
                   to="about" 
                   smooth={true} 
                   duration={500} 
                   
                   style={{ cursor: 'pointer', color:"#fff" }} 
                   onClick={()=>set_open_close_nav(false)}
            >
              <div
                className={`mlc_item `}
              >
                About
              </div>
            </Link>
        
            <Link className="mnc_link_container"       
                to="services" 
            smooth={true} 
            duration={500} 
            offset={-200}
            style={{ cursor: 'pointer',color:"#fff" }}
            onClick={()=>{
              set_open_close_nav(false)
              set_page("services")
            }}
            >
              <div
                className={`mlc_item `}
              >
               Services
              </div>
            </Link>
            <Link className="mnc_link_container"       
                to="our-meals" 
            smooth={true} 
            duration={500} 
            offset={-200}
            style={{ cursor: 'pointer',color:"#fff" }}
            onClick={()=>{
              set_open_close_nav(false)
              set_page("our-meals")
            }}
            >
              <div
                className={`mlc_item `}
              >
                Our delicacies
              </div>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="tnc-logo-container">
<div style={{
  borderRadius:"50%",
  overflow:"hidden"
}}>
<Link to="/">
          <img src={logo} alt="" className="tlc-logo" />
        </Link>
</div>
        <div className="tlc-text">JJCapital Land Hotel & Suites</div>
      </div>
      {open_close_nav === false ? (
        <HiOutlineMenu
          onClick={() => set_open_close_nav(true)}
          className="animate__animated animate__fadeIn menu-icon"
          style={{
            zIndex:999
          }}
        />
      ) : (
        <MdOutlineClose
          onClick={() => set_open_close_nav(false)}
          className="animate__animated animate__fadeIn menu-icon"
          style={{
            zIndex:999
          }}
        />
      )}

      <div className="tnc-nav-links-container">
        <ul className="tnlc-navlist">
          <Link
            className="tn-link"
            onMouseEnter={() => set_nav_hover("home")}
            onMouseLeave={() => set_nav_hover("")}
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-200}
            style={{ cursor: 'pointer' }} 
          >
            <li className={`nav-li `}>
              Home
            </li>
            <div
              className={` ${
                nav_hover === "home"
                  ? "custom-top-nav-border-hover"
                  : "custom-top-nav-border"
              }`}
            ></div>
          </Link>
          <Link
            className="tn-link"
            onMouseEnter={() => set_nav_hover("about")}
            onMouseLeave={() => set_nav_hover("")}
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-200}
            style={{ cursor: 'pointer' }} 
          >
            {" "}
                    
            <li className={`nav-li `}>
             About
            </li>

            <div
              className={` ${
                nav_hover === "about"
                  ? "custom-top-nav-border-hover "
                  : "custom-top-nav-border"
              }`}
            ></div>
          </Link>
          <Link
            className="tn-link"
            onMouseEnter={() => set_nav_hover("services")}
            onMouseLeave={() => set_nav_hover("")}
            to="services" 
            smooth={true} 
            duration={500} 
            offset={-200}
            style={{ cursor: 'pointer' }} 
          >
            {" "}
                    
            <li className={`nav-li `}>
             Services
            </li>

            <div
              className={` ${
                nav_hover === "services"
                  ? "custom-top-nav-border-hover "
                  : "custom-top-nav-border"
              }`}
            ></div>
          </Link>
          <Link
            className="tn-link"
            onMouseEnter={() => set_nav_hover("our-meals")}
            onMouseLeave={() => set_nav_hover("")}
            to="our-meals" 
            smooth={true} 
            duration={500} 
            offset={-200}
            style={{ cursor: 'pointer' }} 
          >
            <li className={`nav-li`}>
              Our delicacies
            </li>
            <div
              className={` ${
                nav_hover === "our-meals"
                  ? "custom-top-nav-border-hover"
                  : "custom-top-nav-border"
              }`}
            ></div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopNavigation;
