import React from "react";
import "./OurTeam.css";
import Head from '../img/M Gulxar Ahmad.png'
import Developer from '../img/AliHaider.jpg.jpg'
import Developer2 from '../img/Umer.jpg'

const OurTeam = () => {
  return (
    <>
      <div className="OurTeam-Top-Text">
        <h2>OUR TEAM</h2>
        <p>Alone we can do so little; together we can do so much.</p>
      </div>
      <div className="Our-Team-Flex">
        <div>
          <img
            src={Head}
            alt="Avatar"
          />
        </div>
        <div className="Our-Team-Text">
          <h3>M Gulxar Ahmad</h3>
          <h4>Creative Director</h4>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikelys
            to be found elsewhere.
          </p>
        </div>
      </div>
      <div className="Our-Team-Flex-2">
            <div className="Our-Team-Text-2">
          <h3>Syed Haider Ali</h3>
          <h4>Web Developer</h4>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.
          </p>
        </div>
        <div>
          <img
            src={Developer}
            alt="Avatar"
          />
        </div>
      </div>
      <div className="Our-Team-Flex">
        <div>
          <img
            src={Developer2}
            alt="Avatar"
          />
        </div>
        <div className="Our-Team-Text">
          <h3>Umer Afzal</h3>
          <h4>Web Developer</h4>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikelys
            to be found elsewhere.
          </p>
        </div>
      </div>
      <div className="Our-Team-Btn">
        <button>Meet All</button>
      </div>
    </>
  );
};

export default OurTeam;
