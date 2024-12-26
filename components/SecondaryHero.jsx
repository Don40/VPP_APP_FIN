import React from 'react';

const SecondaryHero = ({ bgImage, text, paragraph, textStyle, paragraphStyle }) => {
  return (
    <div
      className="relative w-full h-[95vh] bg-cover bg-center animate-move md:animate-moveDesktop"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "75.1%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark transparent background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark transparent background
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        {/* Content container with rounded background */}
        <div
          className="rounded-lg p-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker transparent background
          }}
        >
         {/* Title with dynamic text style */}
         <h1 className="text-white font-bold text-center" style={textStyle}>
            {text}
          </h1>
          {/* Paragraph with dynamic text style */}
          <p
            className="text-white mt-4 text-center"
            style={paragraphStyle}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHero;
