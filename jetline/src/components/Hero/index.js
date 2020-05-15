import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import InstallFriendly from "../../images/install-friendly-logo.svg";
import Play from "../../images/play-btn.svg";
import Caret from "../../images/caret-down-ico.inline.svg";
import Close from "../../images/close-ico.inline.svg";
import ReactModal from 'react-modal';

export default function Hero({
    title,
    description,
    data,
    background,
    //video
    videoBackground
  }) {

  const [ videoVisible, setVideoVisible ] = useState(false);
  return(
    <div id="hero" className="relative h-screen">
      <Img
        fluid={ background.childImageSharp.fluid }
        style={{position:"absolute"}}
        className="left-0 top-0 w-full h-full"
      />
      {
        !videoVisible &&
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
            <video
              className="w-full h-full left-0 top-0 object-cover"
              preload="preload" id="video" autoPlay="autoplay" muted="muted" loop="loop"
            >
              <source src={ videoBackground } type="video/mp4"></source>
            </video>
        </div>
      }
      <div className="relative w-full h-full flex justify-center items-center flex-col text-white text-center">
        <div className="flex flex-col items-center justify-center md:w-7/12 xl:w-4/12">
          <img className="mb-8" src={InstallFriendly} alt="Install friendly"/>
          <h1 className="text-7xl font-bold mb-3">{title}</h1>
          <h2 className="text-3xl uppercase mb-10">{description}</h2>
          <img onClick={()=>setVideoVisible(true)} src={Play} alt="play video"/>
        </div>
        <div className="absolute bottom-0 mb-8 flex flex-col">{data.caret_text}<img src={Caret}/></div>
      </div>
      <ReactModal
        isOpen={ videoVisible }
        shouldCloseOnOverlayClick={ true }
        shouldCloseOnEsc={ true }
        style={{
          overlay: {
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: 0,
            backgroundColor: 'rgba(30, 30, 30, 0.75)',
            zIndex:20
          },
          content: {
            position: 'static',
            width: '70%',
            height: 'auto',
            border: 0,
            background: '#000',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: 0
          }
        }}
      >
        <video
          className="w-full h-full"
          preload="preload" id="video" controls={ true }
        >
          <source src={ videoBackground } type="video/mp4"></source>
        </video>
      </ReactModal>
      {
        videoVisible &&
        <button className="absolute top-0 right-0 pt-10 pr-10 z-30 cursor-pointer" onClick={()=>setVideoVisible(false)}>
          <Close/>
        </button>
      }
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.object,
  background: PropTypes.object,
  video: PropTypes.string,
  videoBackground: PropTypes.string
}