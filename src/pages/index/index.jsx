import "../../assets/css/common.css";
import Logo from '/src/assets/img/logo.svg';
import Twitter from '/src/assets/img/twitter.svg';
import Discord from '/src/assets/img/discord.svg';
import Instagram from '/src/assets/img/instagram.svg';
import connect_wallet from '/src/assets/img/connect_wallet.svg';
import creator1 from '/src/assets/img/creator-1.svg';
import creator2 from '/src/assets/img/creator-2.svg';
import creator3 from '/src/assets/img/creator-3.svg';
import creator4 from '/src/assets/img/creator-4.svg';
import creator5 from '/src/assets/img/creator-5.svg';
import welab_logo from '/src/assets/img/welab_logo.svg';
import about from '/src/assets/img/about.png';
import flogo from '/src/assets/img/flogo.svg';
import discord_f from '/src/assets/img/discord_f.svg';
import twitter_f from '/src/assets/img/connect_wallet.svg';
import Video from '/src/assets/img/video.mp4';


import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


  
export default function HomePage() {
  const [rem, setRem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [dataArr, setDataArr] = useState([
    {'ti':'Jieying','me':'— Senior Practitioner in Data Journalism —'},
    {'ti':'NILLab','me':'— Cross-disciplinary New Media Art Studio —'},
    {'ti':'Yixuan','me':'— Founder, Cross-disciplinary Designer —'},
    {'ti':'YUN','me':'— Art and Science Creator —'},
    {'ti':'TASHI DELAK','me':'— Musician —'},
  ]);
  
  

  const resizeHandler = () => {
    var num = 19.2;
    var docEl = document.documentElement;
    var width = docEl.getBoundingClientRect().width;
    if (width < 1000) {
      num = 7.5;
    }
    var remValue = width / num;
    remValue = parseFloat(remValue.toFixed(3));
    docEl.style.fontSize = remValue + "px";

    var realitySize = parseFloat(
      window.getComputedStyle(document.documentElement).fontSize
    );
    if (remValue !== realitySize) {
      remValue = (remValue * remValue) / realitySize;
      docEl.style.fontSize = remValue + "px";
    }
    setRem(remValue);
    window.REM = remValue;
  };

  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      delay: 600,
    });
  }, []);
  return (
    <div>
      <div className='nav_show'></div>
      <div className="header" data-aos="fade-down" data-aos-delay="100">
        <div className="topbox">
          <div className="mainbox">
            <div className="logo">
              <a href="">
                <img src={Logo} />
              </a>
            </div>
            <div className="topbox_r">
              <div className="topnav"><a href="#page2" className="gopage">ORIGIN</a><a href="#">DATA MECHANICS</a><a href="#">GROWTH PHASE</a><a href="#">F.A.Q</a></div>
              <div className="toptool"><a href="https://twitter.com/TwinCloudNFT"><img src={Twitter} /></a><a href="#"><img src={Discord} /></a><a href="#"><img src={Instagram} /></a></div>
              <div className="toplink"><a href="#"><img src={connect_wallet} /></a></div>
            </div>
            <div className="topbox_rbg"></div>
            <div className="nav_btn"></div>
          </div>
        </div>
      </div>

      <div className="imainer">
        
        <div className="imain1" data-aos="fade-in" data-aos-delay="100" id="page1">
          <video id="videoPlay" className="video" autoPlay playsInline preload="auto" muted="muted" loop="loop" poster="" height="100%" width="100%">  
            <source src={Video} type="video/mp4" />
          </video>
          {/* <Player ref={player} videoId="video-1">
            <source src={Video} />
          </Player> */}
        </div>
        
        <div className="imain2" id="page2">
          <div className="mainbox">
            <div className="imain2_l" data-aos="fade-right" data-aos-delay="100">
              <div className="ititle">ABOUT</div>
              <div className="iabout">
              <p>Twin Cloud is a data-generative NFT art collection, as well as a web 3 art IP focused on “sustainability”.</p>
              <p>Cloud is the reflection of ground activities. Volcano eruption sends tons of sulphur dioxide to the stratosphere. Vehicle and industrial emissions create urban fogs. Bombs and tear gases generate fleeting artificial clouds ...... We have studied hundreds of city’s atmospheric data worldwide, including greenhouse gases, aerosol pollutants, humidity, temperature, location and etc.. The algorithm generates corresponding digital clouds with features that are correlated to their ground activities.</p>
              <p>Twin Cloud is created by Black Void, a web 3 creative team. It is supported and released by Welab, a web 3 incubator dedicated to creator-economy. Empowering artists with tools, resource, utility, strategy and funds, Welab aims to help artists thrive in the web 3 world. Twin Cloud NFT holders will automatically become Welab members.</p>
              </div>
            </div>
            <div className="imain2_r" data-aos="fade-left" data-aos-delay="100"><img src={about} /></div>
          </div>
        </div>
        
        <div className="imain3" id="page3">
          <div className="mainbox">
            <div className="ititle" data-aos="fade-up" data-aos-delay="100">KEY VALUES</div>
            <div className="ikey" data-aos="fade-up" data-aos-delay="200">
              <ul>
                <li>Data-driven Generative Art</li>
                <li>Digital Sustainability</li>
                <li>Community Intelligence</li>
                <li>Relation between Physical and Virtual World</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="imain4" id="page4">
          <div className="mainbox">
            <div className="ititle" data-aos="fade-up" data-aos-delay="100">CREATOR</div>
            <div className="icreator">
              <div className="tit" data-aos="fade-up" data-aos-delay="100">[ Black Void ]</div>
              <div className="con" data-aos="fade-up" data-aos-delay="150" data-aos="fade-up" data-aos-delay="100">A WEB 3 Creator team.<br />Members from varied background, such as architecture, digital art, algorithm, artificial intelligence, data science and experimental music.<br />We are here to revolutionize the sensing, perceiving and distribution rules of art.</div>
              <div className="tag" data-aos="fade-up" data-aos-delay="200">
                <ul >
                  <li onMouseEnter={() => { setActiveIndex(0)}}   ><p><img src={creator1} /></p></li>
                  <li onMouseEnter={() => { setActiveIndex(1)}}  ><p><img src={creator2} /></p></li>
                  <li onMouseEnter={() => { setActiveIndex(2)}}   className="on"><p><img src={creator3} /></p></li>
                  <li onMouseEnter={() => { setActiveIndex(3)}}  ><p><img src={creator4} /></p></li>
                  <li onMouseEnter={() => { setActiveIndex(4)}}  ><p><img src={creator5} /></p></li>
                </ul>
              </div>
              <div className="down" data-aos="fade-up" data-aos-delay="250"></div>
              
              <div className="info" data-aos="fade-up" data-aos-delay="300">
                <div className="item" >
                  <div className="t">{dataArr[activeIndex]?.ti}</div>
                  <div className="m">{dataArr[activeIndex]?.me}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="imain5" id="page5">
          <div className="mainbox">
            <div className="ititle" data-aos="fade-up" data-aos-delay="100">INCUBATOR</div>
            <div className="ipartner">
              <div className="tit" data-aos="fade-up" data-aos-delay="200">[ Welab ]</div>
              <div className="img" data-aos="fade-up" data-aos-delay="250"><img src={welab_logo} /></div>
              <div className="con" data-aos="fade-up" data-aos-delay="300">
              <p>An incubator dedicated to creator economy.</p>
              <p>Team members have extensive experience in marketing, finance, art education, and block-chain technology.</p>
              <p>We are here to assist and grow with the new generation of artists in WEB 3.0 world.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div> 
      
      <div className="footer">
        <div className="footbox">
          <div className="flogo" data-aos="fade-up" data-aos-delay="100"><img src={ flogo} /></div>
          <div className="flink" data-aos="fade-up" data-aos-delay="200"><a href="https://twitter.com/TwinCloudNFT"><img src={twitter_f} /></a><a href="#"><img src={ discord_f} /></a></div>
        </div>
      </div>
    </div>
    
  );
}
