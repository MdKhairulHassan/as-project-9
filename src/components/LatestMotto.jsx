import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestMotto = () => {
  return (
    <div className="flex items-center gap-5 bg-secondary p-3">
      <p className="bg-primary text-2xl text-black px-3 py-2">Watchword</p>
      <Marquee pauseOnHover={true} className="flex font-bold">
        <p className="pl-3">"Growing a greener tomorrow."</p>
        <p className="pl-3">"Where nature begins with you."</p>
        <p className="pl-3">"Plant today. Protect tomorrow."</p>
        <p className="pl-3">"Together, we grow a sustainable future."</p>
        <p className="pl-3">"Rooted in nature. Built for the future."</p>
        <p className="pl-3">"Green choices for a better planet."</p>
        <p className="pl-3">"Nurturing trees, nurturing life."</p>
        <p className="pl-3">"Because every tree matters."</p>
      </Marquee>
    </div>
  );
};

export default LatestMotto;
