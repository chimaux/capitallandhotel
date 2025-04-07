import React from 'react';


const TelegramJoinButton= ({
  link,
  buttonText = "Talk to Us on Whatsapp",
}) => {
  return (
    <a

      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration:"none", color:"#fff"}}

    >
        <div
              style={{ padding: "10px 20px"}}
        >
        {buttonText}
        </div>
    
    </a>
  );
};

export default TelegramJoinButton;
