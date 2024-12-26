// pages/index.js
"use client";
import AboutUs from '@/components/AboutUs';
import GiveSection from '@/components/GiveSection';
import Hero from '@/components/Hero';
import MyMap from '@/components/MyMap';
import Nav from '@/components/Nav';
import NotificationSection from '@/components/NotificationSection';
import VisitUsSection from '@/components/VisitUsSection';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; // Example of using an icon
import Banner from '@/components/Banner';
import JoinLink from '@/components/JoinLink';
import SecondaryHero from '@/components/SecondaryHero';
import AudioPlayer from '@/components/AudioPlayer';

const Home = () => {
  const markerPosition = [25.589413663131815, 91.87529363647245];

  return (
    <div className='relative'>
      <Banner 
        message="JOIN VPP TO ENSURE CHANGE!!!" 
        bgColor="bg-yellow-500"
        textColor="text-white font-playfair"
        icon={<FaExclamationCircle />}
      />
      <Nav />

      <SecondaryHero
        bgImage="/images/vpplogo.webp"
        text="MESSAGE FROM THE VOICE OF THE PEOPLE PARTY!"
        paragraph={`&nbsp;&nbsp;&nbsp;&nbsp;Our aim is to bring a real and complete change in the governance of the state with a strong, clean 
        and decisive leadership and also an all round and inclusive development. <br>
        &nbsp;&nbsp;&nbsp;&nbsp;Change is possible and can take place only if we can get the support and cooperation from 
        all the people who are concerned about the well being of the state. It is therefore the duty and responsibility of
        every right thinking person to support this effort to bring a real and complete change in our state. 
        Therefore, no matter what comes in our way, our commitment to the cause will not be weakened.`}
        textStyle={{ fontSize: "1.5rem" }} // Example of inline style for text size
        paragraphStyle={{ fontSize: "1rem", textAlign: "justify" }} // Example of inline style for paragraph size
      />
      
      <AboutUs />
        {/* Center Audio Player */}
        <div className="flex justify-center items-center py-12">
        <AudioPlayer src="/audio-file.mp4" title="AUDIO" />
      </div>
    </div>
  );
};

export default Home;
