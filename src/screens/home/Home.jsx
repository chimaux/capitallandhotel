import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./home.scss";
import "animate.css";
import prev from "./prev.png";
import next from "./next.png";
import quote from "./quote.png";
import aboutImage from "./building.jpg";
import room from "./room.jpg";
import room2 from "./room2.jpg";
import food from "./heroImage2.jpg"
import { MdUnfoldMore } from "react-icons/md";


import TelegramJoinButton from "../../components/telegramJoinButton/TelegramJoinButton";




export const Home = () => {



const [imageA,setImageA] = useState(true)

  const objectiveData = [
    {
      title: "Token of Unity: Supporting Heroes, Rebuilding Communities, and Spreading Joy",
      text: <>
        <p className="objectiveDataText">
        Build a vibrant ecosystem where every token fuels assistance for our brave heroes, accelerates recovery efforts, and creates joyful moments. Together, we champion resilience by turning small actions into transformative change. Each token represents gratitude, hope, and a step toward rebuilding lives. This mission celebrates courage, fosters unity, and shows how giving back can be impactful and uplifting.
        </p>
      </>,
    },
  ];







  const [showContent, setShowContent] = useState({
    showNum:0,
    showBooleanValue:false
  });

const {showNum,showBooleanValue}=showContent

console.log(showBooleanValue,"working")


  const handleDragStart = (e) => e.preventDefault();
  const itemBanner = [
    <>
      <div
        onDragStart={handleDragStart}
        role="presentation"
        className={`hc-hero-section1`}
      ></div>
      <div className="hc-hero-section-overlay">
        <div className="hero-text">
        <p className="ht-text">No meetings, just massages: Escaping Lagos one plush pillow at a time. 🛏️✨ <span className="unique">JJCapital—where your OOO reply finally makes sense.</span></p>

          <div className="open-quote-container">
            <img src={quote} alt="" className="open-quote" />
     
          </div>
        </div>
      </div>
    </>,
    <>
      <div
        onDragStart={handleDragStart}
        role="presentation"
        className={`hc-hero-section`}
      ></div>
      <div className="hc-hero-section-overlay">
        <div className="hero-text">
        <p className="ht-text">No WiFi password, no stress—just Afang soup bold enough to reboot your soul. 🌿💥</p>
          <div className="open-quote-container">
            <img src={quote} alt="" className="open-quote" />
     
          </div>
        </div>
      </div>
    </>,
    <>
      <div
        onDragStart={handleDragStart}
        role="presentation"
        className={`hc-hero-section2`}
      ></div>
      <div className="hc-hero-section-overlay"> 
      <div className="hero-text">
      <p className="ht-text">No filters, just spark: Frequent happy couples turning every day into a love fest. ❤️🎉 <span className="unique">Because true love is our favorite token of joy.</span></p>

          <div className="open-quote-container">
            <img src={quote} alt="" className="open-quote" />
           
          </div>
        </div>
      </div>
    </>,
        <>
        <div
          onDragStart={handleDragStart}
          role="presentation"
          className={`hc-hero-section3`}
        ></div>
        <div className="hc-hero-section-overlay"> 
        <div className="hero-text">
        <p className="ht-text">No noise, just nuance: Serenity so smooth, even your thoughts exhale. 🌿🕊️ <span className="unique">Relaxation isn’t a luxury—it’s the baseline here.</span></p>

            <div className="open-quote-container">
              <img src={quote} alt="" className="open-quote" />
         
            </div>
          </div>
        </div>
      </>,
  ];

  return (
    <div className="home-container" id="home">
      {/* <div className={`hc-hero-section`}></div> */}
      <AliceCarousel
        mouseTracking
        items={itemBanner}
        // disableDotsControls
        animationDuration={500}
        // autoPlay
        // infinite
        renderDotsItem= {({isActive})=>{
           
      return(
        <div className={`${isActive === true ? "dot-active":"dot-inactive"}`} >

        </div>
      )
        }}
        autoHeight
        autoPlayStrategy="none"
   
        renderPrevButton={() => (
          <div className="previous">
            <img className="slider_prev" src={prev} alt="" />
          </div>
        )}
        renderNextButton={() => (
          <div className="next">
            <img className="slider_next" src={next} alt="" />
          </div>
        )}
      />

<div className="home_body">
  
<div className="about_program-container">



<div className="apc1">
<p className="apc_title"  id="about">JJCapital Land Hotel</p>
<p className="apc_title2">Welcome to JJCapital Land Hotel – Lagos’ Hidden Gem of Serenity & Style!</p>
<p className="apc_text">
  

Escape the hustle of Lagos and unwind in tranquil luxury at JJCapital Land Hotel, where exceptional service meets affordability. With 12 beautifully appointed rooms, a vibrant bar, and a homely kitchen serving delicious meals, we offer a personalized retreat designed for comfort and relaxation.
</p>
<p className="apc_title2">
✨ Why Choose Us?
</p>
<p className="apc_text">
✔ Intimate & Peaceful – Only 12 rooms means exclusive attention for every guest.
</p>
<p className="apc_text">
✔ Exceptional Service – From check-in to check-out, we treat you like family.
</p>
<p className="apc_text">
✔ Tasty Bites & Sips – Enjoy local & continental dishes and refreshing drinks at our bar.
</p>
<p className="apc_text">
✔ Prime Location – Close enough to explore Lagos, yet far enough to enjoy serenity.
</p>
<p className="apc_text">
Whether you're here for business or leisure, JJCapital Land Hotel is your perfect home away from home. Book your stay today and experience Lagos hospitality at its finest!

</p>


<div className="apct_button">
 
 <TelegramJoinButton  link="https://wa.me/+2349072027229" />
 

</div>


</div>

<div className="apc2">
<img src={aboutImage} alt=""  className="apc2_image"/>
<div className="about_image">

</div>
</div>
      </div>

  
    
<div className="about_program-container2">
<div className="apc1"

>
<p className="apc_title3"
id="services"
>✨ Our Simple & Thoughtful Services</p>


<p className="apc_text">
  ✔ <strong>24/7 Power</strong> – Uninterrupted light and electricity supply
</p>
<p className="apc_text">
  ✔ <strong>Comfy Rooms</strong> – 12 air-conditioned rooms with fresh linens & daily cleaning
</p>
<p className="apc_text">
  ✔ <strong>Daily Breakfast</strong> – Start your day with our complimentary morning meal
</p>
<p className="apc_text">
  ✔ <strong>Always Open</strong> – 24/7 front desk for your needs anytime
</p>
<p className="apc_text">
  ✔ <strong>Bar Service</strong> – Cold drinks & tasty snacks in our lounge
</p>
<p className="apc_text">
  ✔ <strong>Home Cooking</strong> – Hearty local dishes made to order
</p>
<p className="apc_text">
  ✔ <strong>Fresh Laundry</strong> – Quick cleaning service available
</p>
<p className="apc_text">
  ✔ <strong>Peace of Mind</strong> – Secure premises with CCTV monitoring
</p>

<p className="apc_subtext" style={{fontStyle: "italic"}}>
Prices for our rooms ranges from &nbsp;&#8358;&nbsp;12,000 - &nbsp;&#8358;&nbsp;15,000
</p>
</div>
<div className="apc2" 
onMouseEnter={()=>setImageA(false)}
onMouseLeave={()=>setImageA(true)}
>
  {
    imageA === true ? <img src={room} alt=""  className="apc2_image"/> 
    : 
    <img src={room2} alt=""  className="apc2_image"/>
  }
{/* 
<div className="about_image">

</div> */}
</div>
      </div>

  

      <div className="about_program-container">
<div className="apc1">
<p className="apc_title"
id="our-meals"
style={{
  marginBottom:"20px"
}}
>🍛 Our Meals & Prices</p>




<p className="apc_text">
  ✔ <strong>Jollof Rice</strong> – ₦3,500 (with chicken/fish) | ₦2,500 (vegetable only)
</p>
<p className="apc_text">
  ✔ <strong>Pounded Yam</strong> – ₦4,500 (with egusi/ogbono soup + assorted meat)
</p>
<p className="apc_text">
  ✔ <strong>Egusi Soup</strong> – ₦4,000 (with fufu/semo + fish/meat)
</p>
<p className="apc_text">
  ✔ <strong>Pepper Soup</strong> – ₦5,000 (goat meat) | ₦6,500 (catfish)
</p>
<p className="apc_text">
  ✔ <strong>White Rice & Stew</strong> – ₦3,200 (beef) | ₦3,500 (chicken)
</p>
<p className="apc_text">
  ✔ <strong>Eba & Okra Soup</strong> – ₦3,500 (with stockfish/offals)
</p>
<p className="apc_text">
  ✔ <strong>Small Chops Platter</strong> – ₦3,000 (spring rolls, puff-puff, samosas, kebabs)
</p>
<p className="apc_subtext" style={{fontStyle: "italic"}}>
  *All meals come with a free bottle of water. Swallows are served with soup of the day.
</p>


<div className="apct_button">
 
 <TelegramJoinButton  link="https://wa.me/+2349072027229" />
 

</div>
</div>
<div className="apc2">
<img src={food} alt=""  className="apc2_image"/>
<div className="about_image">

</div>
</div>
      </div>
    
</div>
    </div>
  );
};

export default Home;
